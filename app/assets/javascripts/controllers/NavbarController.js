(function(){
  'use strict';

  function NavbarController($scope, $state, Auth){

    $scope.setUser = function(){
      Auth.currentUser().then(function(data){
        $scope.currentUser = data;
      });
    }

    $scope.on('devise:new-registration', function(event, data){
      $scope.setUser;
    });

    $scope.on('devise:login', function(event, data){
      $scope.setUser;
    });

    $scope.on('devise:logout', function(event, data){
      $scope.currentUser = {};
    });

    $scope.logout = function(){
      Auth.logout();
      $state.go('login')
    }
  }

  NavbarController.$inject =['$scope', '$state', 'Auth']

  angular
    .module('app')
    .controller('NavbarController', NavbarController)
}())