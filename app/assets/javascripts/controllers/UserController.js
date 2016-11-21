(function(){
  'use strict';

  function UserController($scope, Auth, $stateParams, $state, UserFactory, ItemFactory){
    var userCtrl = this;
    userCtrl.currentUser = Auth.currentUser();
    userCtrl.viewUser = UserFactory.get({id: $stateParams.id});

    // $scope.new_item = {
    //   items: {
    //     // list_id: Auth.currentUser().list.id,
    //     name: 'name',
    //     url: 'url',
    //   }
    // };

    userCtrl.createItem = function(input){
      // var new_item = new ItemFactory
      input.items.list_id = userCtrl.currentUser.list.id;
      debugger;
      ItemFactory.save(input)
      debugger;
      $state.go($state.current, {}, {reload: true})
    }
  }

  UserController.$inject = ['$scope', 'Auth', '$stateParams', '$state', 'UserFactory', 'ItemFactory']

  angular
    .module('app')
    .controller('UserController', UserController)
    
}())