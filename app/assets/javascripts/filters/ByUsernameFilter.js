(function(){
  'use strict';

  function byUsernameFilter(){
    return function(array, searchCriteria){
      return array.filter(function(element){
        return element.username.includes(searchCriteria);
      });
    }
  }

  angular
    .module('app')
    .filter('byUsernameFilter', byUsernameFilter);
}())