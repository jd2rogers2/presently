(function(){
  'use strict';

  function UserController($scope, Auth, $stateParams, $state, UserFactory, ItemFactory, $filter){
    var userCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });
    $scope.viewUser = UserFactory.get({id: $stateParams.id});
    $scope.allUsers = UserFactory.query();
    $scope.searchedUsers = [];

    $scope.createItem = function(input){
      input.items.list_id = $scope.currentUser.list.id;
      ItemFactory.save(input);
      $state.go($state.current, {}, {reload: true});
    }

    $scope.deleteItem = function(item){
      ItemFactory.delete(item);
      $state.go($state.current, {}, {reload: true});
    }

    $scope.userEqualsOwner = function(){
      if ($scope.currentUser.id == $stateParams.id) {
        return true;
      } else {
        return false;
      }
    }

    $scope.purchase = function(item){
      item.purchaser_id = $scope.currentUser.id;
      var temp = {items: item, id: item.id}
      ItemFactory.update(temp);
      $state.go($state.current, {}, {reload: true})
    }

    $scope.userSearch = function(){
      $scope.searchedUsers = $filter('filter')($scope.allUsers, $scope.searchCriteria)
    }

  }

  UserController.$inject = ['$scope', 'Auth', '$stateParams', '$state', 'UserFactory', 'ItemFactory', '$filter']

  angular
    .module('app')
    .controller('UserController', UserController)
    
}())