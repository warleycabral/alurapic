var minhasDiretivas = angular.module('minhasDiretivas');

minhasDiretivas.directive('minhaFoto', function(){
    var ddo = {};
    
    ddo.restrict = 'AE';
    ddo.scope = {
        titulo: '@title',
        url: '@url'
    };
    ddo.templateUrl = 'js/directives/minha-foto/minha-foto.html';
    
    return ddo;
});