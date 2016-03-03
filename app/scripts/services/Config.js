(function(angular, hsLib){

    /**
     * @ngdoc service
     * @name JFCore.services.Log
     * @description
     *  ConfigProvide
     */
    ConfigProvider.$inject = [];
    function ConfigProvider() {
        this.apiPath = {
            account:{
                info:''
            }
        };

        /**
         * @ngdoc function
         * @name JFCore.services.Config#pathIsApi
         * @methodOf JFCore.services.Config
         *
         * @description
         * 判断路径是否是API路径
         *
         * @return {bool} true or false
         */
        function pathIsApi(path){
            var match = false;
            angular.forEach(this.apiPath, function (service) {
                angular.forEach(service, function (item) {
                    if(path.search(item) >=0 && !/^.*[.]html$/.test(path)){
                        match = true;
                    }
                });
            });
            return match;
        }

        this.$get = $get;
        $get.$inject = [];
        function $get() {
            return {
                pathIsApi: pathIsApi,
                apiPath : this.apiPath,
                constants : {
                    page : {
                        defaultPageNumber : 1,
                        defaultPageSize : 10
                    },
                    useTicketAmountRate : 0.005     //用券比例
                }
            }
        }
    }
    hsLib.provider('Config', ConfigProvider);
})(angular, hsLib);