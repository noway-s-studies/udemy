angular
    .module('app', [])
    .controller('dirController', function() {
        var dir = this;
        dir.list = [
            {name:'Albert', age: 29},
            {name:'Balázs', age: 35},
            {name:'Cecilia', age: 13},
            {name:'Dóra', age: 21},
            {name:'Evelin', age: 39}
        ];
        dir.add = function() {
            dir.list.push({name:dir.name, age:dir.age})
        };
    });