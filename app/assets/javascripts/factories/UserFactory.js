(function(){
  'use strict';

  function userFactory($http){
    this.get = function(data){
      var url = '/api/v1/users/' + data.id + '.json';
      return $http({
        url: url,
        method: 'GET',
        data: data
        // {users: data} maybe?
      });
    }

    this.query = function(data){
      var url = '/api/v1/users.json';
      return $http({
        url: url,
        method: 'GET'
      });
    }

    return {
      get: this.get,
      query: this.query
    }
  }

  userFactory.$inject = ['$http']

  angular
    .module('app')
    .factory('userFactory', userFactory)
}())