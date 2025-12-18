
/* UPPGIFT 1 Split the nota */

Sätt variabel summa till angivet värde
Sätt variabel dricks till angivet värde
Sätt variabel vänner till angivet värde

om summa, dricks och vänner fått ett värde

		räkna ut summa * dricks = totala_kostnaden

		räkna ut totala_kostnaden / vänner = betala

Skriv ut "Så mycket behöver ni betala vadera" + betala


/* UPPGIFT 2 Word ladder*/

START

Chose difficultly

SET startword from wordbook
SET endword from wordbook
SET newword to startword


Check IF you can go from startword to endword by changing 1 letter at the time

Check

IF startword and endword same lenght

Put startword and endword in a ladder

Game start

SET Round = 0

While newword != endword

	SET previousword = newword

	USER INPUT changes 1 letter in newword

	Check IF USER INPUT changed only 1 letter from the previousword to newword

	IF more or less then 1 letter has changed, 
	
	PRINT "You can have to and can only change 1 letter try again!"

	Else 
	
	Check IF the newword is in the wordbook

	IF newword is not in the wordbook 
	
	PRINT "newword is not a word try again"

	Else 
	
	SET variable newword to USER INPUT 
	SET round = round + 1

SET round = round + 1
PRINT "Du vann! det tog" + round and PRINT the ladder


/*
Hur jag tänkte i steg!

Man startar spelet vid start skapas 2 ord ett startord och ett slutord
dessa 2 ord ska ha samma längd och läggas i en stege där start är på top och end är på botten
Nu ska spelaren ändra gå från startordet med att ändra en bokstav i taget till ett annat ord från startordet så att det blir slutordet
Spelet kollar om ordet finns med i ordboken och om användaren bara ändrat 1 ord
om ordet är likamed slutordet så är spelet slut annars fortsätt tills nästa runda ända tills man nått slutordet
vid ordet = slutordet sluta spelet skriv hur många rundor det tog och du har vunnit!


Spelet startas start och slutord skapas
verifierar att båda orden är lika långa samt att dem är olika
1 bokstav ändras för att bilda ett nytt ord
verifierar att nya ordet finns med i ordboken samt kollar om det är samma ord som slutord
om inte fortsätt till nästa runda
om det är slutordet avsluta spel med resultat


start
chose difficultly
SET startword and endword
Check IF startword can become endword with game rules and so they are the same lenght
Put startword and endword in a ladder
Game start round 1
User INPUT change 1 letter in startword
Check IF only 1 letter has been changed from startword
IF not retry
Else check IF the new word is in the wordbook
IF not retry
Else Check IF the new word == endword /* While loop?
IF word == endword Game finished give result on how many rounds it took and show the ladder
Else go to new round and change 1 letter based on the new word and add the new word to the ladder



/*
