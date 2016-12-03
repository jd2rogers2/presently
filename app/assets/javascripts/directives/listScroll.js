angular
  .module('app')
  .directive('listScroll', function(){
    return function($scope, elem, attr){
      var raw = elem[0];

      // debugger;

      elem.bind('app', function(){
        if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
          $scope.$apply(attr.listScroll);
        }
      });
    };
  });
