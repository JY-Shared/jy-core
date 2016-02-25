'use strict';
/*--app config--*/
/*--activity config--*/
/*--log config--*/
var hsWechat = angular.module('hsWechat', ['ngAnimate', 'ngTouch', 'ui.router', 'ui.bootstrap', 'base64', 'angular-md5', 'LocalStorageModule',
    'mobile-angular-ui', 'mobile-angular-ui.gestures', 'ngPostMessage', 'ct.ui.router.extras.sticky',
    'ct.ui.router.extras.dsr', 'ct.ui.router.extras.statevis', 'hsWechat.controllers', 'hsWechat.services',
    'hsWechat.directives', 'hsWechat.decorators', 'hsWechat.tpls']);
var hsWechatControllers = angular.module('hsWechat.controllers', []);
var hsWechatServices = angular.module('hsWechat.services', []);
var hsWechatFilters = angular.module('hsWechat.filters', []);
var hsWechatDirectives = angular.module('hsWechat.directives', ['ui.router']);
var hsWechatDecorators = angular.module('hsWechat.decorators', ['ui.router', 'mobile-angular-ui']);
var hsWechatTpls = angular.module('hsWechat.tpls', []);

(function (angular, hsWechat) {

    /**
     * @type {string[]}
     */
    initConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];
    function initConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $locationProvider.html5Mode({
            enabled : true, //如果为真，将依托历史。pushState如果支持改变网址。将回落到散列前缀的路径中不支持的浏览器pushState。
            requireBase : true, //当html5Mode启用，指定是否一标记需要存在,如果启用和requireBase是真实的，并且基本标记不存在，当一个错误将被抛出$location注入
            rewriteLinks :true //当html5Mode启用，启用/禁用URL重写为相对链接。
        });
        $urlRouterProvider.otherwise("/home/");
    }

    hsWechat.config(initConfig);

})(angular, hsWechat);

(function (angular, hsWechat) {

    initConfig.$inject = ['$httpProvider'];
    function initConfig($httpProvider) {

        //自定义http解释器
        customHttpInterceptor.$inject = ['$q', '$rootScope', '$window', '$base64', 'Config', 'localStorageService','UA'];
        function customHttpInterceptor($q, $rootScope, $window, $base64, Config, localStorageService,UA) {
            return {
                'response': function (response) {
                    if (!Config.pathIsApi(response.config.url)) {
                        return response;
                    } else if (!angular.isDefined(response.data.code)) {
                        response.status = 599;
                        response.data = '后台请求错误';
                        return $q.reject(response);
                    } else if (response.data.code - 0 !== 0) {
                        if (response.data.code == 1) {
                            $rootScope.$broadcast('invalidTokenEvent');
                        }
                        response.status = 499;
                        response.code = response.data.code;
                        response.data = response.data.text;
                        return $q.reject(response);
                    } else {
                        return response.data.data;
                    }
                },
                'request': function (reqConfig) {
                    if (!Config.pathIsApi(reqConfig.url)) {
                        return reqConfig;
                    } else if (angular.isUndefined(reqConfig.data)) {
                        reqConfig.data = {};
                    }

                    if ($window.SERVERCONF && $window.SERVERCONF.apiBaseUrl) {
                        reqConfig.url = $window.SERVERCONF.apiBaseUrl + reqConfig.url;
                    }
                    reqConfig.data.token = localStorageService.get('account.token');
                    var client = {type: 'wechat', version: $window.SERVERCONF.version, wechat: {ua:UA.getUA()}};
                    reqConfig.data.client = $base64.encode(JSON.stringify(client));

                    return reqConfig;
                }
            };
        }

        $httpProvider.interceptors.push(customHttpInterceptor);

        // Intercept POST requests, convert to standard form encoding
        //POST请求JSON数据转换成formdata
        $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
            var key, result = [];

            if (typeof data === "string")
                return data;

            for (key in data) {
                if (data.hasOwnProperty(key))
                    result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
            }
            return result.join("&");
        });

    }
    hsWechat.config(initConfig);

    /**
     * bind Service for rootScope
     * <pre>
     *  <a href=""  ng-click="Service('serviceName');Common.getAppConfig()">
     * </pre>
     */
    HTMLService.$inject = ['$rootScope', '$injector'];
    function HTMLService($rootScope,$injector) {
        $rootScope.Service = function (name) {
            return $injector.get(name);
        };
        $rootScope.Common = function () {
            return Service('Common');
        };
    }
    hsWechat.run(HTMLService);
})(angular, hsWechat);