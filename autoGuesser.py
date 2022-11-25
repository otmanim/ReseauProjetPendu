import time
indexLettre = 0
clavierSelonFrenquence = [
    'e',
    'a',
    'i',
    's',
    'n',
    'r',
    't',
    'o',
    'l',
    'u',
    'd',
    'c',
    'm',
    'p',
    'g',
    'b',
    'v',
    'h',
    'f',
    'q',
    'y',
    'x',
    'j',
    'k',
    'w',
    'z',
]

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


listeMotASurveiller = []
tailleListe = 0
nbVoyellesTrouvees = 0
motCache = ''
lettresTrouvees = 0
lettresRestantes = 0
win = False
erreur = 0

file = open('./data/dictionnaire.txt', "r")
lines = file.readlines()
file.close()
for line in lines:
    listeMotASurveiller.append(line.strip().lower())
existe = False
while existe == False:
    mot = input('Quel est votre mot ?\n').lower()
    print('mot en majuscule : ' + mot.lower())
    if mot.lower() in listeMotASurveiller: 
        print('Votre mot est : ' + mot)
        existe = True
    else:
        print('Votre mot n\'existe pas, veuillez en choisir un autre.')
print('Il contient : ' + str(len(mot)) + " lettres")
print('\n')

#Première étape : On va sélectionner tous les mots qui comportent le même nombre de lettres
listeMotASurveiller = []
for line in lines:
    if len(line)-1 == len(mot):
        line = line.lower().strip()
        listeMotASurveiller.append(line)
tailleListe = len(listeMotASurveiller)

#Etape Secrete : on cache le mot :
for i in range(len(mot)):
        motCache += "-"

#Boucle principale
while win == False:
    if len(listeMotASurveiller) > 1:
        time.sleep(1)
    else:
        time.sleep(0.2)
    lettresTrouvees = compteurLettresTrouvees(motCache)
    lettresRestantes = len(mot) - lettresTrouvees
    if lettresRestantes == 0:
        win = True
        print('Vous avez gagné !')
    if win == False :
        lettre = clavierSelonFrenquence[indexLettre]
        while not verifLettreUtile(listeMotASurveiller, lettre):
            indexLettre += 1
            lettre = clavierSelonFrenquence[indexLettre]
        if lettre in mot:
            motCache = changerMotCache(lettre, motCache, mot)
        else:
            erreur += 1
        lettresTrouvees = compteurLettresTrouvees(motCache)
        listeMotASurveiller = miseAJourListeSurveiller(listeMotASurveiller, motCache, lettresTrouvees)
        indexLettre += 1
        print('Tentative avec : ' + lettre)
        print(motCache)
        print('Erreurs : '+ str(erreur))
        if (len(listeMotASurveiller) > 6):
            listeMot = listeMotASurveiller[0]
            for i in range(1,6):
                listeMot += ', '+ listeMotASurveiller[i]
            print('Mots correspondants : ' +listeMot+ ' et '+ str(len(listeMotASurveiller) - 6) + ' autres mots.' )
        else:
            listeMot = listeMotASurveiller[0]
            for i in range(1, len(listeMotASurveiller)):
                listeMot += ', '+ listeMotASurveiller[i]
            print('Mots correspondants : ' +listeMot+ '.')
        print('\n')

