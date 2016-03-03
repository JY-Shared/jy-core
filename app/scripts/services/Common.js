(function(angular, JFCoreServices){

    /**
     * @ngdoc service
     * @name JFCore.services.Yeepay
     *
     * @requires $http
     * @requires $q
     * @requires Config
     * @description
     * 易宝相关服务
     */
    Common.$inject = ['$window'];
    function Common($window) {


        /**
         * @ngdoc function
         * @name JFCore.services.Common#getAppConfig
         * @methodOf JFCore.services.Common
         * @description
         *  获取APP.JSON配置
         */
        this.getAppConfig = getAppConfig;
        function getAppConfig(){
            return $window.SERVERCONF;
        }
    }
    JFCoreServices.service('Common', Common);
})(angular, JFCoreServices);