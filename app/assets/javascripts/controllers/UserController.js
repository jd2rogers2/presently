(function(){
  'use strict';

  function UserController($scope, Auth, $stateParams, UserFactory, ItemFactory){
    var userCtrl = this;
    userCtrl.currentUser = Auth.currentUser();
    userCtrl.viewUser = UserFactory.get({id: $stateParams.id});

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

  UserController.$inject = ['$scope', 'Auth', '$stateParams', 'UserFactory', 'ItemFactory']

  angular
    .module('app')
    .controller('UserController', UserController)
    
}())