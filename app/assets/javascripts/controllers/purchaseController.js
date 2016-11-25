(function(){
  'use strict';

  function purchaseController($scope, Auth, $state, itemFactory){
    var userCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });

    $scope.unpurchase = function(item){
      item.purchaser_id = null;
      var temp = {items: item, id: item.id}
      itemFactory.update(temp);
      $state.go($state.current, {}, {reload: true});
    }
  }

  purchaseController.$inject = ['$scope', 'Auth', '$state', 'itemFactory']

  angular
    .module('app')
    .controller('purchaseController', purchaseController)
    
}())