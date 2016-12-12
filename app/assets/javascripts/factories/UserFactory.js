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

    this.update = function(data){
      var url = '/api/v1/users/' + data.id + '.json';
      return $http({
        url: url,
        method: 'PUT',
        data: data
        // {users: data} maybe?
      });
    }

    return {
      get: this.get,
      query: this.query,
      update: this.update
    }
  }

  userFactory.$inject = ['$http']

  angular
    .module('app')
    .factory('userFactory', userFactory)
}())