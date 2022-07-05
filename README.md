# dojo-webscrap-2022.07.04

## Consignes :

Obtenir des données à partir de cette page : https://www.timeout.com/sydney/restaurants/the-best-vegan-restaurants-in-sydney
Utiliser Puppeteer : https://pptr.dev/

Make it so that your data object looks like that :
{
articleTitle: 'The best vegan restaurants in Sydney',
articleDate: 'Tuesday 26 April 2022',
restaurants: [
'Gigi Pizzeria',
'Lonely Mouth',
"Mary's CQ",
'Comeco Foods',
'Yellow',
"Peppe's",
'Shift Eatery',
'Otto Ristorante Sydney',
"Mark and Vinny's Spaghetti and Spritz Bar",
'Bad Hombres',
'Alibi Bar and Dining',
'Bodhi Restaurant Bar',
'Little Turtle',
"Yulli's",
'Golden Lotus',
'The Green Lion',
'Soul Burger Glebe',
'Funky Pies'
]
}

A consulter :
https://returnstring.com/articles/puppeteer-elements-and-values
https://stackoverflow.com/questions/64578952/puppeteer-returns-empty-objects

## To Do :

npm init -y
npm i puppeteer
npm i
Créer scrape.js et coder
Puis node scrape.js pour lancer le script
En l'état : ça marche
