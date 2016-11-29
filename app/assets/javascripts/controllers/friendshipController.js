(function(){
  'use strict';

  function friendshipController($scope, $state, $stateParams, Auth, friendshipFactory, userFactory, $filter){
    var friendshipCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });
    $scope.viewUser = userFactory.get({id: $stateParams.id});
    $scope.allUsers = userFactory.query();
    $scope.searchedUsers = [];

    $scope.userSearch = function(){
      $scope.searchedUsers = $filter('byUsernameFilter')($scope.allUsers, $scope.searchCriteria);
    }

    $scope.alreadyFriend = function(user){
      return $filter('alreadyFriendFilter')($scope.currentUser, user)
    }

    $scope.requestFriend = function(new_friend){
      friendshipFactory.save({plzrender: $scope.currentUser.id, friendships: {user_id: $scope.currentUser.id, friend_id: new_friend.id}}).$promise.then(function(response){
        $scope.currentUser = response;
      });
    }

    $scope.unfriend = function(friend){
      var temp = {plzrender: $scope.currentUser.id, id: friend.friendship_id, friendships: {user_id: $scope.currentUser.id, friend_id: friend.id}};
      friendshipFactory.delete(temp).$promise.then(function(response){
        $scope.currentUser = response;
      });
    }
  }

  friendshipController.$inject = ['$scope', '$state', '$stateParams', 'Auth', 'friendshipFactory', 'userFactory', '$filter']

  angular
    .module('app')
    .controller('friendshipController', friendshipController)

}())