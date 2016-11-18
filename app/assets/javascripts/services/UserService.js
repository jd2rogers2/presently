(function(){
  'use strict';

  function UserService($http){
    this.getUser = function(user_id){
      return $http.get('/users/' + user_id + ".json")
    }
  }

  UserService.$inject = ['$http']

  angular
    .module('app')
    .service('UserService', UserService)
}())