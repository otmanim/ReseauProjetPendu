import asyncio
import json
import websockets
import random
import time

# Variables globales auquelles auront accès tous les joueurs
connected = []  # Liste de tous les joueurs connectés définis par leur nom, leur websocket ainsi que leur statut
# allGroupes = [] #Ensemble de tous les groupes créés défini par un leader et un groupe
# On stockera le nom, websocket des membres du groupe, leur role (chef ou membre) ainsi que le mot à trouver
groupe = []
gameCoop = {'turn': "", 'idActif': 0,
            'nbErreur': 0, 'isWin': False, 'nbEssais': 8}
# Inventaire des parties en cours et de leur déroulement (seulement les parties en groupe)
games = []
inGroupe = None
words = [
    'muscle', 'chat', 'bouger', 'corps', 'amour',
    'voiture', 'strict', 'addition', 'sante', 'balle',
    'chien', 'malade', 'froid', 'chaud', 'reel'
]

global groupWord
groupWord = ""


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
    # On boucle sur la liste des connectés et envoie au websocket unique tous les éléments dont le nom =/= au nom en local
    # TO DO : Récupérer les groupes ainsi que leur leader
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
        # - playClassicMod : Création d'une partie classique. Attention, il faut vérifier si le joueur est impliqué dans un
        #                    groupe ou non. Si c'est le cas alors il faut lancer la fonction playClassicModGroupe. Sinon
        #                    playClassicModSolo
        # - playVersusServer :
        # - playWithTime :
        # - playGeoHangman :
        # - playTheme
        # - ATTENTION : ne pas oublier d'envoyer la step à tous les joueurs présents dans le groupe
        print(name + ' : DEBUT DE LA BOUCLE PRINCIPALE')
        # playerChoice = await websocket.recv()
        async for playerChoice in websocket:
            choice = json.loads(playerChoice)
            match choice["choice"]:

                case 'groupeInvitation':
                    print(name + ' : Demande de groupe en cours de traitement')
                    if (len(groupe) == 0):
                        print(name + ' : Groupe créé')
                        isInGroupe = True
                        isLeader = True
                        groupe.append(
                            {"name": name, "websocket": websocket, "role": 'leader', "word": ''})
                        for connection in connected:
                            if (connection.get('name') == name):
                                connection["inGroupOf"] = name
                            newGroupe = {
                                "type": "newGroupe",
                                "player": name,
                            }
                            print(name + ' Etat de inGroupOf ' +
                                  connection.get('inGroupOf'))
                            print(
                                name + ' Envoie de la notification de nouveau groupe à '+connection.get('name'))
                            await connection.get('websocket').send(json.dumps(newGroupe))
                    await inviteOtherPlayer(name, choice["playerName"])
                    break

                case 'groupeResponse':
                    print(name + ' : Reponse reçue')
                    if (choice["response"] == 'accepte'):
                        isInGroupe = True
                        await handleGroupeJoining(name, websocket)
                    break

                case 'leaderChoice':
                    print(
                        name + ' : Choice du mode de jeu du leader reçu, il s\'agit du ' + str(choice["step"]))
                    gameMode = {
                        "type": "gameModeChoice",
                        "game": choice["step"],
                        "nbEssais": nbEssais,
                        "versus": choice["versus"]
                    }
                    print("server la valeur de versus est : " +
                          str(choice["versus"]))
                    if (isInGroupe):
                        print(
                            name + ' : Si dans un groupe alors envoyer à tout le monde')
                        for member in groupe:
                            print(name + ' : envoie du mode de jeu à ' +
                                  member.get('name'))
                            await member.get('websocket').send(json.dumps(gameMode))
                    else:
                        print(name + ' : Pas en groupe donc on peut jouer solo')
                        await websocket.send(json.dumps(gameMode))
                    break

                case 'playClassicMod':
                    print(name + ' : PLAY CLASSIQUE')
                    withTimer = False
                    timer = 0
                    if (isInGroupe == True):
                        print("server case playClassicMod = " +
                              str(choice["versus"]))
                        if choice["versus"] == False:
                            await playClassicModCoop(websocket, name, nbEssais)
                        else:
                            await playClassicModSolo(websocket, name, nbEssais, True)
                    else:
                        await resetGame()
                        await playClassicModSolo(websocket, name, nbEssais, False)
                    break

                case 'playVersusServer':
                    print(name + ' : Jeu contre le server')
                    await playVersusServer(websocket)
                    break

                case 'playWithTime':
                    print(name + ' : PLAY WITH TIME')
                    withTimer = True
                    timer = 0
                    await playClassicModSolo(websocket, name, nbEssais, False)
                    break

                case 'playGeoHangman':
                    print(name + ' : DEBUT DE PARTIE')
                    if (isInGroupe == True):
                        await playClassicModCoop(websocket)
                    else:
                        await playGeoHangmanSolo(websocket, name)
                    break

                case 'joinGroupe':
                    print(name + ' : Demande de groupe RECUE')
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

            print(name + " = Est dans un groupe ? " + str(isInGroupe))
            print(groupe)
        print("finDuServ")

