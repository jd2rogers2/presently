(function(){
  'use strict';

  function eventController($scope, $state, Auth, eventFactory, $filter){
    var eventCtrl = this;
    Auth.currentUser().then(function(data){
      $scope.currentUser = data;
      var array = [];
      $scope.currentUser.friends.forEach(function(friend){
        friend.events.forEach(function(event){
          array.push(event);
        })
      })
      $scope.upcomingEvents = $filter('orderEventsFilter')(array);
    });

    $scope.createEvent = function(){
      // might need to mess with date here
      var temp = {events: $scope.new_event}
      eventFactory.save(temp);
      $state.reload();
      // $state.go($state.current, {}, {reload: true});
    }
  }

  eventController.$inject =['$scope', '$state', 'Auth', 'eventFactory', '$filter']

  angular
    .module('app')
    .controller('eventController', eventController)
}())