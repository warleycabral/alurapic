angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute']);

var alurapic = angular.module('alurapic');

alurapic.config(function($routeProvider, $locationProvider){
    
    $locationProvider.html5Mode(true);
    
    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });
    
    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });
    
    $routeProvider.otherwise({redirectTo: '/fotos'});
});