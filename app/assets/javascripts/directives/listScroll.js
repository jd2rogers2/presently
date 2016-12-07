(function(){
  'use strict';

  function listScroll(){
    return function(scope, elem, attr){
      var raw = elem[0];

      // debugger;

      elem.bind('app', function(){
        debugger;
        if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
          scope.$apply(attr.listScroll);
        }
      });
    };
  };

  // listScroll.$inject = ['$scope']

  angular
  .module('app')
  .directive('listScroll', listScroll)

}())