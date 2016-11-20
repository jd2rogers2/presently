(function(){
  'use strict';

  function ListService($http){
    this.getList = function(list_id){
      return $http.get('/lists/' + list_id + ".json")
    }
  }

  ListService.$inject = ['$http']

  angular
    .module('app')
    .service('ListService', ListService)
}())