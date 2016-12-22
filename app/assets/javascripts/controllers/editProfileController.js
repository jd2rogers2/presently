(function(){
  'use strict';

  function editProfileController($scope, $state, Auth, userFactory, Upload){
    var profEditCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });

    $scope.update = function(){
      var temp = {users: $scope.currentUser, id: $scope.currentUser.id}
      userFactory.update(temp);
      if ($scope.image) {
        $scope.imageUpload($scope.image)
      }
      $state.go('userProfile', {id: $scope.currentUser.id})
    }

    $scope.imageUpload = function(file){
      Upload.upload({
        url: 'api/v1/users/' + $scope.currentUser.id + '.json',
        method: 'PUT',
        headers: { 'Content-Type': false },
        data: {users: {image: file}},
        sendFieldsAs: 'json'
      }).then(function(response){
        // success
      }, function(response){
        // fail
      });
    }

  }

  editProfileController.$inject = ['$scope', '$state', 'Auth', 'userFactory', 'Upload']

  angular
    .module('app')
    .controller('editProfileController', editProfileController)
}())