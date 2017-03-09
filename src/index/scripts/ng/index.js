/**
 * Created by w1036_000 on 2017/3/7.
 * 这里是整个angular的入口文件
 */

//index自己
import routerStates from './config/routerStates';
import './animate/index';
import './component/index';
import './controller/index';
import './directive/index';
import './filter/index';
import './service/constant/index';
import './service/factory/index';
import './service/other/index';
import './service/service/index';
import './service/value/index';

const app = angular.module('app', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'angular-loading-bar', 'oc.lazyLoad',
    'app.index.animation', 'app.index.component', 'app.index.controller', 'app.index.directive', 'app.index.filter', 'app.index.service.constant', 'app.index.service.factory', 'app.index.service.other', 'app.index.service.service', 'app.index.service.value',
    'app.moduleCommon']);
app.run(['$rootScope', '$state', function ($rootScope, $state) {

}]);

app.config(["$stateProvider", "$locationProvider", "$urlRouterProvider", "$httpProvider", 'cfpLoadingBarProvider', function ($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, cfpLoadingBarProvider) {
    //loadingbar配置
    cfpLoadingBarProvider.includeSpinner = false;         //关闭加载时的圈圈

    //路由配置
    for (let k in routerStates) {
        if (routerStates.hasOwnProperty(k)) {
            $stateProvider.state(routerStates[k]);
        }
    }
    $urlRouterProvider.when('', '/moduleOne');            //默认路由
    $urlRouterProvider.otherwise('error');        //不存在的路由跳转


}]);