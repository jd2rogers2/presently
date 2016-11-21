(function(){

  'use strict';

  function HomeController($scope, $state, Auth){
    var homeCtrl = this;

    $scope.login = function(){
      Auth.login($scope.user).then(function(response){
        $state.go('userList', {id: response.id})
      }, function(response){
        // error response message
      })
    }

    $scope.register = function(){
      Auth.register($scope.new_user).then(function(response){
        $state.go('userList', {id: response.id})
      }, function(response){
        // error response message
      })
    }
  }

  HomeController.$inject = ['$scope', '$state', 'Auth']

  angular
    .module('app')
    .controller('HomeController', HomeController)

}())