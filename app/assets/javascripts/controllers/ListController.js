(function(){
  'use strict';

  function listController(){
    var listCtrl = this;
  }

  // listController.$inject = ['ItemFactory']

  angular
    .module('app')
    .controller('listController', listController)

}())