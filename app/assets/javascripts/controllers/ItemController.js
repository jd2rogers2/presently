(function(){

  'use strict';

  function ItemController(item){
    var itemCtrl = this;
    itemCtrl.item = item;
  }

  ItemController.$inject = ['$scope']

  angular
    .module('app')
    .controller('ItemController', ItemController)

}())