(function (angular, hsWechatFilters) {
    /**
     * change state 清除modals的内容
     */
    CaptureFilter.$inject = ['$rootScope', 'Capture'];
    function CaptureFilter($rootScope, Capture) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            Capture.setContentFor('modals', '', $rootScope);
        });
    }
    hsWechat.run(CaptureFilter);

})(angular, hsWechatFilters);