(function(){
  'use strict';

  function NavbarController($scope, $state, Auth){
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