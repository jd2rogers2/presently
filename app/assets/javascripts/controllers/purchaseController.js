(function(){
  'use strict';

  function purchaseController($scope, Auth, $state, itemFactory, userFactory){
    var userCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });

    $scope.unpurchase = function(item){
      item.purchaser_id = null;
      var temp = {items: item, id: item.id, plzrender: $scope.currentUser.id}
      itemFactory.update(temp).$promise.then(function(user){
        $scope.currentUser = user;
      });
    }
  }

  purchaseController.$inject = ['$scope', 'Auth', '$state', 'itemFactory', 'userFactory']

  angular
    .module('app')
    .controller('purchaseController', purchaseController)
    
}())