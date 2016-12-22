(function(){
  
  'use strict';

  var navbarController = ['$scope', '$state', 'Auth', function($scope, $state, Auth){

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
      $scope.currentUser = {};
    }
  }];

  angular
    .module('app')
    .controller('navbarController', navbarController)

}())