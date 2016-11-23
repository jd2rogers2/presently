(function(){
  'use strict';

  function friendshipFactory($resource){
    return $resource('/api/v1/friendships/:id.json', {id: '@id'}, {
      "update": {method: "PUT"}
    });
  }

  friendshipFactory.$inject = ['$resource']

  angular
    .module('app')
    .factory('friendshipFactory', friendshipFactory)
}())