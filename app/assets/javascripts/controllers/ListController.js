(function(){
  'use strict';

  function listController($scope, Auth, $stateParams, itemFactory, listFactory){
    var listCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });
    $scope.list = listFactory.get({id: $stateParams.id});

    $scope.createItem = function(input){
      input.items.list_id = $scope.currentUser.list.id;
      itemFactory.save(input).$promise.then(function(response){
        $scope.list = response;
      });
    }

    $scope.deleteItem = function(item){
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