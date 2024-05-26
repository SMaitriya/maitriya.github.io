---
title: "Projet Marketplace"
summary: "Création d'un model de marketplace B to B pour mon stage"
date: "Mar 15 2024"
draft: false 
tags:
- React
- Javascript
- PHP
- Laravel

repoUrl: https://github.com/SMaitriya/MarketPlace
---

Pendant mon stage chez Fin de Déchet, j'ai travaillé sur la création d'une Marketplace BtoB pour le secteur de la filmographie et de la télévision. Cette plateforme permet aux entreprises de partager ou de vendre des biens, réduisant ainsi le gaspillage dans l'industrie du divertissement et préservant l'environnement en favorisant la réutilisation des décors et des équipements de tournage. Notre objectif est de contribuer à rendre l'industrie du divertissement plus durable et responsable.



J'ai choisi d'utiliser Laravel pour le backend et React pour le frontend. Après avoir réalisé le maquettage et établi une base de données logique, voici ce que j'ai accompli :

<iframe width="560" height="315" src="https://www.youtube.com/embed/zxslw7yDti8?" frameborder="0" allowfullscreen></iframe>



- Connexion via Breeze : Mise en place d'une connexion sécurisée et fluide pour les utilisateurs avec Breeze.


- Publication de biens par catégorie : Développement d'une fonctionnalité permettant aux utilisateurs de poster des biens par catégorie de produit.

- Validation des produits : Intégration de mécanismes de validation solides pour assurer la qualité des produits soumis.

- Page d'accueil des produits : Création d'une page dynamique présentant tous les produits disponibles, offrant une vue d'ensemble complète.


Voici quelques partie du code :

![Utilisation du hook useForm pour gérer les données du formulaire](https://github.com/SMaitriya/Portfolio/raw/main/public/images/projetmarket/useform.png)


- Utilisation  du hook useForm pour gérer les données du formulaire, les actions de soumission, le traitement en cours, la réinitialisation et les erreurs associées.
- Utilisation du hook useEffect de React pour mettre à jour la donnée "Typeproduit" avec la valeur de selectedProductType chaque fois que cette dernière change dans le composant


![Utilisation de la méthode .map()](https://github.com/SMaitriya/Portfolio/raw/main/public/images/projetmarket/map.png)

- Utilisation de la méthode .map() pour itérer sur chaque propriété propre filtrée, ce code affiche dynamiquement des champs de saisie. L'utilisation de setData permet de mettre à jour les valeurs des propriétés propres dans l'état du formulaire en fonction de la saisie de l'utilisateur, incluant une description spécifique sur le champ d'index 1 pour le produit "sols".



![Utilisation de Laravel](https://github.com/SMaitriya/Portfolio/raw/main/public/images/projetmarket/laravel.png)


- Extraction des offres depuis la base de données en utilisant PHP Laravel, leurs photos et propriétés de la base de données, puis les passer à la vue pour affichage.



