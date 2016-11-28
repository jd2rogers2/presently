(function(){
  'use strict';

  function eventController($scope, $state, Auth, eventFactory){
    var eventCtrl = this;
    activate();

    function setUser(){
      Auth.currentUser().then(function(data){
        $scope.currentUser = data;
      });
    }

    $scope.createEvent = function(){
      // might need to mess with date here
      var temp = {events: $scope.new_event}
      eventFactory.save(temp);
      $state.reload();
      // $state.go($state.current, {}, {reload: true});
    }

    function getEvents(){
      var array = [];
      $scope.currentUser.friends.forEach(function(friend){
        friend.events.forEach(function(event){
          array.push(event);
        })
      })
      $scope.upcomingEvents = array.$filter('orderEvents')(array)
    }

    function activate(){
      setUser();
      getEvents()
    }
  }

  eventController.$inject =['$scope', '$state', 'Auth', 'eventFactory']

  angular
    .module('app')
    .controller('eventController', eventController)
}())