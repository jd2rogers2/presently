(function(){

  'use strict';

  function HomeController($scope, $state, Auth){
    var homeCtrl = this;
    homeCtrl.currentUser = Auth.currentUser();

    $scope.login = function(){
      Auth.login($scope.user).then(function(response){
        $state.go('userList', {id: response.id})
      })
    }

    $scope.register = function(){
      Auth.register($scope.new_user).then(function(response){
        $state.go('userList', {id: response.id})
      })
    }
  }

  HomeController.$inject = ['$scope', '$state', 'Auth']

  angular
    .module('app')
    .controller('HomeController', HomeController)

}())