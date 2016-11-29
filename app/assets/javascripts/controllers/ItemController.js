(function(){
  'use strict';

  function itemController($scope, $state, $stateParams, itemFactory, Auth){
    var itemCtrl = this;
    $scope.item = itemFactory.get({id: $stateParams.item_id}); 

    $scope.update = function(){
      var temp = {items: $scope.item, id: $stateParams.item_id};
      itemFactory.update(temp);
      $state.go('list', {id: $scope.item.id});
    }
  }

  itemController.$inject = ['$scope', '$state', '$stateParams', 'itemFactory', 'Auth']

  angular
    .module('app')
    .controller('itemController', itemController)

}())