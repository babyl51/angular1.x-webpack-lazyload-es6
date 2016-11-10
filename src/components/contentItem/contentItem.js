import angular from 'angular';
import $ from 'jquery';
export default angular.module("contentItem", [])
    .directive('contentItem', [function () {
        return {
            restrict: 'AE',
            scope: {
                operate: '&'
            },
            // template: require('./contentItem.html'),
            // transclude: true,
            // replace: true,
            link: function (scope, element, attrs) {
                var $element = $(element[0]);
                $element.css('min-height',window.innerHeight)
            }
        };
    }])
    .name;





//组件数据类型
