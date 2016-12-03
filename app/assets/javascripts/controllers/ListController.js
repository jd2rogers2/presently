(function(){
  'use strict';

  function listController($scope, Auth, $stateParams, itemFactory, listFactory){
    var listCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });
    var itemsCount = 5;
    $scope.list = listFactory.get({id: $stateParams.id}).$promise.then(function(response){
      $scope.items = response.items.slice(0,5);
    });
    // $scope.items = $scope.list.items.slice(0,5);
    
    $scope.loadMore = function(){
      debugger;
      for (var i = 0; i < 5; i++) {
        $scope.items.push($scope.list.items[itemsCount]);
        itemsCount + 1;
      }
    }


    $scope.createItem = function(input){
      input.plzrender = 'list';
      input.items.list_id = $scope.currentUser.list.id;
      itemFactory.save(input).$promise.then(function(response){
        $scope.fullList = response;
      });
    }

    $scope.deleteItem = function(item){
      item.plzrender = 'list';
      itemFactory.delete(item).$promise.then(function(response){
        $scope.list = response;
      });
    }
  }

  listController.$inject = ['$scope', 'Auth', '$stateParams', 'itemFactory', 'listFactory']

  angular
    .module('app')
    .controller('listController', listController)

}())