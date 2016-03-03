var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 首页轮播列表
 *
 * @name event.carousel
 * @href /event/carousel
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 *
 * @description
 *
 * https://localhost:3000/event/carousel?client=asdfaqerq1werqwe
 *
 * https://fakeapi.fdjf.net:3000/event/carousel?client=asdfaqerq1werqwe
 *
 * @output {json} 首页轮播列表
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [
 * 	  {
 *  	imageUrl:"{string} 	图片URL（绝对路径）",
 *  	title:"{string} 标题",
 *  	type:"{int} 类型（1--活动，点击后打开url；2--项目，点击后跳到项目详情",
 *  	target:"{string} 目标参数"
 *     }
 * 	]
 * }
 *
 *
 */
router.all('/event/carousel', function (req, res, next) {
    var events = [];
    _.forEach([2,3,4,5,6,7], function (i) {
    	events.push({
    		imageUrl:'https://www.hsbank360.com/static/modules/front/images/index/banner-0' + i + '.jpg',
        	title: 'slide'+i,
        	type: [1,2][i % 2],
        	target: [1,2][i % 2] == 1 ? "https://www.hsbank360.com/f/activity/invitation" : "1"
        });
    });
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: events
    }
    res.json(resultValue);
});

/**
 * @fakedoc App自动更新检查接口
 *
 * @name event.checkUpdate
 * @href /event/checkUpdate
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 *
 * @description
 *
 * https://localhost:3000/event/checkUpdate?client=asfdaqwerqe
 *
 * https://fakeapi.fdjf.net:3000/event/checkUpdate?client=asfdaqwerqe
 *
 * @output {json} App自动更新检查
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		needUpdate:"{String} 		是否有更新（0是，其它不是）",
 * 		needForcedUpdate:"{String} 	是否需要强制更新（0是，其它不是）",
 *  	url:"{string} 				待更新的apk文件url（android）或AppStore下载链接（iOS）",
 *  	version:"{String} 			待更新App版本",
 *  	versionInfo:"{string} 		待更新App版本说明",
 *  	androidAppSize:"{string} 	待更新App文件大小（byte）"
 *    }
 * }
 *
 */
router.all('/event/checkUpdate', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		needUpdate:"1",
    		needForcedUpdate:"1",
    		url:"http://www.fdjf.net/client/fdjf_hsbank-1.0.1-fdjf-FDJF-release-aligned-com.fdjf.hsbank.apk",
    		version:"1.0.1",
    		versionInfo:"测试功能",
    		androidAppSize:"134123"
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 服务端状态检查接口
 *
 * @name event.checkServerStatus
 * @href /event/checkServerStatus
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 *
 * @description
 *
 * https://localhost:3000/event/checkServerStatus?client=asfdaqwerqe
 *
 * https://fakeapi.fdjf.net:3000/event/checkServerStatus?client=asfdaqwerqe
 *
 * @output {json} 服务端状态检查
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		statusCode:"{String} 		服务端是否正常工作（0是，其它不是）",
 *  	statusText:"{string} 		服务端状态说明"
 *    }
 * }
 *
 */
router.all('/event/checkServerStatus', function (req, res, next) {
	var i = Math.floor(Math.random() * 1);
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		statusCode:i == 1 ? "1" : "0",
    		statusText:i == 1 ? "维护中，请稍候再试" : "ok"
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 新手任务
 *
 * @name event.newUserTask
 * @href /event/newUserTask
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 *
 * @description
 *
 * https://localhost:3000/event/newUserTask?client=asfdaqwerqe
 *
 * https://fakeapi.fdjf.net:3000/event/newUserTask?client=asfdaqwerqe
 *
 * @output {json} 新手任务接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		step1:"{String} 	注册奖励",
 *  	step2:"{string} 	开通第三方资金托管奖励",
 *  	step3:"{String} 	充值奖励 ",
 *  	step4:"{string} 	首次投资奖励 "
 *    }
 * }
 *
 */
