(function(){
  'use strict';

  function purchaseController($scope, Auth){
    var userCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });
  }

  purchaseController.$inject = ['$scope', 'Auth']

  angular
    .module('app')
    .controller('purchaseController', purchaseController)
    
}())