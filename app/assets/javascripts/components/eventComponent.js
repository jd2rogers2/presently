(function(){
  'use strict';

  var event = {
    bindings: {
      id: '='
    },
    template: [
      "<span ng-bind='eventCtrl.event.username'></span>'s ", 
      "<span ng-bind='eventCtrl.event.name'></span> on ", 
      "<span ng-bind='eventCtrl.event.date'></span>"
    ],
    // templateUrl: 'eventTemplate.html', 
    controller: function($scope, eventFactory){
      debugger;
      eventFactory.get({id: $scope.id}).$promise.then(function(response){
        debugger;
        $scope.event = response;
      })
    },
    controllerAs: 'eventCtrl' 
  }

  event.$inject = ['$scope', 'eventFactory']

  angular
    .module('app')
    .component('event', eventComponent)
}())
