var minhasDiretivas = angular.module('minhasDiretivas');

minhasDiretivas
.directive('meuPainel', function(){
    
    var ddo = {};
    
    ddo.restrict = "AE";
    
    ddo.scope = {
    
        titulo: '@titulo'
        
    };
    
    ddo.transclude = true;
    
    ddo.templateUrl = 'js/directives/meu-painel/meu-painel.html';
    
    return ddo;
    
});