/**
 * Created by w1036_000 on 2017/3/9.
 */
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

angular.module('app.moduleOne', ['app.moduleOne.animation', 'app.moduleOne.component', 'app.moduleOne.controller', 'app.moduleOne.directive',
    'app.moduleOne.filter', 'app.moduleOne.service.constant', 'app.moduleOne.service.factory', 'app.moduleOne.service.other', 'app.moduleOne.service.service', 'app.moduleOne.service.value']);