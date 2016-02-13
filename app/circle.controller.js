angular.module('app')
.controller('CircleController', CircleController)

function CircleController($scope) {
  var vm = this
  //initial value
  vm.size = 50
}
