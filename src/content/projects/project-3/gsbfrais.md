---
title: "GSB frais"
summary: "Projet de classe, extention d'une application web pour gérer les frais avec un comptable"
date: "April 14 2024"
draft: false
tags:
- Laravel
- PHP
- CSS
- HTML

repoUrl: https://github.com/SMaitriya/Gsbfrais

---



J'ai conçu une extension spécifique pour les comptables dans le cadre du projet de standardisation des frais des visiteurs au sein du laboratoire. Cette extension, intégrée au site existant, offre une plateforme dédiée permettant aux comptables de centraliser et de gérer toutes les opérations liées aux frais des visiteurs. Cela optimise la gestion financière du laboratoire et améliore l'efficacité du processus global de gestion des dépenses

<br>

- Recherche des frais validés par le visiteur : J'ai développé des fonctions spécifiques permettant aux comptables de rechercher et d'accéder facilement aux frais que les visiteurs ont validés

![Projet Application Frais](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbfraisprojet/projet3.png)




- Affichage et modification des frais validés par le visiteur: Les comptables peuvent désormais consulter et modifier les frais validés par les visiteurs grâce à une interface intuitive. Ils ont également la possibilité de valider les frais et de recalculer les frais forfaitisés

![Projet Application Frais](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbfraisprojet/projet%206.png)






- Affichage des frais validés par le comptable avec recherche par mois avec exportation PDF: J'ai développé une fonctionnalité permettant aux comptables de visualiser tous les frais validés, en leur offrant la possibilité de filtrer les résultats par mois. Cela leur permet d'avoir une vue d'ensemble des dépenses du laboratoire sur une période donnée

![Projet Application Frais](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbfraisprojet/projet9.png)


<br>
<h1 style="text-align: center;">LE CODE (Utilisation de model MVC )</h1>
<br>


- Exemple d'une vue pour afficher la page de sélection du visiteur à choisir 

![Exemple de code Vue](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbfraisprojet/codevue.png)






- Exemple de routes pour naviguer entre les liens

![Exemple de code Route](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbfraisprojet/coderoute.png)






- Exemple du controlleur qui permet ici d'afficher les fiches frais saisie par les visiteurs

![Exemple de code Controller](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbfraisprojet/codecontroller.png)






- Voici un exemple de code utilisant le fichier PDO pour mettre à jour une fiche de frais. Ce code modifie la date de modification et calcule les frais pour un visiteur donné

![Exemple de code de fonction](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbfraisprojet/codefonction.png)






