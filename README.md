# 2manymeals

Voici mon premier projet mobile perso en React Native.

Parce que suivre une diète (au sens d'équilibrage alimentaire) tout en continuant de faire la cuisine devrait être plus facile, j'ai souhaité créer un outil qui me permette de connaître les macros nutriments d'une recette de cuisine grâce au scan des ingrédients qui la composent et/ou leur sélection directement via l'application.

Pour récupérer les données produits l'application effectue des requêtes vers l'API d'[Openfoodfacts](https://world.openfoodfacts.org/)

L'utilisateur pourra donc :

- flasher et récupérer les données d'un ingrédient
- choisir un ingrédient brut (exemple : tomate) dans la base de données (à venir)
- créer un compte (à venir)
- créer une composition "recette" (à venir)
- sauvegarder et consulter ces recettes (à venir)

Côté design je suis en cours de réalisation de la maquette.

Je profite de ce projet pour m'initier à Typescript !
Mise en place sur prochains commits.

## Demo

Bientôt !

## Features

- Scan via l'appareil photo du smartphone avec BarCodeScanner de Expo
- More to come

## Skills & packages

React Native, React, Javascript, CSS.

Expo, React navigation, axios.

## Installation

Be sure, you have installed all dependencies and applications to run React Native project on your computer : [Getting Started with React Native](https://reactnative.dev/docs/getting-started).

Install my-project with yarn 👇🏼

#### Clone this repository:

`git clone https://github.com/kevintersigni/2manymeals.git`

#### Install packages:

`yarn install`

#### When installation is complete, launch the project:

`expo start`

## Roadmap

Pour améliorer ce projet voici ce que je prévois :

- partage des compositions avec les autres utilisateurs avec système de notation
- plannification des repas
- recommandation / proposition individuelle de recette en fonction d'une répartition macros
