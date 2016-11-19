(function(){
  'use strict';

  function ItemController(item){
    var itemCtrl = this;
    itemCtrl.item = item;
    // debugger;
  }

  // ItemController.$inject = ['$scope']

  angular
    .module('app')
    .controller('ItemController', ItemController)

}())