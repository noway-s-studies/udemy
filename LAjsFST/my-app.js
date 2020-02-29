angular
    .module('app', [])
    .controller('dirController', function($scope) {
        $scope.list = [
            {name:'Albeert', age: 29},
            {name:'Balázs', age: 35},
            {name:'Cecilia', age: 13},
            {name:'Dóra', age: 21},
            {name:'Evelin', age: 39}
        ];
        $scope.add = function() {
            $scope.list.push({name:$scope.name, age:$scope.age})
        };
    });