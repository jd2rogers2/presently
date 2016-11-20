(function(){
  'use strict';

  function UserController(user){
    var userCtrl = this;
    userCtrl.user = user;
  }

  angular
    .module('app')
    .controller('UserController', UserController)
    
}())