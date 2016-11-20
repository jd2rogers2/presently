(function(){
  'use strict';

  function ItemService($http, $templateCache){
    this.getItem = function(item_id){
      return $http.get('/items/' + item_id + ".json")
    }

    this.createItem = function(new_item){
      return $http({
        method: 'POST',
        url: '/items',
        data: new_item,
        cache: $templateCache
      })
    }
  }

  ItemService.$inject = ['$http', '$templateCache']

  angular
    .module('app')
    .service('ItemService', ItemService)
}())