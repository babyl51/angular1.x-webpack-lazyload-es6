import angular from 'angular';
export default angular.module("contentItem", [])
    .directive('contentItem', [function () {
        return {
            restrict: 'AE',
            scope: {
                operate: '&'
            },
            template: require('./contentItem.html'),
            transclude: true,
            replace: true,
            link: function (scope, element, attrs) {
               
            }
        };
    }])
    .name;





//组件数据类型
