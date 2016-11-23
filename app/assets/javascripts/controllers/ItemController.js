(function(){
  'use strict';

  function itemController($scope, $state, $stateParams, itemFactory, Auth){
    var itemCtrl = this;
    $scope.item = {items: itemFactory.get({id: $stateParams.id}), 
                      id: $stateParams.id
                  }
    $scope.update = function(){
      itemFactory.update($scope.item);
      $state.go('userList', {id: $scope.item.id})
    }
  }

  itemController.$inject = ['$scope', '$state', '$stateParams', 'itemFactory', 'Auth']

  angular
    .module('app')
    .controller('itemController', itemController)

}())