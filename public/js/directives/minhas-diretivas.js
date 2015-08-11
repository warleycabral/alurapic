angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){
    
    var ddo = {};
    
    ddo.restrict = "AE";
    
    ddo.scope = {
    
        tt: '@title'
        
    };
    
    ddo.transclude = true;
    
    ddo.template = 
             '<div class="panel panel-default col-md-2">'
                +'<div class="panel-heading">'
                +   '<h3 class="panel-title text-center">{{tt}}</h3>'
                +'</div>'
                +'<div class="panel-body" ng-transclude>'
                
                +'</div>'
            +'</div>';
    
    return ddo;
    
});
