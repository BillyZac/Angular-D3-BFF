(function () {
    angular.module('app')
        .controller('ChartController', ChartController)

    function ChartController() {
        var vm = this
        vm.chartData = [5, 10, 15, 20, 25, 17, 3, 46]
    }
})();
