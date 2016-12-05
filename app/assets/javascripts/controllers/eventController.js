(function(){
  'use strict';

  function eventController($scope, $state, Auth, eventFactory){
    var eventCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
      $scope.allEvents = [];
      $scope.currentUser.friends.forEach(function(friend){
        friend.events.forEach(function(event){
          $scope.allEvents.push(event);
        })
      })
      $scope.loadMore();
    });

    $scope.createEvent = function(){
      var temp = {events: {name: $scope.new_event.name, date: $scope.new_event.date, user_id: $scope.currentUser.id}};
      eventFactory.save(temp).$promise.then(function(response){
        $scope.currentUser.events = response.events;
      });
    }

    $scope.deleteEvent = function(event){
      var temp = {id: event.id, events: event}
      eventFactory.delete(temp).$promise.then(function(response){
        $scope.currentUser.events = response.events;
      })
    }

    $scope.eventsCounter = 0;
    $scope.showEvents = [];
    $scope.disableInfinite = false;

    $scope.loadMore = function(){
      for (var i = 0; i < 10; i++) {
        // debugger;
        $scope.showEvents.push($scope.allEvents[$scope.eventsCounter]);
        $scope.eventsCounter += 1;
        if ($scope.eventsCounter >= $scope.allEvents.length) {
          $scope.disableInfinite = true;
        }
      }
    }

  }

  eventController.$inject =['$scope', '$state', 'Auth', 'eventFactory']

  angular
    .module('app')
    .controller('eventController', eventController)
}())