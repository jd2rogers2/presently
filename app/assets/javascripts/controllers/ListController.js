(function(){
  'use strict';

  function listController($scope, Auth, $stateParams, itemFactory, listFactory){
    var listCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
    });

    $scope.simRank = function(list){
      var counter = 1;
      list.items.forEach(function(item){
        item.rank = counter;
        counter++;
      });
    }

    listFactory.get({id: $stateParams.id}).then(function(response){
      $scope.list = response.data;
      $scope.simRank($scope.list);
    });

    $scope.createItem = function(input){
      input.plzrender = 'list';
      input.items.list_id = $scope.currentUser.list.id;
      itemFactory.save(input).then(function(response){
        $scope.list = response.data;
      });
    }

    $scope.deleteItem = function(item){
      item.plzrender = 'list';
      itemFactory.delete(item).then(function(response){
        $scope.list = response.data;
      });
    }
  }

  listController.$inject = ['$scope', 'Auth', '$stateParams', 'itemFactory', 'listFactory']

  angular
    .module('app')
    .controller('listController', listController)

}())