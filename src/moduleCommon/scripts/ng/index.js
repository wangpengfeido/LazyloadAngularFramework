/**
 * Created by w1036_000 on 2017/3/8.
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

angular.module('app.moduleCommon', ['app.moduleCommon.animation', 'app.moduleCommon.component', 'app.moduleCommon.controller', 'app.moduleCommon.directive',
    'app.moduleCommon.filter', 'app.moduleCommon.service.constant', 'app.moduleCommon.service.factory', 'app.moduleCommon.service.other', 'app.moduleCommon.service.service', 'app.moduleCommon.service.value']);