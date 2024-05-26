---
title: "GSB rapport"
summary: "Projet de classe, utilisation d'une API Rest en C#"
date: "May 20 2024"
draft: false
tags:
- C#

repoUrl : https://github.com/SMaitriya/GsbRapports
---

Le projet consiste à développer une application de gestion des médicaments pour un laboratoire pharmaceutique. Cette application, principalement réalisée en C# avec une base de données MySQL, permettra d'ajouter, de modifier et de rechercher des médicaments de manière sécurisée et efficace. Nous intégrerons également une API REST en PHP pour faciliter l'interaction avec la base de données.
<br>

- Après l'authentification, l'utilisateur pourra accéder à un onglet dédié aux médicaments. Cet onglet permettra de visualiser, modifier, ajouter et rechercher les médicaments en fonction de leurs dates.

![Projet 2](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbrapportprojet/projet2.png)


- Une fonctionnalité clé est la possibilité de modifier les informations d'un médicament après avoir sélectionné sa famille.

![Modifier](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbrapportprojet/modifier.png)



- Le projet prend également en charge la gestion des erreurs grâce à l'utilisation de expressions régulières (REGEX), comme illustré ici lors de l'ajout d'un médicament.

![Projet 13](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbrapportprojet/projet13.png)




- Enfin, une fonctionnalité de recherche permettra de retrouver des médicaments en fonction de leur date.

![Rechercher](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbrapportprojet/rechercher.png)


<br>
<h1 style="text-align: center;">LE CODE (Exemple ajout médicament)</h1>
<br>

- Création du XAML pour l'ajout d'un médicament
![XAML](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbrapportprojet/xaml.png)

- Sélection de la famille du médicament à ajouter dans une liste déroulante
![Code de la Sélection](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbrapportprojet/codeselection.png)

- Après avoir sélectionné la famille du médicament, vous pouvez ajouter les informations nécessaires et cliquer sur "Valider" pour créer un nouveau médicament avec ce code
![Code d'Ajout](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbrapportprojet/codeajout.png)










