(function(){
  'use strict';

  function ListFactory($resource){
    return $resource('/api/v1/lists/:id.json', {id: '@id'}, {
      "update": {method: "PUT"}
    });
  }

  ListFactory.$inject = ['$resource']

  angular
    .module('app')
    .service('ListFactory', ListFactory)
}())