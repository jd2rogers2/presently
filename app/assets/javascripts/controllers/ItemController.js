(function(){
  'use strict';

  function itemController($scope, $state, $stateParams, itemFactory, Auth, Upload){
    var itemCtrl = this;
    $scope.item = itemFactory.get({id: $stateParams.item_id}); 

    $scope.update = function(){
      if ($scope.image) {
        $scope.upload($scope.image);
      }
      var temp = {plzrender: 'list', items: $scope.item, id: $stateParams.item_id};
      itemFactory.update(temp);
      $state.go('list', {id: $scope.item.list.id});
    }

    $scope.upload = function(file){
      Upload.upload({
        url: 'api/v1/items/' + $scope.item.id + '.json',
        method: 'PUT',
        headers: { 'Content-Type': false },
        data: {items: {image: file}},
        sendFieldsAs: 'json'
        // data: {file: file, 'username': $scope.username}
        // from ngFileUpload docs
      }).then(function(response){
        debugger;
        // success
      }, function(response, a, b, c){
        debugger;
        // fail
      });
    }
  }

  itemController.$inject = ['$scope', '$state', '$stateParams', 'itemFactory', 'Auth', 'Upload']

  angular
    .module('app')
    .controller('itemController', itemController)

}())