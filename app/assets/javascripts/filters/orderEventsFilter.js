(function(){
  'use strict';

  function orderEventsFilter(){
    return function(allEvents){
      return allEvents.sort(function(a, b){
        return a.date < b.date
      }).reverse();
    }
  }

  angular
    .module('app')
    .filter('orderEventsFilter', orderEventsFilter);
}())