(function(){
  'use strict';

  function ListController(){
    var listCtrl = this;
  }

  // ListController.$inject = ['ItemFactory']

  angular
    .module('app')
    .controller('ListController', ListController)

}())