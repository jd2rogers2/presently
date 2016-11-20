(function(){
  'use strict';

  function UserFactory($resource){
    return $resource('/users/:id.json', {id: '@id'}, {
      "update": {method: "PUT"}
    });
  }

  UserFactory.$inject = ['$resource']

  angular
    .module('app')
    .service('UserFactory', UserFactory)
}())