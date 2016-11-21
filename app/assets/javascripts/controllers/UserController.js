(function(){
  'use strict';

  function UserController($scope, user, ItemFactory){
    var userCtrl = this;
    userCtrl.user = user;
    debugger;

    $scope.new_item = {
      items: {
        // list_id: userCtrl.user.list.id,
        name: 'name',
        url: 'url',
      }
    };

    userCtrl.createItem = function(input){
      var new_item = ItemFactory.item = input;
      return new_item.save();
    }
  }

  UserController.$inject = ['$scope', 'ItemFactory']

  angular
    .module('app')
    .controller('UserController', UserController)
    
}())