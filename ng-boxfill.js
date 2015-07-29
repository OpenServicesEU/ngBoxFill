/**
 * ngBoxFill
 *
 * A directive to fit your text into its parent box.
 *
 * @link https://github.com/OpenServicesEU/ngBoxFill
 * @author Michael Fladischer <michael@openservices.at>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return factory(root.angular);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(root.angular || (window && window.angular));
  } else {
    factory(root.angular);
  }
})(this, function (angular) {
  'use strict';

  angular.module('ngBoxFill', [])
  .directive(
    'ngBoxFill',
    [
      '$window',
      '$timeout',
      function (
        $window,
        $timeout
      ) {
        return {
          restrict: 'A',
          scope: {
            ngBoxFill: '&'
          },
          transclude: true,
          link: function (scope, element, attrs, ctrl, transclude) {
            console.log(scope, element, attrs, ctrl, transclude);
            var container = angular.element('<div class="boxFillWrap boxFillInitial"/>');
            transclude(scope.$parent, function(clone, scope) {
              container.append(clone);
            });
            element.append(container);
            var timer;
            var resize = function() {
              // A primitive debounce.
              $timeout.cancel(timer);
              timer = $timeout(function() {
                var width = element.prop('offsetWidth') - element.prop('offsetLeft');
                var height = element.prop('offsetHeight') - element.prop('offsetTop');
                var horizonalScale = width / container.prop('offsetWidth');
                var verticalScale = height / container.prop('offsetHeight');
                var scale = horizonalScale > verticalScale ? verticalScale : horizonalScale;
                container.css('transform', 'scale(' + (horizonalScale > verticalScale ? verticalScale : horizonalScale) + ')');
                container.removeClass('boxFillInitial');
              }, 100);
            };
            scope.$watchGroup(
              [
                function () { return element.prop('offsetHeight'); },
                function () { return element.prop('offsetWidth'); }
              ],
              resize
            );
            angular.element($window).on('resize', resize);
          }
        };
      }
    ]
  );
});
