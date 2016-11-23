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
      return $filter('alreadyFriendFilter')($scope.currentUser.friends, user)
    }

    $scope.requestFriend = function(user){
      friendshipFactory.save({friendships: {user_id: $scope.currentUser.id, friend_id: user.id}});
      $state.go($state.current, {}, {reload: true});
    }
  }

  friendshipController.$inject = ['$scope', '$state', '$stateParams', 'Auth', 'friendshipFactory', 'userFactory', '$filter']

  angular
    .module('app')
    .controller('friendshipController', friendshipController)

}())