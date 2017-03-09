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


angular.module('app.moduleThree', ['app.moduleThree.animation', 'app.moduleThree.component', 'app.moduleThree.controller', 'app.moduleThree.directive',
    'app.moduleThree.filter', 'app.moduleThree.service.constant', 'app.moduleThree.service.factory', 'app.moduleThree.service.other', 'app.moduleThree.service.service', 'app.moduleThree.service.value']);