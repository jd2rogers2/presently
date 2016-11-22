(function(){
  'use strict';

  function ItemController($scope, $state, $stateParams, ItemFactory){
    var itemCtrl = this;
    $scope.item = {items: ItemFactory.get({id: $stateParams.id}), 
                      id: $stateParams.id
                  }
    $scope.update = function(){
      ItemFactory.update($scope.item);
      $state.go('userList', {id: $scope.item.id})
    }
  }

  ItemController.$inject = ['$scope', '$state', '$stateParams', 'ItemFactory']

  angular
    .module('app')
    .controller('ItemController', ItemController)

}())