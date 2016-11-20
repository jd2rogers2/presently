(function(){
  'use strict';

  function ItemFactory($resource){
    return $resource('/items/:id', {id: '@id'}, {
      "update": {method: "PUT"}
    });
  }

  ItemFactory.$inject = ['$resource']

  angular
    .module('app')
    .service('ItemFactory', ItemFactory)
}())