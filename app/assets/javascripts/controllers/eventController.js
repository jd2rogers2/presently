(function(){
  'use strict';

  function eventController($scope, $state, Auth, eventFactory){
    var eventCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
      $scope.upcomingEvents = [];
      $scope.currentUser.friends.forEach(function(friend){
        friend.events.forEach(function(event){
          $scope.upcomingEvents.push(event);
        })
      })
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
  }

  eventController.$inject =['$scope', '$state', 'Auth', 'eventFactory']

  angular
    .module('app')
    .controller('eventController', eventController)
}())