import angular from 'angular';
export default angular.module("historyBack", [])
    .directive('historyBack', [function () {
        return {
            restrict: 'AE',
            scope: { voicelist: '=', back: '&' },
            template: require('./historyBack.html'),
            transclude: true,
            replace: true,
            link: function (scope, element, attrs) {
            },
            controller: ['$scope', '$rootScope', '$window', '$attrs',function ($scope, $rootScope, $window, $attrs) {
                $scope.locationBack = function () {
                    if ($window.history.length == 1) {
                        alert('call mobile function')
                    } else {
                        if ('back' in $attrs) {
                            $scope.back();
                            return
                        }
                        $window.history.back();
                    }
                }
            }]
        };
    }])
    .name;





//组件数据类型
           