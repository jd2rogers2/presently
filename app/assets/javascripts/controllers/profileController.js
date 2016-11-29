(function(){
  'use strict';

  function profileController($scope, Auth, $state, $stateParams, itemFactory, userFactory, $filter, friendshipFactory){
    var userCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });
    userFactory.get({id: $stateParams.id}).$promise.then(function(user){
      $scope.viewUser = user;
    })

    $scope.userEqualsOwner = function(){
      return $scope.currentUser.id == $stateParams.id;
    }

    $scope.purchase = function(item){
      debugger;
      item.purchaser_id = $scope.currentUser.id;
      var temp = {items: item, id: item.id, plzrender: 'list'}
      itemFactory.update(temp).$promise.then(function(response){
        $scope.viewUser.list = response;
      });
    }

    $scope.unpurchase = function(item){
      item.purchaser_id = null;
      var temp = {items: item, id: item.id, plzrender: 'list'}
      itemFactory.update(temp).$promise.then(function(response){
        $scope.viewUser.list = response;
      });
    }

    $scope.alreadyFriend = function(user){
      return $filter('alreadyFriendFilter')($scope.currentUser, user)
    }

    $scope.requestFriend = function(new_friend){
      var temp = {plzrender: $scope.currentUser.id, friendships: {user_id: $scope.currentUser.id, friend_id: new_friend.id}};
      friendshipFactory.save(temp).$promise.then(function(response){
        $scope.currentUser = response;
      });
    }

    $scope.unfriend = function(friend){
      var temp = {id: friend.friendship_id, plzrender: $scope.viewUser.id, friendships: {user_id: $scope.currentUser.id, friend_id: friend.id}};
      friendshipFactory.delete(temp).$promise.then(function(response){
        $scope.viewUser = response;
      });
    }
  }

  profileController.$inject = ['$scope', 'Auth', '$state', '$stateParams', 'itemFactory', 'userFactory', '$filter', 'friendshipFactory']

  angular
    .module('app')
    .controller('profileController', profileController)
    
}())