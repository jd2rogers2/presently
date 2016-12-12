(function(){
  'use strict';

  function listFactory($http, $resource){
    return $resource('/api/v1/lists/:id.json', {id: '@id'}, {
      "update": {method: "PUT"}
    });
    // this.get = function(data){
    //   var url = '/api/v1/lists/' + data.id + '.json';
    //   return $http({
    //     url: url,
    //     method: 'GET',
    //     // method: 'jsonp'
    //     data: data
    //   });
    // }
    
    // return {
    //   get: this.get
    // }
  }

  listFactory.$inject = ['$http', '$resource']

  angular
    .module('app')
    .factory('listFactory', listFactory)
}())