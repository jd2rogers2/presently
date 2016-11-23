(function(){
  'use strict';

  function ByUsernameFilter(){
    return function(array, searchCriteria){
      return array.filter(function(element){
        debugger;
        return element.username
        // if it includes searchCriteria
      });
    }
  }

  angular
    .module('app')
    .filter('ByUsernameFilter', ByUsernameFilter)
}())