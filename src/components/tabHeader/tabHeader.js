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
            link: {post:function (scope, element, attrs) {
                var ngEle=angular.element(element);
                var $container = $(element[0]);
                var $occupy = $('<div></div>')  
                    $occupy.css("height", $container.height())
                    $container.after($occupy);
            }}
        };
    }])
    .name;

