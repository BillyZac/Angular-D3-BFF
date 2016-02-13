// Draws a circle with radius determined by the circleSize model

// Register the circle directive on the module
angular.module('app')
.directive('circle', circle)

// <circle> DEFINITION
function circle() {
  return {
    restrict: 'E', // It will be used as an element, i.e. <circle>
    template: '<div class="circle"></div>',
    scope: { size: '=' }, // We're interested only in the circle-size attribute.
    link: link,
    controller: 'CircleController',
    controllerAs: 'vm',
    bindToController: true
  }
}

// <circle> IMPLEMENTATION
function link($scope, $element, $attr) {
  // Set the size of the element
  var width = 400
  var height = 400

  // Create an svg
  // Select the element associated with this directive and append the svg
  var element =
    d3.select($element[0])
      .append("svg")
      .attr("width", width)
      .attr("height", height)

  // Append the circle to the svg
  element.append("circle")
    .attr({
      cx: width / 2,
      cy: height / 2,
      r: $scope.vm.size / 2,
      class: 'circle-shape'
    })

  // Whenever circleSize changes, update the circle's radius
  update($scope)
}

function update($scope) {
  $scope.$watch('vm.size', function(newVal, oldVal) {
    if(newVal) {
      d3.select('.circle-shape')
        .attr({ r: $scope.vm.size / 2 })
    }
  })
}
