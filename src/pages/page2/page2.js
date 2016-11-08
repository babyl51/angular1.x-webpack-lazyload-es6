import uirouter from 'angular-ui-router';
import '../../common/css/style.css'
import tabHeader from '../../components/tabHeader/tabHeader';
import page1 from '../page1/page1.js'

export default angular.module('page2', [uirouter, tabHeader,page1])
  .controller('page2', ['$scope','dataModel', function ($scope,dataModel) {

    $scope.operatorfunction = function () {
      alert('say hi')
    }
    dataModel.sharedata='page2 changed page1 data'
  }])
  .name;