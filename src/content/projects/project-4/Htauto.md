---
title: "HTauto"
summary: "Catalogue de voitures"
date: "Oct 20 2023"
draft: false
tags:
- PHP
- CSS
- HTML
---

Ce projet vise à créer une application web de gestion de catalogue de voitures en utilisant la méthode MVC (Modèle-Vue-Contrôleur) en PHP. L'application permet aux utilisateurs de se connecter, de rechercher des voitures par type et par marque, et d'effectuer diverses opérations telles que l'ajout de nouveaux types/marques, la modification des voitures, et le changement de mot de passe. La gestion des erreurs est également intégrée pour assurer une expérience utilisateur fluide.

- Méthode MVC
- Ajout d'un nouveau type/marque de voiture
- Modification CSS
- Changement de mot de passe
- Gestion des erreurs


![Htauto](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/projethtauto/htautoprojet.png)

Fonctionnalités Détaillées :


- Le projet est structuré selon le modèle MVC, ce qui le rend facilement maintenable et extensible. La structure des répertoires est la suivante :

![MVC](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/projethtauto/codemvc.png)



- Un menu de navigation a été ajouté pour permettre aux utilisateurs d'accéder facilement aux fonctionnalités d'ajout de type/marque et de changement de mot de passe.

![Menu](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/projethtauto/menu.png)



Exemple de la vue "Ajouter une marque de voiture : 

![Vue Ajout](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/projethtauto/vueajout.png)



- Le contrôleur principal gère les différentes actions possibles en utilisant des case pour chaque fonctionnalité, comme la liste des voitures, l'ajout d'un type/marque, et le changement de mot de passe.

![Case Ajout](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/projethtauto/caseajout.png)



- Dans ce projet, les fonctions sont séparées dans des fichiers distincts pour assurer une structure modulaire et une maintenabilité accrue. Par exemple, une fonction spécifique a été ajoutée dans le contrôleur utilisateur pour gérer la modification du mot de passe. Cette fonctionnalité traite le formulaire de changement de mot de passe et met à jour les informations dans la base de données une fois que toutes les conditions requises sont remplies.

![Fonction Update Mot de Passe](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/projethtauto/fontionupdatemdp.png)
