(function(){
  'use strict';

  function ListController(list, ItemService){
    var listCtrl = this;
    listCtrl.list = list;
    listCtrl.new_item_name = '1';
    listCtrl.new_item_url = '1';
    listCtrl.final_item = {
      items: {
        list_id: listCtrl.list.id,
        name: listCtrl.new_item_name,
        url: listCtrl.new_item_url,
      }
    };

    listCtrl.createItem = function(input){
      return ItemService.createItem(input);
    }

  }

  // ListController.$inject = ['$scope']

  angular
    .module('app')
    .controller('ListController', ListController)

}())