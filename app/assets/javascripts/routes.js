(function(){

  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'HomeController as homeCtrl'
        })

        $urlRouterProvider.otherwise('/')
    })

}())