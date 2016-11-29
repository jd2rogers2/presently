(function(){

  'use strict';

  function loginController($scope, $state, Auth){
    var loginCtrl = this;

    $scope.login = function(){
      Auth.login($scope.user).then(function(response){
        $state.go('list', {id: response.id})
      }, function(response){
        // error response message
      })
    }

    $scope.register = function(){
      Auth.register($scope.new_user).then(function(response){
        $state.go('list', {id: response.id})
      }, function(response){
        // error response message
      })
    }
  }

  loginController.$inject = ['$scope', '$state', 'Auth']

  angular
    .module('app')
    .controller('loginController', loginController)

}())