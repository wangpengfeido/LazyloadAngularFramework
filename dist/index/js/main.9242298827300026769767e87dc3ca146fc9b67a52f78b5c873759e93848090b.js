webpackJsonp([3,6],{10:function(module,exports,__webpack_require__){"use strict";angular.module("app.index.directive",[])},11:function(module,exports,__webpack_require__){"use strict";angular.module("app.index.filter",[])},12:function(module,exports,__webpack_require__){"use strict";angular.module("app.index.service.constant",[])},13:function(module,exports,__webpack_require__){"use strict";angular.module("app.index.service.factory",[])},14:function(module,exports,__webpack_require__){"use strict";angular.module("app.index.service.other",[])},15:function(module,exports,__webpack_require__){"use strict";angular.module("app.index.service.service",[])},16:function(module,exports,__webpack_require__){"use strict";angular.module("app.index.service.value",[])},6:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var routerStates={error:{name:"error",url:"/error",template:"<div>TODO错误页</div>"},moduleOne:{name:"moduleOne",url:"/module-one",templateUrl:"moduleOne/tpls/routers/moduleOne.html",controller:"ctrl.moduleOne",resolve:{loadModleOne:["$ocLazyLoad",function($ocLazyLoad){return $ocLazyLoad.load(["moduleOne/js/main.9242298827300026769767e87dc3ca146fc9b67a52f78b5c873759e93848090b.js"])}]}},moduleTwo:{name:"moduleTwo",url:"/module-two",templateUrl:"moduleTwo/tpls/routers/moduleTwo.html",controller:"ctrl.moduleTwo",resolve:{loadModleTwo:["$ocLazyLoad",function($ocLazyLoad){return $ocLazyLoad.load(["moduleTwo/js/main.9242298827300026769767e87dc3ca146fc9b67a52f78b5c873759e93848090b.js","moduleTwo/css/main.9242298827300026769767e87dc3ca146fc9b67a52f78b5c873759e93848090b.css"])}]}}};exports.default=routerStates},65:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _routerStates=__webpack_require__(6),_routerStates2=_interopRequireDefault(_routerStates);__webpack_require__(7),__webpack_require__(8),__webpack_require__(9),__webpack_require__(10),__webpack_require__(11),__webpack_require__(12),__webpack_require__(13),__webpack_require__(14),__webpack_require__(15),__webpack_require__(16);var app=angular.module("app",["ngAnimate","ui.router","ui.bootstrap","angular-loading-bar","oc.lazyLoad","app.index.animation","app.index.component","app.index.controller","app.index.directive","app.index.filter","app.index.service.constant","app.index.service.factory","app.index.service.other","app.index.service.service","app.index.service.value","app.moduleCommon"]);app.run(["$rootScope","$state",function($rootScope,$state){}]),app.config(["$stateProvider","$locationProvider","$urlRouterProvider","$httpProvider","cfpLoadingBarProvider",function($stateProvider,$locationProvider,$urlRouterProvider,$httpProvider,cfpLoadingBarProvider){cfpLoadingBarProvider.includeSpinner=!1;for(var k in _routerStates2.default)_routerStates2.default.hasOwnProperty(k)&&$stateProvider.state(_routerStates2.default[k]);$urlRouterProvider.when("","/moduleOne"),$urlRouterProvider.otherwise("error")}])},7:function(module,exports,__webpack_require__){"use strict";angular.module("app.index.animation",[])},8:function(module,exports,__webpack_require__){"use strict";angular.module("app.index.component",[])},9:function(module,exports,__webpack_require__){"use strict";angular.module("app.index.controller",[])}},[65]);