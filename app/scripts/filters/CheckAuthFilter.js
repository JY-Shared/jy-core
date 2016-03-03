(function (angular, JFCoreFilters) {
    /**
     * 检查登录权限
     */
    CheckAuthFilter.$inject = ['$rootScope', '$state', 'Capture', 'Common'];
    function CheckAuthFilter($rootScope, $state, Capture, Common) {
        //var loginState = Common.getAppConfig().state.login;
        /**
         *无效的token事件
         */
        $rootScope.$on('invalidTokenEvent', function (event) {
        });
        //
        //$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        //
        //        if( !Account.hasLogin() &&  fromState.data){
        //            var signMainState = $state.get(loginState);
        //            signMainState.data.$navbarDirection =  fromState.data.$navbarDirection;
        //        }
        //
        //        /**
        //         * 检查页面登录权限
        //         */
        //        if (toState.data && toState.data.$needAuth && !Account.hasLogin()) {//页面登录访问
        //            event.preventDefault();
        //            $state.go(loginState);
        //        } else if (toState.data && toState.data.$rejectAccess === "login" && Account.hasLogin()) { //页面不允许登录访问
        //            if (toState.data.$redirectState) {
        //                $state.go(toState.data.$redirectState);
        //                event.preventDefault();
        //            }
        //        }
        //});
    }
    JFCore.run(CheckAuthFilter);

})(angular, JFCoreFilters);