(function(angular, JFCoreServices){

    /**
     * @ngdoc service
     * @name JFCore.services.UA
     * @description
     * User-Agent
     */
    UAService.$inject = [];
    function UAService() {
        var _self = this;
        angular.extend(_self,new UAParser());

        this.isWeChatBrowser = isWeChatBrowser;
        function isWeChatBrowser(){
            return /MicroMessenger/i.test(_self.getUA());
        }

        this.isIOS = isIOS;
        function isIOS(){
            return 'IOS' == _self.getOS().name.toUpperCase();
        }
    }
    JFCoreServices.service('UA', UAService);
})(angular, JFCoreServices);