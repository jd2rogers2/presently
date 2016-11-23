(function(){
  'use strict';

  function frienshipController($scope, $state, $stateParams, Auth, friendshipFactory){
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

    // $scope.requestFriend = function(){
    //   friendshipFactory.put({user_id: , friend_id: })
    // }
  }

  frienshipController.$inject = ['$scope', '$state', '$stateParams', 'Auth', 'friendshipFactory']

  angular
    .module('app')
    .controller('frienshipController', frienshipController)

}())