(function(){
  
  'use strict';

  var friendshipController = ['$scope', '$state', '$stateParams', 'Auth', 'friendshipFactory', 'userFactory', '$filter', function($scope, $state, $stateParams, Auth, friendshipFactory, userFactory, $filter){
    var friendshipCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });
    $scope.viewUser = userFactory.get({id: $stateParams.id});
    userFactory.query().then(function(response){
      $scope.allUsers = response.data;
    })
    $scope.searchedUsers = [];

    $scope.userSearch = function(){
      $scope.searchedUsers = $filter('byUsernameFilter')($scope.allUsers, $scope.searchCriteria);
    }

    $scope.alreadyFriend = function(user){
      return $filter('alreadyFriendFilter')($scope.currentUser, user)
    }

    $scope.requestFriend = function(new_friend){
      var save = friendshipFactory.save({plzrender: $scope.currentUser.id, friendships: {user_id: $scope.currentUser.id, friend_id: new_friend.id}});
      save.then(function(response){
        $scope.currentUser = response.data;
      });
    }

    $scope.unfriend = function(friend){
      var temp = {plzrender: $scope.currentUser.id, id: friend.friendship_id, friendships: {user_id: $scope.currentUser.id, friend_id: friend.id}};
      friendshipFactory.delete(temp).then(function(response){
        $scope.currentUser = response.data;
      });
    }
  }];

  angular
    .module('app')
    .controller('friendshipController', friendshipController)

}())