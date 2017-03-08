/**
 * Created by w1036_000 on 2017/3/7.
 * 这里是整个angular的入口文件
 */


const app=angular.module('app',[]);
// app.run([],function () {
//
// });
app.controller('testCtrl',['$scope',function ($scope) {
    $scope.testAttr='asdfasdf';
}]);
