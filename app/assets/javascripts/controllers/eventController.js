(function(){
  'use strict';

  function eventController($scope, $state, Auth, eventFactory){
    var eventCtrl = this;
    $scope.setUser = function(){
      Auth.currentUser().then(function(data){
        $scope.currentUser = data;
      });
    }

    $scope.createEvent = function(){
      // might need to mess with date here
      eventFactory.save($scope.new_event);
      $state.go($state.current, {}, {reload: true});
    }

    // need to filter events
    // put in order by date
    // and only currentUser's friend's events
  }

  eventController.$inject =['$scope', '$state', 'Auth', 'eventFactory']

  angular
    .module('app')
    .controller('eventController', eventController)
}())