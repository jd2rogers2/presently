(function(){
  'use strict';

  function orderEventsFilter(){
    return function(allEvents){
      debugger;
    }
  }

  angular
    .module('app')
    .filter('orderEventsFilter', orderEventsFilter);
}())