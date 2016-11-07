import angular from 'angular';
import historyBack from '../historyBack/historyBack';
import operatorHeader from '../operatorHeader/operatorHeader';

import $ from 'jquery'
import './tabHeader.less'
export default angular.module("tabHeader", [historyBack, operatorHeader])
    .directive('tabHeader', [function () {
        return {
            restrict: 'AE',
            scope: { voicelist: '=' },
            template: require('./tabHeader.html'),
            transclude: true,
            replace: true,
            link: function (scope, element, attrs) {
                var $container = $(element[0]);
                var $occupy = $('<div></div>')
                setTimeout(function () {
                    $occupy.css("height", $container.outerHeight())
                    $container.after($occupy);
                }, 0);


            },
            controller: function ($scope, $rootScope, $window) {


            }
        };
    }])
    .name;

