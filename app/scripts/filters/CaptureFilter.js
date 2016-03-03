(function (angular, JFCoreFilters) {
    /**
     * change state 清除modals的内容
     */
    CaptureFilter.$inject = ['$rootScope', 'Capture'];
    function CaptureFilter($rootScope, Capture) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            Capture.setContentFor('modals', '', $rootScope);
        });
    }
    JFCore.run(CaptureFilter);

})(angular, JFCoreFilters);