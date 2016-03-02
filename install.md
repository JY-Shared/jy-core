+ 安装Git， 参照 [帮助文档](http://code.fdjf.net/git/wenqiang/help/wiki/%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AEWindows%E6%9C%AC%E5%9C%B0git%E7%9A%84ssh%E7%8E%AF%E5%A2%83) 进行设置

+ 可选安装python *注意把Python.exe添加到PATH选项选中, 请安装python-2.XXX*

+ 安装nodejs

+ 安装npm windows里面不需要单独安装

+ 命令行执行以下命令

    ```
    $ npm install -g cnpm --registry=https://registry.npm.taobao.org
    $ cnpm install bower grunt grunt-cli gulp -g
    ```

+ 设置系统环境变量 `CHROMEDRIVER_CDNURL` 为 `http://oss-cn-hangzhou.aliyuncs.com/cnpm/dist/chromedriver/`  *一般情况下这个地址能下载*

+ 安装源代码以及依赖，git clone 版本库到目录wechat，然后执行以下命令， *如果执行`cnpm install`出错，请多次执行*

    ```
    $ cd wechat
    $ cnpm install
    $ bower install
    $ cd bower_components/angular-ui-bootstrap
    $ cnpm install
    $ grunt build:carousel
    $ cd ../../
    ```

+ 如果 *需要HTTPS* 访问，先安装openssl(注意把openssl.exe加入到PATH路径), 然后执行以下命令生成HTTPS证书

    ```
    $ openssl genrsa -out privatekey.pem 1024
    Generating RSA private key, 1024 bit long modulus
    ........++++++
    ....................................++++++
    e is 65537 (0x10001)
    $ openssl req -new -key privatekey.pem -out certrequest.csr
    You are about to be asked to enter information that will be incorporated
    into your certificate request.
    What you are about to enter is what is called a Distinguished Name or a DN.
    There are quite a few fields but you can leave some blank
    For some fields there will be a default value,
    If you enter '.', the field will be left blank.
    Country Name (2 letter code) [AU]:CN
    State or Province Name (full name) [Some-State]:Shanghai
    Locality Name (eg, city) []:Shanghai
    Organization Name (eg, company) [Internet Widgits Pty Ltd]:localhost
    Organizational Unit Name (eg, section) []:localhost
    Common Name (e.g. server FQDN or YOUR name) []:localhost
    Email Address []:choudouhu@163.com
    Please enter the following 'extra' attributes
    to be sent with your certificate request
    A challenge password []:
    An optional company name []:
    $ openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
    Signature ok
    subject=/C=CN/ST=Shanghai/L=Shanghai/O=localhost/OU=localhost/CN=localhost/emailAddress=choudouhu@163.com
    Getting Private key
    ```