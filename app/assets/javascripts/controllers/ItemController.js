(function(){
  'use strict';

  function ItemController($scope, $stateParams, ItemFactory){
    var itemCtrl = this;
    $scope.item = ItemFactory.get({id: $stateParams.id});
    $scope.update = function(){
      ItemFactory.update($scope.item);
    }
  }

  ItemController.$inject = ['$scope', '$stateParams', 'ItemFactory']

  angular
    .module('app')
    .controller('ItemController', ItemController)

}())