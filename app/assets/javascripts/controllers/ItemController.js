(function(){
  
  'use strict';

  var itemController = ['$scope', '$state', '$stateParams', 'itemFactory', 'Auth', 'Upload', function($scope, $state, $stateParams, itemFactory, Auth, Upload){
    var itemCtrl = this;
    itemFactory.get({id: $stateParams.item_id}).then(function(response){
      $scope.item = response.data;
    });

    $scope.update = function(){
      var temp = {plzrender: 'item', items: $scope.item, id: $stateParams.item_id};
      itemFactory.update(temp);
      if ($scope.image) {
        $scope.imageUpload($scope.image);
      }
      $state.go('listItemShow', {list_id: $scope.item.list.id, item_id: $scope.item.id});
    }

    $scope.imageUpload = function(file){
      Upload.upload({
        url: 'api/v1/items/' + $scope.item.id + '.json',
        method: 'PUT',
        headers: { 'Content-Type': false },
        data: {items: {image: file}},
        sendFieldsAs: 'json'
      }).then(function(response){
        // success
      }, function(response){
        // fail
      });
    }
  }];

  angular
    .module('app')
    .controller('itemController', itemController)

}())