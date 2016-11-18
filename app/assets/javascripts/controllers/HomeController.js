(function(){

  'use strict';

  function HomeController($scope){
    var homeCtrl = this;
    homeCtrl.currentUser = ''
  }

  HomeController.$inject = ['$scope']

  angular
    .module('app')
    .controller('HomeController', HomeController)

}())