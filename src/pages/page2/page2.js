import uirouter from 'angular-ui-router';
import '../../common/css/style.css'
import tabHeader from '../../components/tabHeader/tabHeader';

export default angular.module('page2', [uirouter, tabHeader])
  .controller('page2', ['$scope', function ($scope) {

    $scope.operatorfunction = function () {
      alert('say hi')
    }
  }])

  .name;