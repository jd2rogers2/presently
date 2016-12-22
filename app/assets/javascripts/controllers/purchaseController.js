(function(){
  
  'use strict';

  var purchaseController = ['$scope', 'Auth', '$state', 'itemFactory', 'userFactory', function($scope, Auth, $state, itemFactory, userFactory){
    var userCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });

    $scope.unpurchase = function(item){
      item.purchaser_id = null;
      var temp = {items: item, id: item.id, plzrender: $scope.currentUser.id}
      itemFactory.update(temp).then(function(response){
        $scope.currentUser = response.data;
      });
    }
  }];

  angular
    .module('app')
    .controller('purchaseController', purchaseController)
    
}())