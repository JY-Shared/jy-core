(function(angular, hsWechatServices){

    /**
     * @ngdoc service
     * @name hsWechat.services.UA
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
    hsWechatServices.service('UA', UAService);
})(angular, hsWechatServices);