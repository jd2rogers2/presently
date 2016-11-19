(function(){
  'use strict';

  function UserController(user){
    var userCtrl = this;
    userCtrl.user = user;
    debugger;
  }

  angular
    .module('app')
    .controller('UserController', UserController)
    
}())