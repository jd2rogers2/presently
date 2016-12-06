(function(){
  'use strict';

  function eventFactory($http){
    this.save = function(data){
      var url = '/api/v1/events.json'
      return $http({
        url: url,
        method: 'POST',
        data: data
      });
    }

    this.delete = function(data){
      var url = '/api/v1/events/' + data.id + '.json';
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

  eventFactory.$inject = ['$http']

  angular
    .module('app')
    .factory('eventFactory', eventFactory)
}())