#Learn Angularjs From Scratch Tutorial

Angular.js alapok.

## Telepítés

A HTML / HEAD -ba elhelyezett hivatkozást köbetően használható (az 1.7.9-es verzió).
```js
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.9/angular.min.js"></script>
```
Vagy NPM környezetben:
```bash
$ npm install angular@1.7.9
```

## Témakörök

  * Érték kiírás
  * Tömb bejárás
  * JS kód kiszervezés
  * Változó bevezetés
  * Szűrők
  * Láthatóság
  * Stílus (feltételhez kötés)
  * Kép betöltés
  * Felület kiszervezés
  * Animáció

## Kódok
```js
<html ng-app>					# Az alkalmazásunk gyökéreleme

{{expression}}					# Angular kifejezés

<body ng-init="list=[{},{}]">			# Változót inicializálás

<li ng-repeat="item in list">			# Lista bejárása
	{{item}}				# 
</li>						# 

<input ng-model="seaech">			# Szűrő
 ng-repeat="item in list 			#
 | filter:search    				# érték szűrő
 | limitTo:10 					# Eredmény darabszám korlátozás
 | orderBy:'age' 				# Eredmény rendezési elv
 | currency:"Ft.":0 				# Valuta forma tizedes megadással

ng-src="{{item.img}}" 				# Kép utótöltő

ng-if="false"  					# Láthatatlan kód szinten

ng-show="false"  				# Láthatatlan osztály szinten

<div ng-include="'person.html'">  		# Kiszervezés
<ng-include src="'person.html'">		#

angular-animate.js  				# Animáció
.ng-enter					#
.ng-enter.ng-enter-active			#
.ng-leave					#
.ng-leave.ng-leave-active			#
```