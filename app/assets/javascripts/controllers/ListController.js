(function(){
  'use strict';

  function ListController(list, ItemFactory){
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
      debugger;
      var new_item = ItemFactory.item = input;
      return new_item.save();
    }

  }

  ListController.$inject = ['ItemFactory']

  angular
    .module('app')
    .controller('ListController', ListController)

}())