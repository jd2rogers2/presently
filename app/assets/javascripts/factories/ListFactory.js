(function(){
  'use strict';

  function listFactory($resource){
    return $resource('/api/v1/lists/:id.json', {id: '@id'}, {
      "update": {method: "PUT"}
    });
  }

  listFactory.$inject = ['$resource']

  angular
    .module('app')
    .factory('listFactory', listFactory)
}())