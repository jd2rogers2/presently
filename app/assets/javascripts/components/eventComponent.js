var event = {
  bindings: {
    name: '=',
    username: '=',
    date: '='
  },
  controllerAs: 'eventCtrl',
  template: [
    "<span ng-bind='eventCtrl.username'></span>'s ", 
    "<span ng-bind='eventCtrl.name'></span> on ", 
    "<span ng-bind='eventCtrl.date'> </span>"
  ].join('')
}

// eventComponent.$inject = ['$scope', 'Auth']

angular
  .module('app')
  .component('event', event)
