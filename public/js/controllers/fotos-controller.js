angular.module('alurapic').controller('FotosController', function($scope, $http){

    $scope.fotos = [];
    //$scope.fotos = $http.get('v1/fotos'); //funciona, mas não é o correto
    
    $http.get('/v1/fotos')
    .success(function(fotos){
        $scope.fotos = fotos;
    })
    .error(function(erro){
        console.log(erro);
    })
    
});