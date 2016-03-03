'use strict';
(function (angular, JFCoreControllers) {
    initConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function initConfig ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('account', {
                url: '/account',
                abstract: true,
                views:{
                    'account':{
                        templateUrl: "scripts/views/account/layout.html"
                    }
                }
            })
            .state('account.main', {
                url: '/',
                templateUrl: "scripts/views/account/main.html",
                //controller:'AccountMainCtrl',
                data:{$navbarDirection:'go', $navbarTitle:'更多', $navbarShow:true}
            })
        ;
    }
    JFCoreControllers.config(initConfig);

})(angular, JFCoreControllers);