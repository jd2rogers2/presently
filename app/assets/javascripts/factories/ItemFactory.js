(function(){
  'use strict';

  function itemFactory($http){
    this.save = function(data){
      var url = '/api/v1/items.json';
      return $http({
        url: url,
        method: 'POST',
        data: data
      });
    }

    this.update = function(data){
      var url = '/api/v1/items/' + data.id + '.json';
      return $http({
        url: url,
        method: 'PUT',
        data: data
      });
    }

    this.delete = function(data){
      var url = '/api/v1/items/' + data.id + '.json';
      return $http({
        url: url,
        method: 'DELETE',
        data: data
        // 'remove: true,' to be put in data?
      });
    }

    return {
      save: this.save,
      update: this.update,
      delete: this.delete
    }
  }

  itemFactory.$inject = ['$http']

  angular
    .module('app')
    .factory('itemFactory', itemFactory)
}())