(function(){
  'use strict';

  function profileController($scope, Auth, $state, $stateParams, itemFactory, userFactory){
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
      item.purchaser_id = $scope.currentUser.id;
      var temp = {items: item, id: item.id}
      itemFactory.update(temp).$promise.then(function(response){
        $scope.list = response;
      });
    }

    $scope.unpurchase = function(item){
      item.purchaser_id = null;
      var temp = {items: item, id: item.id}
      itemFactory.update(temp).$promise.then(function(response){
        $scope.list = response;
      });
    }
  }

  profileController.$inject = ['$scope', 'Auth', '$state', '$stateParams', 'itemFactory', 'userFactory']

  angular
    .module('app')
    .controller('profileController', profileController)
    
}())