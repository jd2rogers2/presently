(function(){
  'use strict';

  function userController($scope, Auth, friendshipFactory, $state){
    var userCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });
  }

  userController.$inject = ['$scope', 'Auth', 'friendshipFactory', '$state']

  angular
    .module('app')
    .controller('userController', userController)
    
}())