(function(){
  'use strict';

  function itemFactory($resource){
    return $resource('/api/v1/items/:id.json', {id: '@id'}, {
      "update": {method: "PUT"}
    });
  }

  itemFactory.$inject = ['$resource']

  angular
    .module('app')
    .service('itemFactory', itemFactory)
}())