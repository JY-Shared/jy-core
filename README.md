# 设置WebStorm的字符集：

+ File --> Settings --> Editor --> File Encodings

```
IDE encoding: UTF-8
Project encoding: UTF-8
```

**windows下，执行命令行命令，需要以管理员身份打开cmd或者powershell，建议使用powershell**

# 快速运行

+ 软件安装, 参见 [install.md](install.md)
    
+ 拷贝`config/app.default.json` 到 `config/app.json` 这个文件是一些绑定到部署环境的配置

    ```
    {

      "apiBaseUrl":"https://www.XXX.com/f", //api 地址
      "appRoot":"app/dist/",//正式环境部署用 app/dist/，测试环境用 app/
      "version":"1.0.0",//正式环境每次重新build时，需要更改这个数字，这个数字对应到git的tag
      "deployServer":{//正式环境部署目录
        "host":"",
        "port":"",
        "user":"",
        "privatekey":"C:\\Users\\Administrator\\.ssh\\wechat.key", //私钥
        "path":"/home/wechat/www/fakeapp" //目录
      },
      "wechatShare":{    //微信分享接口默认参数
           "title":"花生金服",   //默认标题
           "desc":"花生金服",    //默认描述
           "imgUrl":"/images/app/logo.png"    //默认图片地址
       },
         "hjxc":{   //和记小菜接口地址
           "grantTicket":"/a/channel/interface/grantTicket",    //发卷接口
           "queryTicketInfosByMobile":"/a/channel/interface/queryTicketInfosByMobile",  //根据用户手机号查询卷详情接口
           "channelCode":"",    //渠道编码
           "agreeCode":"12345"  //约定码
       },
          "register":{ //添加一个wifi落地页全局参数，需要添加在WIFI落地页LINK（发送验证码）这个按钮上。
            "url":"http://sammix.adsame.com/t?z=sammix&id=1216866"
          }
    }
    ```

+ 拷贝`config/config.default.less` 到 `config/config.less` 这个文件是一些绑定到部署环境的配置

    ```
    @img-path:            '/images'; //图片路径，可以指向cdn
    @img-version:            '?v=1.0.0'; //图片版本，用于清除浏览器缓存 
    @fa-font-path:        '/fonts'; //正式环境用 '/fonts' 测试环境 '/font-awesome/fonts'  
    @icon-font-path:        '/fonts/'; //正式环境 '/fonts/' 测试环境 '/bootstrap/fonts/'
    ```
   
+ 调试前端或者模拟接口 `gulp`

+ 生成并上传模拟接口文档 `gulp fakedocs`

+ 远程同步模拟接口 `gulp fakeroutes`

+ CSS组件开发测试 `gulp csstest`

# markdown 语法

+ http://daringfireball.net/projects/markdown/syntax

+ http://www.appinn.com/markdown/



# 参数解释
  
  + state参数解释
  ```
    $stateProvider.state('parent.stateName', {
                url: '访问路径=parentURL+thisUrl',
                abstract: true,
                templateUrl: "模板",
                controller:'控制器',
                sticky: false, //页面静态化
                data:{   //自定义data参数
                    $navbarDirection:'go/push',
                    $navbarTitle:'标题', 
                    $navbarShow:true,
                    $navbarPopDefault:'pop返回stateName',
                    $needAuth:'{boolean}页面是否需要登录',
                    $wechat{
                        shareTitle: '分享标题',
                        shareDesc : '分享描述'
                        shareImgUrl : '分享图片',
                        shareLink : '分享地址'
                    }
                }
            })
    ```