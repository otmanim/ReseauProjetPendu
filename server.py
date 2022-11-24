import asyncio
import json
import websockets
import random

# Variables globales auquelles auront accès tous les joueurs
connected = []  # Liste de tous les joueurs connectés définis par leur nom, leur websocket ainsi que leur statut
# allGroupes = [] #Ensemble de tous les groupes créés défini par un leader et un groupe
# On stockera le nom, websocket des membres du groupe, leur role (chef ou membre) ainsi que le mot à trouver
groupe = []
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

    # Nouvelle connection
    # On lui crée un Identifiant, puis l'ajoute à la liste des joueurs connectés et lui initialise un groupe vide
    print("new connection")
    idPlayer = len(connected)
    print("ID player : " + str(idPlayer))
    message = await websocket.recv()
    name = message
    connected.append({"name": message, "websocket": websocket,
                     "statut": 'available', "inGroupOf": '', "word": ''})
    # On notifie chaque joueur déjà existant qu'un nouveau joueur vient de rejoindre le serveur
    event = {
        "type": "connection",
        "player": message,
        "id": idPlayer,
        "statut": 'available'
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
                "inGroupOf": connection.get('inGroupOf')
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
                    }
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
                    print(name + ' : DEBUT DE PARTIE')
                    if (isInGroupe == True):
                        await playClassicModCoop(websocket, name)
                    else:
                        await playClassicModSolo(websocket, name)
                    break

                case 'playVersusServer':
                    print(name + ' : Jeu contre le server')
                    break

                case 'playWithTime':
                    print(name + ' : playWithTime')
                    break

                case 'playGeoHangman':
                    print(name + ' : DEBUT DE PARTIE')
                    if (isInGroupe == True):
                        await playClassicModCoop(websocket)
                    else:
                        await playGeoHangmanSolo(websocket)
                    break

                case 'joinGroupe':
                    print(name + ' : Demande de groupe RECUE')
                    break

                case _:
                    break

            print(name + " = Est dans un groupe ? " + str(isInGroupe))
            print(groupe)
        print("finDuServ")

# Fonction à appeler lorsqu'un joueur tente d'inviter un autre joueur à son groupe.
# On commence par vérifier si ce joueur existe puis on lui envoie une invitation


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
async def playClassicModSolo(websocket, name):
    word = randomWord()
    print("LE MOT EST " + word)
    gameStringSolo = ""
    for i in range(len(word)):
        gameStringSolo += "-"
    updateGameStringSolo(name, gameStringSolo)
    end = False
    erreur = 0
    while end == False:
        async for message in websocket:
            print('Debut du tour')
            response = await manageLetterSolo(message, name, word)
            print('Message de réponse bien construit')
            await websocket.send(json.dumps(response))
            print('Message de réponse envoyé')
            break


async def playClassicModCoop(websocket, name):
    print(name)
    global groupWord
    if groupWord == "":
        groupWord = randomWord()
    print("LE MOT EST " + groupWord)
    # word = randomWord()
    global gameString
    for member in groupe:
        print(member['role'] + " : " + member['name'])
        if member['role'] == 'leader':
            if member['name'] == name:
                for i in range(len(groupWord)):
                    gameString += "-"
    end = False
    erreur = 0
    while end == False:
        async for message in websocket:
            print('Debut du tour')
            response = await manageLetterCoop(message, erreur)
            print('Message de réponse bien construit')
            for member in groupe:
                await member.get('websocket').send(json.dumps(response))
            print('Message de réponse envoyé')
            break


async def manageLetterSolo(message, name, word):
    event = json.loads(message)
    index = event["index"]
    letter = event["letter"]
    response = {
        "type": "play",
        "index": index,
        "isInWord": isInWord(letter, name, word),
        "hiddenWord": getGameStringSolo(name)
    }
    return response


async def manageLetterCoop(message, erreur):
    event = json.loads(message)
    index = event["index"]
    letter = event["letter"]
    response = {
        "type": "play",
        "index": index,
        "isInWord": isInWord(letter),
        "hiddenWord": gameString
    }
    return response
# -------------------------------------------------------------------
# ----------------------JEU GEO HANGMAN------------------------------
# -------------------------------------------------------------------


async def pickGeoToGuess():
    # En premier, nous devons selectionner une zone geographique a faire deviner
    lineToPick = random.randint(0, 49)
    with open(r"./data/geohangman.txt", 'r') as fp:
        for i, line in enumerate(fp):
            # read line 4 and 7
            if i == lineToPick:
                return line


async def playGeoHangmanSolo(websocket):
    end = False
    erreur = 0
    geoLine = await pickGeoToGuess()
    geoLine = geoLine.split(';')
    hints = {
        "type": "hints",
        "first": geoLine[1],
        "second": geoLine[2],
        "third": geoLine[3]
    }
    await websocket.send(json.dumps(hints))
    while end == False:
        async for message in websocket:
            print('Debut du tour')
            response = await manageLetter(message, erreur)
            print('Message de réponse bien construit')
            await websocket.send(json.dumps(response))
            print('Message de réponse envoyé')
            print('erreur = ' + str(erreur))
            break


async def joinGroup(websocket):
    # mainPlayer.remove(websocket)
    inGroupe = websocket
    event = {
        "type": 'joinGroup',
    }
    for connection in connected:
        await connection.send()


def isInWord(letter, name, word):
    global incorrectGuesses
    gameString = ""
    if letter in word:
        gameString = list(getGameStringSolo(name))
        for i in range(len(word)):
            if word[i] == letter:
                gameString[i] = letter
        gameString = ''.join(gameString)
        updateGameStringSolo(name, gameString)
        return 'y'
    else:
        incorrectGuesses += 1
        return 'n'


def randomWord():
    return words[random.randint(0, 14)]


def updateGameStringSolo(name, gameStringSolo):
    for player in connected:
        if player['name'] == name:
            # print("le name : " + name)
            player["word"] = gameStringSolo


def getGameStringSolo(name):
    for player in connected:
        if player['name'] == name:
            # print("le name : " + name)
            return player['word']


async def main():
    async with websockets.serve(handler, "", 8001):
        await asyncio.Future()  # run forever


if __name__ == "__main__":
    asyncio.run(main())
