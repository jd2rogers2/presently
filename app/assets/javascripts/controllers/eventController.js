(function(){
  'use strict';

  function eventController($scope, $state, Auth){
    var eventCtrl = this;
    $scope.setUser = function(){
      Auth.currentUser().then(function(data){
        $scope.currentUser = data;
      });
    }
  }

  eventController.$inject =['$scope', '$state', 'Auth']

  angular
    .module('app')
    .controller('eventController', eventController)
}())