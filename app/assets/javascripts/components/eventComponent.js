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
    "<span ng-bind='eventCtrl.date'> </span>",
    "<a href='' ng-if='eventCtrl.username == currentUser.username' ng-click='deleteEvent(eve)'>delete</a>"
  ].join('')
}

// eventComponent.$inject = ['$scope', 'eventFactory']

angular
  .module('app')
  .component('event', event)
