import angular from 'angular';
export default angular.module("operatorHeader", [])
    .directive('operatorHeader', [function () {
        return {
            restrict: 'AE',
            scope: {
                operate: '&'
            },
            template: require('./operatorHeader.html'),
            transclude: true,
            replace: true,
            link: function (scope, element, attrs) {
               
            }
        };
    }])
    .name;





//组件数据类型
