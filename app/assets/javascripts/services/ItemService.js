(function(){
  'use strict';

  function ItemService($http){
    this.getItem = function(item_id){
      return $http.get('/items/' + item_id + ".json")
    }
  }

  ItemService.$inject = ['$http']

  angular
    .module('app')
    .service('ItemService', ItemService)
}())