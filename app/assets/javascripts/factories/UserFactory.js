(function(){
  'use strict';

  function userFactory($resource){
    return $resource('/api/v1/users/:id.json', {id: '@id'}, {
      "update": {method: "PUT"}
    });
  }

  userFactory.$inject = ['$resource']

  angular
    .module('app')
    .service('userFactory', userFactory)
}())