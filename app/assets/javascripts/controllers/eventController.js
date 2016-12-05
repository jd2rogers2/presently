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

    $scope.itemsCounter = 0;
    $scope.list = listFactory.get({id: $stateParams.id});
    $scope.items = [];
    $scope.disableInfinite = false;

    $scope.loadMore = function(){
      for (var i = 0; i < 10; i++) {
        $scope.items.push($scope.list.items[$scope.itemsCounter]);
        $scope.itemsCounter += 1;
        if ($scope.itemsCounter >= $scope.list.items.length) {
          $scope.disableInfinite = true;
        }
      }
    }

    $scope.list.$promise.then(function(response){
      $scope.loadMore();
      $scope.itemsCount = response.items.count;
    });

  }

  eventController.$inject =['$scope', '$state', 'Auth', 'eventFactory']

  angular
    .module('app')
    .controller('eventController', eventController)
}())