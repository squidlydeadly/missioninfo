# Aide - Anime plusieurs figures

---

####Comme tu as pu le remarquer, il faut faire bouger plusieurs formes en même temps.

***

Comment faire bouger plusieurs formes dans le même sens?

Pour ce niveau, tu n'as besoin que d'un seul « point de référence » (![Bloc Init Curseur][bloc_init_curseur]).

Ce qui veut dire que pour les autres formes, tu vas devoir utiliser ce nouveau bloc :
![Bloc position curseur avec décalage][bloc_pos_curseur_offset]

***

Le décalage c’est la différence entre les coordonnées de deux formes par exemple.

![Exemple decalage formes][ex_p5_formes]

Ici, si on utilise les coordonnées du carré 1 pour le point de référence, il faudra un décalage pour faire bouger le carré 2 de la même façon.

Puisque les coordonnées du coin du carré 1 sont (2,4), il faut faire un décalage de :

X : +4<br>Y : +1

Pour arriver au coin du carré 2 (6,5).

***

Voilà ce que ça donnerait :

![Exemple decalage blocs][ex_p5_blocs]

Il faudrait bien sûr ajouter les autres blocs nécessaires pour concevoir l’animation.

***

Je te donne un indice : Pour réussir cette page tu devrais utiliser un bloc ![Bloc position curseur][bloc_pos_curseur] et un bloc ![Bloc position curseur avec décalage][bloc_pos_curseur_offset].

---

## <span style="color: #800080">À ton tour d'essayer</span>

[bloc_dep_curseur]: img/dep_pr.png
[bloc_init_curseur]: img/ini_pr.png
[bloc_pos_curseur_offset]: img/pr_dec.png
[bloc_pos_curseur]: img/pr.png
[ex_p5_formes]: img/animation_ex_2_formes.png
[ex_p5_blocs]: img/ex_p4.png
