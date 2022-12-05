import asyncio
import json
import websockets
import random
import time

# -------------- Variables globales auquelles auront accès tous les joueurs -------------
# Liste de tous les joueurs connectés définis par leur nom, leur websocket ainsi que leur statut
connected = [] 
# On stockera le nom, websocket des membres du groupe, leur role (chef ou membre) ainsi que le mot à trouver
groupe = [] 
# L'ensemble des paramètres d'une partie multijoueur
gameCoop = {'turn': "", 'idActif': 0,
            'nbErreur': 0, 'isWin': False, 'nbEssais': 8}
# Liste de mot pouvant être choisi par le serveur
words = [
    'muscle', 'chat', 'bouger', 'corps', 'amour',
    'voiture', 'strict', 'addition', 'sante', 'balle',
    'chien', 'malade', 'froid', 'chaud', 'reel'
]
# Mot tiré au sort pour une partie en multijoueur (mis en global pour que tout le monde y ait accès)
global groupWord
groupWord = ""


# -------------- FONCTIONS DU SERVEUR -------------
# Fonction principale lors du lancement du serveur
async def handler(websocket):

    isInGroupe = False
    isLeader = False
    global gameString
    gameString = ""
    global incorrectGuesses
    incorrectGuesses = 0
    nbEssais = 8
    versus = False

    # Nouvelle connection
    # On lui crée un Identifiant, puis l'ajoute à la liste des joueurs connectés et lui initialise un groupe vide
    print("new connection")
    idPlayer = len(connected)
    print("ID player : " + str(idPlayer))
    message = await websocket.recv()
    image = await websocket.recv()
    name = message
    connected.append({"name": message, "websocket": websocket,
                     "statut": 'available', "inGroupOf": '', "word": '', "image": image})
    # On notifie chaque joueur déjà existant qu'un nouveau joueur vient de rejoindre le serveur
    event = {
        "type": "connection",
        "player": message,
        "id": idPlayer,
        "statut": 'available',
        "image": image
    }
    for connection in connected:
        print('Envoie de la notification de nouvelle connexion')
        await connection.get('websocket').send(json.dumps(event))

    # On envoie au nouveau joueur la liste des anciens joueurs
    for connection in connected:
        if (connection.get('name') != name):
            event = {
                "type": "getPlayers",
                "player": connection.get('name'),
                "statut": connection.get('statut'),
                "inGroupOf": connection.get('inGroupOf'),
                "image": connection.get('image')
            }
            await websocket.send(json.dumps(event))

    # Lancement du bon déroulement du jeu dans le menu principal
    while True:
        # Le serveur reste en attente d'un envoie du client pour savoir vers où il doit se diriger, plusieurs possibilité :
        # - groupeInvitation : Un joueur a envoyé une invitation à un autre joueur pour qu'il rejoigne son groupe
        # - groupeRespond : réponse d'un client suite à une demande de groupe envoyé par le client actuel
        # - playClassicMod : Création d'une partie classique.
        # - playVersusServer : Création d'une partie contre le serveur.
        # - playWithTime : Création d'une partie avec temps.
        # - playGeoHangman : Création d'une partie geo hangman.
        async for playerChoice in websocket:
            choice = json.loads(playerChoice)
            match choice["choice"]:

                case 'groupeInvitation':
                    print(name + ' : Demande de groupe')
                    if (len(groupe) == 0):
                        isInGroupe = True
                        groupe.append(
                            {"name": name, "websocket": websocket, "role": 'leader', "word": ''})
                        for connection in connected:
                            if (connection.get('name') == name):
                                connection["inGroupOf"] = name
                            newGroupe = {
                                "type": "newGroupe",
                                "player": name,
                            }
                            await connection.get('websocket').send(json.dumps(newGroupe))
                    await inviteOtherPlayer(name, choice["playerName"])
                    break

                case 'groupeResponse':
                    print(name + ' : Reponse de groupe reçue')
                    if (choice["response"] == 'accepte'):
                        isInGroupe = True
                        await handleGroupeJoining(name, websocket)
                    break

                case 'leaderChoice':
                    print( name + ' : Choice du mode de jeu du leader reçu, il s\'agit du ' + str(choice["step"]))
                    gameMode = {
                        "type": "gameModeChoice",
                        "game": choice["step"],
                        "nbEssais": nbEssais,
                        "versus": choice["versus"]
                    }
                    if (isInGroupe):
                        for member in groupe:
                            await member.get('websocket').send(json.dumps(gameMode))
                    else:
                        await websocket.send(json.dumps(gameMode))
                    break

                case 'playClassicMod':
                    print(name + ' : Lancement d\'une partie classique')
                    if (isInGroupe == True):
                        if choice["versus"] == False:
                            await resetGame()
                            await playClassicModCoop(websocket, name, nbEssais)
                        else:
                            await playClassicModSolo(websocket, name, nbEssais, True)
                    else:
                        await playClassicModSolo(websocket, name, nbEssais, False)
                    break

                case 'playVersusServer':
                    print(name + ' : Lancement d\'une partie contre le serveur')
                    await playVersusServer(websocket)
                    break

                case 'playWithTime':
                    print(name + ' : Lancement d\'une partie contre le temps')
                    await playClassicModSolo(websocket, name, nbEssais, False)
                    break

                case 'playGeoHangman':
                    print(name + ' : Lancement d\'une partie geoHangman')
                    if (isInGroupe == True):
                        await playClassicModCoop(websocket)
                    else:
                        await playGeoHangmanSolo(websocket, name)
                    break

                case 'joinGroupe':
                    print(name + ' : Demande de groupe reçue')
                    break
            
                case 'beReady':
                    break

                case 'endGame':
                    break

                case 'changeDifficulty':
                    if (isInGroupe == True):
                        if choice['difficulty'] == 'EASY':
                            gameCoop['nbEssais'] = 10
                        elif choice['difficulty'] == 'MEDIUM':
                            gameCoop['nbEssais'] = 8
                        elif choice['difficulty'] == 'HARD':
                            gameCoop['nbEssais'] = 5
                        break
                    else:
                        if choice['difficulty'] == 'EASY':
                            nbEssais = 10
                        elif choice['difficulty'] == 'MEDIUM':
                            nbEssais = 8
                        elif choice['difficulty'] == 'HARD':
                            nbEssais = 5
                        break

                case _:
                    break

