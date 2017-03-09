/**
 * Created by w1036_000 on 2017/3/9.
 */

import '../../styles/less/main.less';

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

angular.module('app.moduleTwo', ['app.moduleTwo.animation', 'app.moduleTwo.component', 'app.moduleTwo.controller', 'app.moduleTwo.directive',
    'app.moduleTwo.filter', 'app.moduleTwo.service.constant', 'app.moduleTwo.service.factory', 'app.moduleTwo.service.other', 'app.moduleTwo.service.service', 'app.moduleTwo.service.value']);