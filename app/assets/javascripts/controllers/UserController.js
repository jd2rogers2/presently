(function(){
  'use strict';

  function userController($scope, Auth, $stateParams, $state, userFactory, itemFactory, $filter){
    var userCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });
    $scope.viewUser = userFactory.get({id: $stateParams.id});
    $scope.allUsers = userFactory.query();
    $scope.searchedUsers = [];

    $scope.createItem = function(input){
      input.items.list_id = $scope.currentUser.list.id;
      itemFactory.save(input);
      $state.go($state.current, {}, {reload: true});
    }

    $scope.deleteItem = function(item){
      itemFactory.delete(item);
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
      itemFactory.update(temp);
      $state.go($state.current, {}, {reload: true})
    }

    $scope.userSearch = function(){
      $scope.searchedUsers = $filter('byUsernameFilter')($scope.allUsers, $scope.searchCriteria);
    }

  }

  userController.$inject = ['$scope', 'Auth', '$stateParams', '$state', 'userFactory', 'itemFactory', '$filter']

  angular
    .module('app')
    .controller('userController', userController)
    
}())