# Fonction qui permet de remettre les réinitialiser les paramètre de jeu pour un groupe
async def resetGame():
    gameCoop['turn'] = ''
    gameCoop['idActif'] = 0
    gameCoop['nbErreur'] = 0
    gameCoop['isWin'] = False

# Fonction qui permet d'inviter un autre joueur à son groupe
async def inviteOtherPlayer(name, nameOtherPlayer):
    for connection in connected:
        if (connection.get('name') == nameOtherPlayer):
            invitation = {
                "type": "groupeInvitation",
                "player": name,
            }
            await connection.get('websocket').send(json.dumps(invitation))

# Fonction à appeler lorsqu'un joueur tente de rejoindre le groupe d'un autre joueur.
async def handleGroupeJoining(name, websocket):
    groupe.append({"name": name, "websocket": websocket,
                  "role": 'member', "word": ''})
    print(name + ' : Nouveau membre dans le groupe')
    leader = ''
    for member in groupe:
        if (member.get('role') == 'leader'):
            leader = member.get('name')
    for connection in connected:
        if (connection.get('name') == name):
            connection['inGroupOf'] = leader
    joining = {
        "type": "newMember",
        "name": name,
        "leader": leader
    }
    for member in connected:
        await member.get('websocket').send(json.dumps(joining))


# -------------------------------------------------------------------
# ----------------------JEU CLASSIQUE--------------------------------
# -------------------------------------------------------------------

