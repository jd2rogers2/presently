(function(){
  'use strict';

  function ListFactory($resource){
    return $resource('/lists/:id.json', {id: '@id'}, {
      "update": {method: "PUT"}
    });
  }

  ListFactory.$inject = ['$resource']

  angular
    .module('app')
    .service('ListFactory', ListFactory)
}())