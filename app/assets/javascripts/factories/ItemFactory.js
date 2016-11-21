(function(){
  'use strict';

  function ItemFactory($resource){
    return $resource('/api/v1/items/:id.json', {id: '@id'}, {
      "update": {method: "PUT"}
    });
  }

  ItemFactory.$inject = ['$resource']

  angular
    .module('app')
    .service('ItemFactory', ItemFactory)
}())