# Fonction de jeu classique (Cette fonction gère aussi le jeu en versus et avec le temps)
async def playClassicModSolo(websocket, name, nbEssais, versus):
    word = ""
    if versus:
        global groupWord
        if groupWord == "":
            groupWord = randomWord()
        word = groupWord
    else:
        word = randomWord()
    print("Le mot est : " + word)
    gameStringSolo = ""
    incorrectGuesses = 0
    timeOut = False
    for i in range(len(word)):
        gameStringSolo += "-"
    updateGameString(name, gameStringSolo, False)
    wordToSend = {
        "type": "word",
        "word": gameStringSolo,
        "turn": name
    }
    await websocket.send(json.dumps(wordToSend))
    while incorrectGuesses < nbEssais and not timeOut:
        async for message in websocket:
            response = await manageLetter(message, name, word, False, incorrectGuesses, nbEssais-1)
            if response == "timeOut":
                timeOut = True
                break
            if response['type'] == "wordSuggested":
                if response['isInWord'] == 'y':
                    timeOut = True
                    if versus:
                        await sendEndToAll(False, name)
                        groupWord = ''
            if response['isInWord'] == 'n':
                incorrectGuesses += 1
            await websocket.send(json.dumps(response))
            if countNumberLetterRemain(name, False) == 0:
                timeOut = True
                response = {
                    "type": "wordSuggested",
                    "isInWord": 'y',
                }
                await websocket.send(json.dumps(response))
                if versus:
                    await sendEndToAll(False, name)
            break

#Fonction de mode de jeu classique en cooperation 
async def playClassicModCoop(websocket, name, nbEssais):
    global groupWord
    if groupWord == "":
        groupWord = randomWord()
    print("Le mot est : " + groupWord)
    gameString = ''
    for i in range(len(groupWord)):
        gameString += "-"
    for member in groupe:
        member['word'] = gameString
    erreur = 0
    if gameCoop['turn'] == "":
        gameCoop['turn'] = groupe[1]['name']
        gameCoop['idActif'] = 1
    while gameCoop['nbErreur'] < gameCoop['nbEssais'] and not gameCoop['isWin']:
        if gameCoop['turn'] == name:
            for member in groupe:
                turnToSend = {
                    "type": "turn",
                    "turn": gameCoop['turn']
                }
                await member.get('websocket').send(json.dumps(turnToSend))
        async for message in websocket:
            if gameCoop['isWin'] == True:
                break
            response = await manageLetter(message, erreur, groupWord, True, gameCoop['nbErreur'], gameCoop['nbEssais']-1)
            if response['type'] == "wordSuggested":
                if response['isInWord'] == 'y':
                    gameCoop['isWin'] = True
                    groupWord = ''
                    for member in groupe:
                            if member['name'] != name:
                                end = {
                                    "type": "end",
                                    "win": True,
                                    "isInWord": "y"
                                }
                                await member["websocket"].send(json.dumps(end))
            if response['isInWord'] == 'n':
                gameCoop['nbErreur'] += 1
            if gameCoop['idActif'] < len(groupe)-1:
                gameCoop['idActif'] += 1
            else:
                gameCoop['idActif'] = 0
            gameCoop['turn'] = groupe[gameCoop['idActif']]['name']
            for member in groupe:
                await member.get('websocket').send(json.dumps(response))
                turnToSend = {
                    "type": "turn",
                    "turn": gameCoop['turn']
                }
                await member.get('websocket').send(json.dumps(turnToSend))
            if countNumberLetterRemain(name, True) == 0:
                gameCoop['isWin'] = True
                response = {
                    "type": "wordSuggested",
                    "isInWord": 'y',
                }
                await websocket.send(json.dumps(response))
                await sendEndToAll(True, name)
            break

# Fonction permettant d'envoyer un message de fin de partie à tous les membres du groupe : à utiliser uniquement en mode multi
async def sendEndToAll(win, name):
    for member in groupe:
        if member['name'] != name:
            end = {
                "type": "end",
                "win": win,
                "isInWord": "y"
            }
            await member["websocket"].send(json.dumps(end))

