(function(){
  'use strict';

  function listFactory($http){
    this.get = function(data){
      var url = '/api/v1/lists/' + data.id + '.json';
      return $http({
        url: url,
        method: 'GET',
        // method: 'jsonp'
        data: data
      });
    }
    
    return {
      get: this.get
    }
  }

  listFactory.$inject = ['$http']

  angular
    .module('app')
    .factory('listFactory', listFactory)
}())