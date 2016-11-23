(function(){
  'use strict';

  function userController($scope, Auth){
    var userCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });
  }

  userController.$inject = ['$scope', 'Auth']

  angular
    .module('app')
    .controller('userController', userController)
    
}())