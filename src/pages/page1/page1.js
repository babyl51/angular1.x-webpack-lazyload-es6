import uirouter from 'angular-ui-router';
import tabHeader from '../../components/tabHeader/tabHeader';
import contentItem from '../../components/contentItem/contentItem';

import voicePlayer from '../../components/voicePlayer/voicePlayer';

export default angular.module('page1', [uirouter, voicePlayer, tabHeader, contentItem])
    .service('API', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
        return {
            get_data: function () {
                var config = {
                    params: { userdata: 'stone' },
                    xsrfHeaderName: 'hello',
                    xsrfCookieName:'test',
                   
                };
                return $http.post('/getlist/error',{ data:'hello'}, config)
            }
        }
    }])
    .factory('dataModel', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
        return {
            sharedata: 'page1 data'
        }
    }])
    .controller('test1', ['API', 'dataModel', '$scope', function (API, dataModel, $scope) {
        API.get_data().then((response) => {



        })
        $scope.data = dataModel;



        //obejct.asign demon
        const obj = [{ a: 1 }, { a: 1 }]
        let copy = Object.assign([], obj);




        //map demon
        let copy1 = copy.map((element) => {
            return { a: element.a + 1 }
        })




        //filter demon
        let copy2 = copy.filter((element, index, arr) => {
            return element.a === 1
            //return arr.indexOf(element) === index
        }
        )




        //reduce demon
        let copy3 = copy.reduce((pre, element) => {
            return pre + element.a
        }, 0)



    }])
    .controller('test2', ['$scope', function ($scope) {

        $scope.voicedata = [
            {
                "url": "http://45.124.125.99/m10.music.126.net/20161101214738/5d0b809a500d078046190fec7d3f72b6/ymusic/af72/d6ca/db27/bc9bec4a7e909411b1bcbb7eefaa1bb3.mp3",
                "time": 21
            },
            {
                "url": "http://45.124.125.99/m10.music.126.net/20161101214738/5d0b809a500d078046190fec7d3f72b6/ymusic/af72/d6ca/db27/bc9bec4a7e909411b1bcbb7eefaa1bb3.mp3",
                "time": 21
            }
        ]

    }])
    .name;