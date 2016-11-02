import angular from 'angular';
import historyBack from '../historyBack/historyBack';
import operatorHeader from '../operatorHeader/operatorHeader';

import $ from 'jquery'
import './tabHeader.less'
export default angular.module("tabHeader", [historyBack,operatorHeader])
    .directive('tabHeader', [function () {
        return {
            restrict: 'AE',
            scope: { voicelist: '=' },
            template: require('./tabHeader.html'),
            transclude: true,
            replace: true,
            link: function (scope, element, attrs) {
                    var $container = $(element);
                    var $occupy = $('<div></div>')
                    $occupy.css("height", $container.outerHeight())
                    $container.after($occupy);
            },
            controller: function ($scope, $rootScope, $window) {


            }
        };
    }])
    .name;