router.all('/event/newUserTask', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		step1:"您已获得5元投资券",
    		step2:"您已获得1张10元投资券",
    		step3:"您已获得10元投资券",
    		step4:"您已获得8元现金和200元投资券",
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 我的抽奖信息
 *
 * @name event.lotteryInfo
 * @href /event/lotteryInfo
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 		token
 * @input.post {string} code 		活动代码(【1009:春节活动 ,1010:摇钱树,1011 :女神升值季】)
 * @needAuth
 * @description
 *
 * https://localhost:3000/event/lotteryInfo?client=asfdaqwerqe
 *
 * https://fakeapi.fdjf.net:3000/event/lotteryInfo?client=asfdaqwerqe
 *
 * @output {json} 我的抽奖信息
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *  	count:"{int} 	抽奖机会（已使用抽奖次数+剩余抽奖次数）",
 *  	used:"{int} 	已使用抽奖次数",
 *  	over:"{int} 	剩余抽奖次数",
 *    }
 * }
 *
 */
router.all('/event/lotteryInfo', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data: {
			count:2,
			used:2,
			over:0
		}
	};
	res.json(resultValue);
});

/**
 * @fakedoc 抽奖
 *
 * @name event.lottery
 * @href /event/lottery
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 		token
 * @input.post {string} code 		活动代码(【1009:春节活动 ,1010:摇钱树,1011 :女神升值季】)
 * @needAuth
 * @description
 *
 * https://localhost:3000/event/lottery?client=asfdaqwerqe
 *
 * https://fakeapi.fdjf.net:3000/event/lottery?client=asfdaqwerqe
 *
 * @output {json} 抽奖接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *  	angle:"{int} 	旋转角度（适用于转盘）",
 *  	result:"{String}   返回信息",
 *    }
 * }
 *
 */
router.all('/event/lottery', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data: {
			angle:40,
			result:'返回信息'
		}
	}
	res.json(resultValue);
});

/**
 * @fakedoc 我的中奖信息
 * @name event.myPrizeList
 * @href /event/myPrizeList
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 		token
 * @input.post {string} code 		活动代码(【1009:春节活动 ,1010:摇钱树】)
 * @input.post {int=} [pageSize=10] 	页容量
 * @input.post {int=} [pageNumber=1] 	页码
 * @needAuth
 * @description
 *
 * https://localhost:3000/event/myPrizeList?client=asfdaqwerqe
 *
 * https://fakeapi.fdjf.net:3000/event/myPrizeList?client=asfdaqwerqe
 *
 * @output {json} 我的中奖信息
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *   data: {
 *   count : "{int} 	奖品数量",
 *   data : [{
 *  	prize:"{String}   奖品",
 *  	date:"{String} 	中奖时间"
 *   }]
 *  }
 * }
 *
 */
router.all('/event/myPrizeList', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data: {
			count: 10,
			data :[
			{date: '2016.3.1 10:02', result: "10元现金券"},
			{date: '2016.3.1 10:02', result: "迪士尼米奇玩偶"},
			{date: '2016.3.1 10:02', result: "10元现金券"},
			{date: '2016.3.1 10:02', result: "iPad mini3"},
			{date: '2016.3.1 10:02', result: "10元现金券"},
			{date: '2016.3.1 10:02', result: "10元现金券"},
			{date: '2016.3.1 10:02', result: "50元现金券"},
			{date: '2016.3.1 10:02', result: "10元现金券"},
			{date: '2016.3.1 10:02', result: "iPhone 6s"},
			{date: '2016.3.1 10:02', result: "20元投资券"}
			]
		}
	};
	res.json(resultValue);
});

/**
 * @fakedoc 活动分享成功
 * @name event.shareSuccess
 * @href /event/shareSuccess
 *
 * @input.post {string} client 	客户端统计参数（common/client）
 * @input.post {string} token 		token
 * @input.post {string} code 		活动代码(【1009:春节活动 ,1010:摇钱树】)
 * @needAuth
 * @description
 * https://localhost:3000/event/shareSuccess?client=asfdaqwerqe
 * https://fakeapi.fdjf.net:3000/event/shareSuccess?client=asfdaqwerqe
 *
 * @output {json} 分享成功
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 * }
 */
router.all('/event/shareSuccess', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok'
	};
	res.json(resultValue);
});

