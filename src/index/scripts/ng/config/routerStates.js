/**
 * Created by w1036_000 on 2017/3/9.
 * 路由
 */

const routerStates = {
    'error': {
        name: 'error',
        url: '/error',
        template: '<div>TODO错误页</div>'
    },
    'moduleOne': {
        name: 'moduleOne',
        url: '/module-one',
        templateUrl: 'moduleOne/tpls/routers/moduleOne.html',
        controller: 'ctrl.moduleOne',
        resolve: {
            loadModleOne: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'moduleOne/js/main.js',
                    // 'moduleOne/css/main.css'
                ]);
            }]
        },
    },
    'moduleTwo': {
        name: 'moduleTwo',
        url: '/module-two',
        templateUrl: 'moduleTwo/tpls/routers/moduleTwo.html',
        controller: 'ctrl.moduleTwo',
        resolve: {
            loadModleTwo: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'moduleTwo/js/main.js',
                    'moduleTwo/css/main.css'
                ]);
            }]
        }
    }
};

export default routerStates;