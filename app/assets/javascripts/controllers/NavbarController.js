(function(){
  'use strict';

  function navbarController($scope, $state, Auth){

    $scope.setUser = function(){
      Auth.currentUser().then(function(data){
        $scope.currentUser = data;
      });
    }

    $scope.$on('devise:new-registration', function(event, data){
      $scope.currentUser = data;
    });

    $scope.$on('devise:login', function(event, data){
      $scope.currentUser = data;
    });

    $scope.$on('devise:logout', function(event, data){
      $scope.currentUser = {};
      $state.go('login')
    });

    $scope.logout = function(){
      Auth.logout();
    }
  }

  navbarController.$inject =['$scope', '$state', 'Auth']

  angular
    .module('app')
    .controller('navbarController', navbarController)
}())