import page1 from '../page1/page1.js'
import uirouter from 'angular-ui-router';
import '../../common/css/style.css'
import tabHeader from '../../components/tabHeader/tabHeader';
import eventEnter from '../../components/eventEnter/eventEnter';



export default angular.module('page2', [uirouter, tabHeader, page1, eventEnter])
  .controller('page2', ['$scope', 'dataModel', function ($scope, dataModel) {
   
    $scope.operatorfunction = function () {
      alert('say hi')
    }
    dataModel.sharedata = 'page2 changed page1 data'
  }])
  .name;