# Fonction permettant le traitement de la réponse du client (on vérifie si la proposition fait parti du mot)
async def manageLetter(message, name, word, coop, incorrectGuesses, nbEssais):
    event = json.loads(message)
    response = None
    rep = 'n'
    if event["type"] == "play":
        index = event["index"]
        letter = event["letter"]
        response = {
            "type": "play",
            "index": index,
            "isInWord": isInWord(letter, name, word, coop),
            "hiddenWord": getGameString(name, coop),
            "nbEssaisRestants": nbEssais-incorrectGuesses
        }
    elif event["type"] == "endGame":
        response = "timeOut"
    elif event["type"] == "play-word":
        if word == event["word"]:
            rep = 'y'
        response = {
            "type": "wordSuggested",
            "isInWord": rep,
        }
    return response

# -------------------------------------------------------------------
# ----------------------JEU VERSUS SERVER----------------------------
# -------------------------------------------------------------------


async def playVersusServer(websocket):
    indexLettre = 0
    clavierSelonFrenquence = ['e', 'a', 'i', 's', 'n', 'r', 't', 'o', 'l', 'u', 'd',
                              'c', 'm', 'p', 'g', 'b', 'v', 'h', 'f', 'q', 'y', 'x', 'j', 'k', 'w', 'z', ]
    listeMotASurveiller = []
    motCache = ''
    lettresTrouvees = 0
    lettresRestantes = 0
    presentDansMot = 'n'
    win = False
    erreur = 0
    file = open('./data/dictionnaire.txt', "r")
    lines = file.readlines()
    file.close()
    for line in lines:
        listeMotASurveiller.append(line.strip().lower())
    existe = False
    while existe == False:
        message = await websocket.recv()
        event = json.loads(message)
        mot = event["word"]
        if mot.lower() in listeMotASurveiller:
            print('Votre mot est : ' + mot)
            response = {
                'type': 'serverValidation',
            }
            await websocket.send(json.dumps(response))
            existe = True
        else:
            response = {
                'type': 'serverError',
            }
            await websocket.send(json.dumps(response))
    listeMotASurveiller = []
    for line in lines:
        if len(line)-1 == len(mot):
            line = line.lower().strip()
            listeMotASurveiller.append(line)
    for i in range(len(mot)):
        motCache += "-"
    # Boucle principale
    while erreur < 9:
        listeMotEnvoyer = []
        if len(listeMotASurveiller) > 1:
            time.sleep(2)
        else:
            time.sleep(1)
        lettresTrouvees = compteurLettresTrouvees(motCache)
        lettresRestantes = len(mot) - lettresTrouvees
        if lettresRestantes == 0:
            win = True
            response = {
                "type": "endServer",
                "win": True,
            }
            await websocket.send(json.dumps(response))
            break
        if win == False:
            lettre = clavierSelonFrenquence[indexLettre]
            while not verifLettreUtile(listeMotASurveiller, lettre):
                indexLettre += 1
                lettre = clavierSelonFrenquence[indexLettre]
            if lettre in mot:
                motCache = changerMotCache(lettre, motCache, mot)
                presentDansMot = 'y'
            else:
                erreur += 1
                presentDansMot = 'n'
            lettresTrouvees = compteurLettresTrouvees(motCache)
            listeMotASurveiller = miseAJourListeSurveiller(
                listeMotASurveiller, motCache, lettresTrouvees)
            indexLettre += 1
            if (len(listeMotASurveiller) > 6):
                listeMot = listeMotASurveiller[0]
                listeMotEnvoyer.append(listeMotASurveiller[0])
                for i in range(1, 6):
                    listeMot += ', ' + listeMotASurveiller[i]
                    listeMotEnvoyer.append(listeMotASurveiller[i])
                listeMotEnvoyer.append(
                    'et ' + str(len(listeMotASurveiller) - 6) + ' autres mots.')
            else:
                listeMot = listeMotASurveiller[0]
                listeMotEnvoyer.append(listeMotASurveiller[0])
                for i in range(1, len(listeMotASurveiller)):
                    listeMot += ', ' + listeMotASurveiller[i]
                    listeMotEnvoyer.append(listeMotASurveiller[i])
            response = {
                "type": "playServer",
                "letter": lettre,
                "isInWord": presentDansMot,
                "hiddenWord": motCache,
                "nbEssaisRestants": 7-erreur,
                "motPossibles": listeMotEnvoyer
            }
            await websocket.send(json.dumps(response))


