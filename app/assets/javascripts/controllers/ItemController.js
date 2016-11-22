(function(){
  'use strict';

  function ItemController($scope, $stateParams, ItemFactory){
    var itemCtrl = this;
    itemCtrl.item = ItemFactory.get({id: $stateParams.id});
    itemCtrl.update = ItemFactory.save(itemCtrl.item);
  }

  ItemController.$inject = ['$scope', '$stateParams', 'ItemFactory']

  angular
    .module('app')
    .controller('ItemController', ItemController)

}())