/**
 * @fakedoc 中奖榜单
 *
 * @name event.lotteryPrizeList
 * @href /event/lotteryPrizeList
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} code 		活动代码(【1009:春节活动 ,1010:摇钱树】)
 *
 * @description
 *
 * https://localhost:3000/event/lotteryPrizeList?client=asfdaqwerqe
 *
 * https://fakeapi.fdjf.net:3000/event/lotteryPrizeList?client=asfdaqwerqe
 *
 * @output {json} 中奖榜单接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [{
 *  	mobile:"{String} 	手机号码",
 *  	prize:"{String}   奖品"
 *  }]
 * }
 *
 */
router.all('/event/lotteryPrizeList', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data: [
			{mobile:'158****4609',result:"10元现金券"},
			{mobile:'158****4609',result:"迪士尼米奇玩偶"},
			{mobile:'158****4609',result:"10元现金券"},
			{mobile:'158****4609',result:"iPad mini3"},
			{mobile:'158****4609',result:"10元现金券"},
			{mobile:'158****4609',result:"10元现金券"},
			{mobile:'158****4609',result:"50元现金券"},
			{mobile:'158****4609',result:"10元现金券"},
			{mobile:'158****4609',result:"iPhone 6s"},
			{mobile:'158****4609',result:"20元投资券"}
		]
	};
	res.json(resultValue);
});

/**
 * @fakedoc 投资排行
 *
 * @name event.investmentList
 * @href /event/investmentList
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {string} type 			类型（week:周排行；month:月排行）
 * @input.post {string} year 			年份
 * @input.post {string} month 			月份
 * @input.post {string} week 			当月第N周
 * @input.post {string} genre 			类型2（1:投资排行[default],2,年化排行）
 *
 * @description
 *
 * https://localhost:3000/event/investmentList?client=asfdaqwerqe&token=1342345234532&type=month&year=2015&month=12&week=2
 *
 * https://fakeapi.fdjf.net:3000/event/investmentList?client=asfdaqwerqe&token=1342345234532&type=month&year=2015&month=12&week=2
 *
 * @output {json} 投资排行接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *  	myRanking:"{String} 	当前用户的名次（如果未登录，则为0）",
 *  	myAmount:"{String}    	当前用户的周期内的投资金额（元）(如果未登录，则为0)",
 *  	recordList:[{
 *  		ranking:"{String} 	名次",
 *  		mobile:"{String}    手机号码（要预处理，显示成如下格式：136****5555）",
 *  		amount:"{String}    周期内的投资金额（元）"
 *  	}]
 *    }
 * }
 *
 */
router.all('/event/investmentList', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data: {
			myRanking:100,
			myAmount:23456,
			recordList:[{ranking:'1',mobile:'158****4609',amount:"100000"},
				{ranking:'2',mobile:'158****4609',amount:"100000"},
				{ranking:'3',mobile:'158****4609',amount:"100000"},
				{ranking:'4',mobile:'158****4609',amount:"100000"},
				{ranking:'5',mobile:'158****4609',amount:"100000"},
				{ranking:'6',mobile:'158****4609',amount:"100000"},
				{ranking:'7',mobile:'158****4609',amount:"100000"},
				{ranking:'8',mobile:'158****4609',amount:"100000"},
				{ranking:'9',mobile:'158****4609',amount:"100000"},
				{ranking:'10',mobile:'158****4609',amount:"100000"},
				{ranking:'11',mobile:'158****4609',amount:"100000"},
				{ranking:'12',mobile:'158****4609',amount:"100000"},
				{ranking:'13',mobile:'158****4609',amount:"100000"},
				{ranking:'14',mobile:'158****4609',amount:"100000"},
				{ranking:'15',mobile:'158****4609',amount:"100000"},
				{ranking:'16',mobile:'158****4609',amount:"100000"},
				{ranking:'17',mobile:'158****4609',amount:"100000"},
				{ranking:'18',mobile:'158****4609',amount:"100000"},
				{ranking:'19',mobile:'158****4609',amount:"100000"},
				{ranking:'20',mobile:'158****4609',amount:"100000"}
			]
		}
	}
	res.json(resultValue);
});

module.exports = router;