def changerMotCache(lettre, motCache, mot):
    motCache = list(motCache)
    mot = list(mot)
    for i in range(len(mot)):
        if mot[i] == lettre:
            motCache[i] = lettre
    motCache = ''.join(motCache)
    return motCache


def compteurLettresTrouvees(motCache):
    compteur = 0
    motCache = list(motCache)
    for i in range(len(motCache)):
        if motCache[i] == '-':
            compteur += 1
    return len(motCache) - compteur


def miseAJourListeSurveiller(listeMotASurveiller, motCache, lettresTrouvees):
    nouvelleListe = []
    for dico in listeMotASurveiller:
        compteur = 0
        dicoListe = list(dico)
        motCache = list(motCache)
        for i in range(len(motCache)):
            if motCache[i] != '-':
                if motCache[i] == dicoListe[i]:
                    compteur += 1
            if compteur == lettresTrouvees:
                nouvelleListe.append(dico)
                break
    return nouvelleListe


def verifLettreUtile(listeMotASurveiller, lettre):
    for mot in listeMotASurveiller:
        if lettre in mot:
            return True

# -------------------------------------------------------------------
# ----------------------JEU GEO HANGMAN------------------------------
# -------------------------------------------------------------------

# On choisi le lieu géographique qui sera à deviner
async def pickGeoToGuess():
    lineToPick = random.randint(0, 21)
    with open(r"./data/geohangman.txt", 'r') as fp:
        for i, line in enumerate(fp):
            if i == lineToPick:
                return line

#Fonction de mode de jeu geoHangman 
async def playGeoHangmanSolo(websocket, name):
    end = False
    gameStringSolo = ''
    incorrectGuesses = 0
    geoLine = await pickGeoToGuess()
    geoLine = geoLine.split(';')
    for i in range(len(geoLine[0].lower())):
        gameStringSolo += "-"
    updateGameString(name, gameStringSolo, False)
    hints = {
        "type": "hints",
        "first": geoLine[1],
        "second": geoLine[2],
        "third": geoLine[3]
    }
    await websocket.send(json.dumps(hints))
    wordToSend = {
        "type": "word",
        "word": gameStringSolo,
    }
    await websocket.send(json.dumps(wordToSend))
    while incorrectGuesses < 8 and not end:
        async for message in websocket:
            response = await manageLetter(message, name, geoLine[0].lower(), False, incorrectGuesses, 7)
            if response['type'] == "wordSuggested":
                if response['isInWord'] == 'y':
                    end = True
            if response['isInWord'] == 'n':
                incorrectGuesses += 1
            await websocket.send(json.dumps(response))
            if countNumberLetterRemain(name, False) == 0:
                end = True
                response = {
                    "type": "wordSuggested",
                    "isInWord": 'y',
                }
                await websocket.send(json.dumps(response))
            break


def isInWord(letter, name, word, coop):
    gameString = ""
    if letter in word:
        gameString = list(getGameString(name, coop))
        for i in range(len(word)):
            if word[i] == letter:
                gameString[i] = letter
        gameString = ''.join(gameString)
        updateGameString(name, gameString, coop)
        return 'y'
    else:
        return 'n'


def randomWord():
    return words[random.randint(0, 14)]


def updateGameString(name, gameStringSolo, coop):
    if coop == False:
        for player in connected:
            if player['name'] == name:
                player["word"] = gameStringSolo
    else:
        for member in groupe:
            member['word'] = gameStringSolo


def countNumberLetterRemain(name, coop):
    gameString = getGameString(name, coop)
    return gameString.count('-')

def getGameString(name, coop):
    if coop == False:
        for player in connected:
            if player['name'] == name:
                return player['word']
    else:
        return groupe[0]['word']


async def main():
    async with websockets.serve(handler, "0.0.0.0", 8001):
        await asyncio.Future()  # run forever


if __name__ == "__main__":
    asyncio.run(main())
