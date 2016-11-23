(function(){
  'use strict';

  function listController($scope, Auth, $stateParams, $state, itemFactory, listFactory){
    var listCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });
    $scope.list = listFactory.get({id: $stateParams.id});

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
      if ($scope.currentUser.id == $scope.list.user.id) {
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
  }

  listController.$inject = ['$scope', 'Auth', '$stateParams', '$state', 'itemFactory', 'listFactory']

  angular
    .module('app')
    .controller('listController', listController)

}())