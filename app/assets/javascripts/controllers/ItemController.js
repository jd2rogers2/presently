(function(){
  'use strict';

  function itemController($scope, $state, $stateParams, itemFactory, Auth){
    var itemCtrl = this;
    $scope.item = itemFactory.get({id: $stateParams.item_id}); 

    $scope.update = function(){
      var temp = {plzrender: 'list', items: $scope.item, id: $stateParams.item_id};
      itemFactory.update(temp);
      $state.go('list', {id: $scope.item.list.id});
    }
  }

  itemController.$inject = ['$scope', '$state', '$stateParams', 'itemFactory', 'Auth']

  angular
    .module('app')
    .controller('itemController', itemController)

}())