(function(){
  'use strict';

  function eventFactory($resource){
    return $resource('/api/v1/events/:id.json', {id: '@id'}, {
      "update": {method: "PUT"}
    });
  }

  eventFactory.$inject = ['$resource']

  angular
    .module('app')
    .factory('eventFactory', eventFactory)
}())