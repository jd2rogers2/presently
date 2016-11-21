(function(){
  'use strict';

  function UserController(user, ItemFactory){
    var userCtrl = this;
    userCtrl.user = user;

    userCtrl.new_item = {
      items: {
        // list_id: userCtrl.user.list.id,
        name: 'name',
        url: 'url',
      }
    };

    userCtrl.createItem = function(input){
      debugger;
      var new_item = ItemFactory.item = input;
      return new_item.save();
    }
  }

  UserController.$inject = ['ItemFactory']

  angular
    .module('app')
    .controller('UserController', UserController)
    
}())