(function (angular, JFCoreFilters) {

    /**
     * @ngdoc function
     * @name JFCore.service.WechatJSSDK#WechatShareFilter
     * @methodOf JFCore.service.WechatJSSDK
     *
     * @description
     * 当页面跳转成功，将分享参数写入wechat接口。
     * 需要指定分享参数
     * <pre>
     * .state('more', {
     *            url: '/more',
     *            templateUrl: "scripts/views/more.html",
     *            data:{
     *                   $wechatShareTitle:'安全保障',
     *                   $wechatSharedesc:'花生金服安全保障说明',
     *                   $wechatShareimgUrl:'/images/app/20151117-01.jpg',
     *                   $wechatSharelink:'/more/safe'
     *              }
     *        })
     * </pre>
     */
    WechatShareFilter.$inject = ['$rootScope', '$window', 'WechatJSSDK', 'Common'];
    function WechatShareFilter($rootScope, $window, WechatJSSDK, Common) {

        /**
         * 设置State分享参数
         */
        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            var $wechatShareImgUrl, $wechatShareTitle, $wechatShareDesc, $wechatShareLink;
            if (toState.data) {
                $wechatShareImgUrl = toState.data.$wechatShareImgUrl || $window.SERVERCONF.wechatShare.imgUrl;
                $wechatShareTitle = toState.data.$wechatShareTitle || $window.SERVERCONF.wechatShare.title;
                $wechatShareDesc = toState.data.$wechatShareDesc || $window.SERVERCONF.wechatShare.desc;
                $wechatShareLink = toState.data.$wechatShareLink || $window.SERVERCONF.appRootUrl;
            } else {
                $wechatShareImgUrl = $window.SERVERCONF.wechatShare.imgUrl;
                $wechatShareTitle = $window.SERVERCONF.wechatShare.title;
                $wechatShareDesc = $window.SERVERCONF.wechatShare.desc;
                $wechatShareLink = $window.SERVERCONF.appRootUrl;
            }

            //参数是否http or https 开头
            if (!/^https?.*/.test($wechatShareImgUrl)) {
                $wechatShareImgUrl = $window.SERVERCONF.appRootUrl + $wechatShareImgUrl;
            }
            if (!/^https?.*/.test($wechatShareLink)) {
                $wechatShareLink = $window.SERVERCONF.appRootUrl + $wechatShareLink;
            }

            //增加分享参数
            var connect = $wechatShareLink.lastIndexOf('?') == -1 ? '?' : '&';
            var params = [];
            $wechatShareLink = $wechatShareLink + connect + params.join('&');

            WechatJSSDK.setAllShareParams($wechatShareTitle, $wechatShareDesc, $wechatShareLink, $wechatShareImgUrl);
        });


        /**
         *  分享朋友圈
         */
        $rootScope.$on('wechatShareOnMenuShareTimelineSuccess', function () {
            //alert('分享成功');
        });
        /**
         *  分享QQ
         */
        $rootScope.$on('wechatShareOnMenuShareQQSuccess', function () {
            //alert('分享成功');
        });
        /**
         *  分享到微博
         */
        $rootScope.$on('wechatShareOnMenuShareWeiboSuccess', function () {
            //alert('分享成功');
        });
        /**
         *  分享到QQ空间
         */
        $rootScope.$on('wechatShareOnMenuShareQZoneSuccess', function () {
            //alert('分享成功');
        });
        /**
         *  分享到朋友
         */
        $rootScope.$on('wechatShareOnMenuShareAppMessageSuccess', function () {
            //alert('分享成功');
        });
    }

    //JFCore.run(WechatShareFilter);

})(angular, JFCoreFilters);