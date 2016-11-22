(function(){
  'use strict';

  function UserController($scope, Auth, $stateParams, $state, UserFactory, ItemFactory){
    var userCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });
    $scope.viewUser = UserFactory.get({id: $stateParams.id});

    $scope.createItem = function(input){
      input.items.list_id = $scope.currentUser.list.id
      ItemFactory.save(input)
      $state.go($state.current, {}, {reload: true})
    }
  }

  UserController.$inject = ['$scope', 'Auth', '$stateParams', '$state', 'UserFactory', 'ItemFactory']

  angular
    .module('app')
    .controller('UserController', UserController)
    
}())