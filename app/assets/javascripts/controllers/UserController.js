(function(){
  'use strict';

  function userController($scope, Auth, friendshipFactory, $state){
    var userCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });

    $scope.unfriend = function(friend){
      var temp = {id: friend.friendship_id, friendships: {user_id: $scope.currentUser.id, friend_id: friend.id}};
      friendshipFactory.delete(temp);
      $state.go($state.current, {}, {reload: true});
    }
  }

  userController.$inject = ['$scope', 'Auth', 'friendshipFactory', '$state']

  angular
    .module('app')
    .controller('userController', userController)
    
}())