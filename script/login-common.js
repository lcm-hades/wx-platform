$(function () {
    //    添加公用头和尾和登录框
    $("#headerI").append('<div class="header"><div class="top  clearFix"><div class="nav w"><ul class="top-list"><li><a href="javascript:void(0)">首页</a></li> <li><a href="javascript:void(0)">职业生涯规划</a></li> <li><a href="javascript:void(0)">学习成绩提升</a></li> <li><a href="javascript:void(0)">综合素质评价</a></li> <li><a href="javascript:void(0)">多元招生方略</a></li> <li><a href="javascript:void(0)">平行志愿填报</a></li> </ul> <ul class="login-btn"><li><a id="login" href="javascript:void(0)">登录</a></li><li><a id="registered" href="javascript:void(0)">注册</a></li> </ul> <div class="person" id="person"> <a class="name" href="javascript:void(0)">石健<b></b></a> <ul> <li><a href="javascript:void(0)">我的账户</a></li> <li><a href="javascript:void(0)">我的消息</a></li> <li><a href="javascript:void(0)">我的订单</a></li> <li><a href="javascript:void(0)">退出</a></li> </ul> </div> </div> </div> <div class="guihua w"> <div class="wenzi"> 职业生涯规划 </div> <div class="search"> <input type="text" placeholder="搜点什么..." class="left"/> <input type="button" class="right"/> </div> </div> <div class="shengya-list"> <div class="w"> <ul class="clearFix"> <li><a href="javascript:void(0)">首页</a></li> <li><a href="javascript:void(0)">高考新政</a></li> <li><a href="javascript:void(0)">生涯课堂</a></li> <li><a href="javascript:void(0)">高校专业</a></li> <li><a href="../student/sexual-testing.html">性向测评</a></li> <li><a href="javascript:void(0)">高中课堂简介</a></li> </ul> </div> </div> </div>');
    $("#dengluI").append('<div class="layer" id="layer"> <div class="denglu"> <div class="title">会员登录 <b></b></div> <form method="post"> <div class="phone"> <input type="text" name="log" placeholder="请输入手机号码"/> </div> <div class="mima"> <input type="password" name="pass" placeholder="请输入密码"/> </div> <input type="submit" value="登录" class="btn"/> </form> <div class="forget"> <a href="javascript:void(0)">忘记密码</a> <a href="javascript:void(0)">立即注册</a> </div> <div class="sanfang"> <div class="top"> <p class="left"></p> <p class="wenzi">使用第三方</p> <p class="right"></p></div> <div class="tubiao"> <img src="../images/student/qiuqiu.png" alt=""/> <img src="../images/student/winxin.png" alt=""/> <img src="../images/student/sina.png" alt=""/> </div></div></div></div>')

$("#footerI").append('<div class="footer"> <div class="w help clearFix"> <dl class="one"><dt><a href="javascript:void(0)">帮助中心</a></dt> <dd><a href="javascript:void(0)">使用指南</a></dd> <dd><a href="javascript:void(0)">常见问题</a></dd> <dd><a href="javascript:void(0)">在线购买</a></dd> <dd><a href="javascript:void(0)">购卡查询</a></dd> </dl> <dl class="two"> <dt><a href="javascript:void(0)">帮助中心</a></dt> <dd><a href="javascript:void(0)">使用指南</a></dd> <dd><a href="javascript:void(0)">常见问题</a></dd> <dd><a href="javascript:void(0)">在线购买</a></dd> <dd><a href="javascript:void(0)">购卡查询</a></dd> </dl> <dl class="three"> <dt><a href="javascript:void(0)">帮助中心</a></dt> <dd><a href="javascript:void(0)">使用指南</a></dd> <dd><a href="javascript:void(0)">常见问题</a></dd> <dd><a href="javascript:void(0)">在线购买</a></dd> <dd><a href="javascript:void(0)">购卡查询</a></dd> </dl> <dl class="four"> <dt><a href="javascript:void(0)">帮助中心</a></dt> <dd><a href="javascript:void(0)">使用指南</a></dd> <dd><a href="javascript:void(0)">常见问题</a></dd> <dd><a href="javascript:void(0)">在线购买</a></dd> <dd><a href="javascript:void(0)">购卡查询</a></dd> </dl> <dl> <dt><a href="javascript:void(0)">帮助中心</a></dt> <dd><a href="javascript:void(0)">使用指南</a></dd> <dd><a href="javascript:void(0)">常见问题</a></dd> <dd><a href="javascript:void(0)">在线购买</a></dd> <dd><a href="javascript:void(0)">购卡查询</a></dd> </dl> </div> <div class="fanbanbijiu"> <div class="hu-icp w"> <p>? 2017 www.yxke12.com All Rights Reserved. 智慧程教育科技有限公司版权所有，翻版必究&nbsp&nbsp&nbsp&nbsp沪ICP备07019113号</p> </div> </div> </div>');


//导航栏设置鼠标点击下方出来边框事件
    $(".nav #menu li").click(function () {
        $(this).addClass("border-btm").siblings().removeClass("border-btm")
    });
    //点击登录按钮弹出登录框
    $("#login").click(function () {
        $("#layer").stop().fadeIn();
        $(".layer .dl").fadeIn();
    });
    //点击清除按钮登录框消失
    $(".dl .title b").click(function () {
        $("#layer").stop().fadeOut();
    });


    $(".layer .dl .forget .kahaojihuo").click(function(){
        console.log(111);
        $(".layer .dl").fadeOut();
        $(".layer .jihuo").fadeIn();

    });
    $(".layer .jihuo .chongzhi").click(function(){
        $("#kahao").val("");
        $("#kahao").attr('placeholder',"请输入卡号");
        $("#kamima").val("");
        $("#kamima").attr('placeholder',"请输入卡密码");
    });

    $(".layer .jihuo .title b").click(function(){
        $(".layer .jihuo").fadeOut();
    });

});

