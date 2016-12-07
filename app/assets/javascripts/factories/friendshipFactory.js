(function(){
  'use strict';

  function friendshipFactory($http){
    this.save = function(data){
      var url = '/api/v1/friendships.json';
      return $http({
        url: url,
        method: 'POST',
        data: data
      });
    }

    this.delete = function(data){
      var url = '/api/v1/friendships/' + data.id + '.json';
      return $http({
        url: url,
        method: 'DELETE',
        data: data
        // 'remove: true,' to be put in data?
      });
    }

    return {
      save: this.save,
      delete: this.delete
    }
  }

  friendshipFactory.$inject = ['$http']

  angular
    .module('app')
    .factory('friendshipFactory', friendshipFactory)
}())