var app = angular.module('avengers', ['ui.router']);

app.config([
 '$stateProvider',
   '$urlRouterProvider', 

    function($stateProvider,$urlRouterProvider){
    $stateProvider
        
        .state('cards',{
        url: '/cards',
        templateUrl: '/views/cards.html',
        controller:''
        })
        .state('hero',{
        url: '',
        templateUrl: '/views/hero.html',
        controller:''
        })
}]);