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

  * Parser
  * Message Builder/Editor API
  * Server/Client components for TCP and File System Based Interfaces

## Kódok
```js
<html ng-app>					# Az alkalmazásunk gyökéreleme

{{expression}}					# Angular kifejezés

<body ng-init="list=[{},{}]">			# Változót inicializálás

<li ng-repeat="item in list">			# Lista bejárása
	{{item}}				# 
</li>						# 

<input ng-model="seaech">			# Szűrő
 ng-repeat="item in list | filter:seaech"	#
```