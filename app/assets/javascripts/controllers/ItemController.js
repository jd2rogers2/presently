(function(){
  'use strict';

  function itemController($scope, $state, $stateParams, itemFactory, Auth){
    var itemCtrl = this;
    $scope.item = itemFactory.get({id: $stateParams.id}); 

    $scope.update = function(){
      var temp = {items: $scope.item, id: $stateParams.id};
      itemFactory.update(temp);
      $state.go('list', {id: $scope.item.id});
    }
  }

  itemController.$inject = ['$scope', '$state', '$stateParams', 'itemFactory', 'Auth']

  angular
    .module('app')
    .controller('itemController', itemController)

}())