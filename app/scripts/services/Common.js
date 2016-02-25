(function(angular, hsWechatServices){

    /**
     * @ngdoc service
     * @name hsWechat.services.Yeepay
     *
     * @requires $http
     * @requires $q
     * @requires Config
     * @description
     * 易宝相关服务
     */
    Common.$inject = ['$http', '$q','$state','$base64','$window', 'Config','localStorageService','Account','UA'];
    function Common($http, $q,$state,$base64,$window,Config,localStorageService,Account,UA) {


        /**
         * @ngdoc function
         * @name hsWechat.services.Common#getAppConfig
         * @methodOf hsWechat.services.Common
         * @description
         *  获取APP.JSON配置
         */
        this.getAppConfig = getAppConfig;
        function getAppConfig(){
            return $window.SERVERCONF;
        }
    }
    hsWechatServices.service('Common', Common);
})(angular, hsWechatServices);