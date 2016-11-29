(function(){
  'use strict';

  function listController($scope, Auth, $stateParams, $state, itemFactory, listFactory, userFactory){
    var listCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });
    $scope.list = listFactory.get({id: $stateParams.id})
    $scope.listsUser = userFactory.get({id: $stateParams.id});

    $scope.createItem = function(input){
      input.items.list_id = $scope.currentUser.list.id;
      itemFactory.save(input).$promise.then(function(){
        $state.go($state.current, {}, {reload: true});
      });
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
      itemFactory.update(temp).$promise.then(function(response){
        debugger;
        // response or response.whatever below?
        $scope.list = response;
      });
    }

    $scope.unpurchase = function(item){
      item.purchaser_id = null;
      var temp = {items: item, id: item.id}
      itemFactory.update(temp);
      $state.go($state.current, {}, {reload: true})
    }
  }

  listController.$inject = ['$scope', 'Auth', '$stateParams', '$state', 'itemFactory', 'listFactory', 'userFactory']

  angular
    .module('app')
    .controller('listController', listController)

}())