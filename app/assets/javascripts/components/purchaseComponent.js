var purchaseComponent = {
  bindings: {
    obj: '='
  },
  controller: function($scope){
  },
  controllerAs: 'purchaseCompCtrl',
  template: [
    'buying <a ui-sref="listItemShow({item_id: purchaseCompCtrl.obj.id, list_id: purchaseCompCtrl.obj.list.id})" ng-bind="purchaseCompCtrl.obj.name"></a>',
    'for <a ui-sref="userProfile({id: purchaseCompCtrl.obj.list.id})" ng-bind="purchaseCompCtrl.obj.list.username"></a> - '
  ].join('')
}

purchaseComponent.$inject = ['$scope']

angular
  .module('app')
  .component('purchase', purchaseComponent)