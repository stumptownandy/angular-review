var app = angular.module('avengers', ['ui.router']);

app.config([
 '$stateProvider',
   '$urlRouterProvider', 

    function($stateProvider,$urlRouterProvider){
    
      $urlRouterProvider.otherwise('/cards');
        $stateProvider
       
        .state('cards',{
        url: '/cards',
        templateUrl: '/views/cards.html',
        controller:'CardsCtrl'
        })
        .state('hero',{
        url: '/hero',
        templateUrl: '/views/hero.html',
        controller:''
        })
}]);