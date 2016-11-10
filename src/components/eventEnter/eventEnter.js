import angular from 'angular';
import $ from 'jquery';
export default angular.module("eventEnter", [])
    .directive('eventEnter', [function () {
        return {
            restrict: 'AE',
            scope: {
                eventEnter: '&'
            },
            // template: require('./contentItem.html'),
            // transclude: true,
            // replace: true,
            link: function (scope, element, attrs) {
                element.bind("keydown keypress", function (event) {
                    if (event.which === 13) {
                        scope.$apply(function () {
                            scope.eventEnter();
                        });
                        event.preventDefault();
                    }
                });
            }
        };
    }])
    .name;





//组件数据类型
