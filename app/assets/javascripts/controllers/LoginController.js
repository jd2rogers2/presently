(function(){

  'use strict';

  function LoginController($scope, $state, Auth){
    var loginCtrl = this;

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

  LoginController.$inject = ['$scope', '$state', 'Auth']

  angular
    .module('app')
    .controller('LoginController', LoginController)

}())