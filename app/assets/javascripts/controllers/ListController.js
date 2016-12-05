(function(){
  'use strict';

  function listController($scope, Auth, $stateParams, itemFactory, listFactory){
    var listCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });
    $scope.itemsCounter = 0;
    $scope.list = listFactory.get({id: $stateParams.id});
    $scope.items = [];

    $scope.createItem = function(input){
      input.plzrender = 'list';
      input.items.list_id = $scope.currentUser.list.id;
      itemFactory.save(input).$promise.then(function(response){
        $scope.list = response;
      });
    }

    $scope.deleteItem = function(item){
      item.plzrender = 'list';
      itemFactory.delete(item).$promise.then(function(response){
        $scope.list = response;
      });
    }

    $scope.disableInfinite = false;

    $scope.loadMore = function(){
      for (var i = 0; i < 10; i++) {
        $scope.items.push($scope.list.items[$scope.itemsCounter]);
        $scope.itemsCounter += 1;
        if ($scope.itemsCounter >= $scope.list.items.length) {
          $scope.disableInfinite = true;
        }
      }
    }

    $scope.list.$promise.then(function(response){
      $scope.loadMore();
      $scope.itemsCount = response.items.count;
    });
  }

  listController.$inject = ['$scope', 'Auth', '$stateParams', 'itemFactory', 'listFactory']

  angular
    .module('app')
    .controller('listController', listController)

}())