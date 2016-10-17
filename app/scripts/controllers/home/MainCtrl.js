'use strict';
(function (angular, JFCoreControllers) {
    initConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function initConfig ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                abstract: true,
                views:{
                    'home':{
                        templateUrl: "scripts/views/home/layout.html"
                    }
                }
            })
            .state('home.main', {
                url: '/',
                templateUrl: "scripts/views/home/main.html",
                data:{$navbarDirection:'push', $navbarTitle:'<<', $navbarShow:true}
            })
        ;
    }
    JFCoreControllers.config(initConfig);

})(angular, JFCoreControllers);