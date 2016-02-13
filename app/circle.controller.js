(function () {
    angular.module('app')
        .controller('CircleController', CircleController)

    function CircleController() {
        var vm = this
  
        //initial value
        vm.size = 50
    }
})();