# Fonction à appeler lorsqu'un joueur tente d'inviter un autre joueur à son groupe.
# On commence par vérifier si ce joueur existe puis on lui envoie une invitation


async def resetGame():
    gameCoop['turn'] = ''
    gameCoop['idActif'] = 0
    gameCoop['nbErreur'] = 0
    gameCoop['isWin'] = False


async def inviteOtherPlayer(name, nameOtherPlayer):
    for connection in connected:
        if (connection.get('name') == nameOtherPlayer):
            print(name + ' : Autre joueur trouvé')
            invitation = {
                "type": "groupeInvitation",
                "player": name,
            }
            await connection.get('websocket').send(json.dumps(invitation))

# Fonction à appeler lorsqu'un joueur tente de rejoindre le groupe d'un autre joueur.
# On y récupère sa réponse, et on l'ajoute au groupe + notifie tous les autres joueurs du groupe de son arrivée
# Il faut aussi gérer le changement de la liste des player dans le js en ajoutant des attributs inGroupeOf


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
    print(name + ' : le leader est ' + leader)
    for member in connected:
        await member.get('websocket').send(json.dumps(joining))
        print(name + ' : Notification de nouveau membre envoyé à ' +
              member.get('name'))


# -------------------------------------------------------------------
# ----------------------JEU CLASSIQUE--------------------------------
# -------------------------------------------------------------------

# Fonction de jeu classique en groupe (Attention : on ne cherche plus les joueur dans la liste des connectés mais du groupe)
async def playClassicModSolo(websocket, name, nbEssais, versus):
    word = ""
    if versus:
        global groupWord
        if groupWord == "":
            groupWord = randomWord()
        word = groupWord
    else:
        word = randomWord()
    print("LE MOT EST " + word)
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
            print('Debut du tour')
            response = await manageLetter(message, name, word, False, incorrectGuesses, nbEssais-1)
            if response == "timeOut":
                timeOut = True
                print("fin du chrono")
                break
            if response['type'] == "wordSuggested":
                if response['isInWord'] == 'y':
                    timeOut = True
                    print("Le mot a été trouvé")
                    if versus:
                        for member in groupe:
                            if member['name'] != name:
                                lose = {
                                    "type": "lose",
                                    "isInWord": "y"
                                }
                                await member["websocket"].send(json.dumps(lose))
            if response['isInWord'] == 'n':
                incorrectGuesses += 1
            print('Message de réponse bien construit')
            print("le type de la reponse : " + response['type'])
            print("isinwordddddd : " + response['isInWord'])
            await websocket.send(json.dumps(response))
            print('Message de réponse envoyé')
            break
    print('Fin de partie')


