(function(){
  'use strict';

  function byUsernameFilter(){
    return function(array, searchCriteria){
      debugger;
      return array.filter(function(element){
        return element.username.includes(searchCriteria);
      });
    }
  }

  angular
    .module('app')
    .filter('byUsernameFilter', byUsernameFilter);
}())