async def playClassicModCoop(websocket, name, nbEssais):
    print(name)
    global groupWord
    if groupWord == "":
        groupWord = randomWord()
    print("LE MOT EST " + groupWord)
    # word = randomWord()
    gameString = ''
    for i in range(len(groupWord)):
        gameString += "-"
    for member in groupe:
        print(member['role'] + " : " + member['name'])
        member['word'] = gameString
    erreur = 0
    if gameCoop['turn'] == "":
        gameCoop['turn'] = groupe[1]['name']
        gameCoop['idActif'] = 1
    turn = gameCoop['turn']
    while gameCoop['nbErreur'] < gameCoop['nbEssais'] and not gameCoop['isWin']:
        print(name + " : turn = " + gameCoop['turn'])
        print("name = " + name)
        if gameCoop['turn'] == name:
            print(name + " : C\'est mon tour !")
            for member in groupe:
                turnToSend = {
                    "type": "turn",
                    "turn": gameCoop['turn']
                }
                await member.get('websocket').send(json.dumps(turnToSend))
        print(name + " : Ca attend le feu vert EN BALLE")
        async for message in websocket:
            print(name + " : Debut du tour")
            response = await manageLetter(message, erreur, groupWord, True, gameCoop['nbErreur'], gameCoop['nbEssais']-1)
            if response['type'] == "wordSuggested":
                if response['isInWord'] == 'y':
                    gameCoop['isWin'] = True
                    print("Le mot a été trouvé")
            if response['isInWord'] == 'n':
                gameCoop['nbErreur'] += 1
            print(name + ' : Message de réponse bien construit')
            if gameCoop['idActif'] < len(groupe)-1:
                gameCoop['idActif'] += 1
                print(name + ' : changement de tour effectué')
            else:
                gameCoop['idActif'] = 0
                print(name + ' : changement de tour effectué dans le else')
            gameCoop['turn'] = groupe[gameCoop['idActif']]['name']
            for member in groupe:
                await member.get('websocket').send(json.dumps(response))
                turnToSend = {
                    "type": "turn",
                    "turn": gameCoop['turn']
                }
                await member.get('websocket').send(json.dumps(turnToSend))
            print(name + ' : Message de réponse envoyé')
            break


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
    message = await websocket.recv()
    event = json.loads(message)
    mot = event["word"]
    listeMotASurveiller = []
    tailleListe = 0
    nbVoyellesTrouvees = 0
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
        if mot.lower() in listeMotASurveiller:
            print('Votre mot est : ' + mot)
            existe = True
        else:
            print('Votre mot n\'existe pas, veuillez en choisir un autre.')
    print('Il contient : ' + str(len(mot)) + " lettres")
    print('\n')
    listeMotASurveiller = []
    for line in lines:
        if len(line)-1 == len(mot):
            line = line.lower().strip()
            listeMotASurveiller.append(line)
    tailleListe = len(listeMotASurveiller)
    for i in range(len(mot)):
        motCache += "-"
    # Boucle principale
    while win == False:
        listeMotEnvoyer = []
        if len(listeMotASurveiller) > 1:
            time.sleep(2)
        else:
            time.sleep(1)
        lettresTrouvees = compteurLettresTrouvees(motCache)
        lettresRestantes = len(mot) - lettresTrouvees
        if lettresRestantes == 0:
            win = True
            print('Vous avez gagné !')
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
            print('Tentative avec : ' + lettre)
            print(motCache)
            print('Erreurs : ' + str(erreur))
            if (len(listeMotASurveiller) > 6):
                listeMot = listeMotASurveiller[0]
                listeMotEnvoyer.append(listeMotASurveiller[0])
                for i in range(1, 6):
                    listeMot += ', ' + listeMotASurveiller[i]
                    listeMotEnvoyer.append(listeMotASurveiller[i])
                listeMotEnvoyer.append(
                    'et ' + str(len(listeMotASurveiller) - 6) + ' autres mots.')
                print('Mots correspondants : ' + listeMot + ' et ' +
                      str(len(listeMotASurveiller) - 6) + ' autres mots.')
            else:
                listeMot = listeMotASurveiller[0]
                listeMotEnvoyer.append(listeMotASurveiller[0])
                for i in range(1, len(listeMotASurveiller)):
                    listeMot += ', ' + listeMotASurveiller[i]
                    listeMotEnvoyer.append(listeMotASurveiller[i])
                print('Mots correspondants : ' + listeMot + '.')
            response = {
                "type": "playServer",
                "letter": lettre,
                "isInWord": presentDansMot,
                "hiddenWord": motCache,
                "nbEssaisRestants": 7-erreur,
                "motPossibles": listeMotEnvoyer
            }
            await websocket.send(json.dumps(response))
            print('\n')


def verifLettreDansMot(lettre, mot, i):
    mot = list(mot)
    if lettre == mot[i]:
        return True
    else:
        return False


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


async def pickGeoToGuess():
    # En premier, nous devons selectionner une zone geographique a faire deviner
    lineToPick = random.randint(0, 21)
    with open(r"./data/geohangman.txt", 'r') as fp:
        for i, line in enumerate(fp):
            # read line 4 and 7
            if i == lineToPick:
                return line


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
            print('Debut du tour')
            response = await manageLetter(message, name, geoLine[0].lower(), False, incorrectGuesses, 7)
            if response['type'] == "wordSuggested":
                if response['isInWord'] == 'y':
                    end = True
                    print("Le mot a été trouvé")
            print('Message de réponse bien construit')
            if response['isInWord'] == 'n':
                incorrectGuesses += 1
            await websocket.send(json.dumps(response))
            print('Message de réponse envoyé')
            break


async def joinGroup(websocket):
    # mainPlayer.remove(websocket)
    inGroupe = websocket
    event = {
        "type": 'joinGroup',
    }
    for connection in connected:
        await connection.send()


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
                # print("le name : " + name)
                player["word"] = gameStringSolo
    else:
        for member in groupe:
            member['word'] = gameStringSolo


def getGameString(name, coop):
    if coop == False:
        for player in connected:
            if player['name'] == name:
                # print("le name : " + name)
                return player['word']
    else:
        return groupe[0]['word']


async def main():
    async with websockets.serve(handler, "", 8001):
        await asyncio.Future()  # run forever


if __name__ == "__main__":
    asyncio.run(main())
