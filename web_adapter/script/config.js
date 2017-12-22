/* 项目配置.基于默认配置,可以通过
 http://www.example.com/PUBLIC_PATH/web_adapter/adapter.html
访问自己的 app.如有修改,请对应变换访问地址即可.

服务器静态部署目录 PUBLIC_PATH,默认为用户 appId
*/

/* ==================== 用户相关配置.可根据需要,灵活修改. ============= */
/* app 入口文件. */
var APP_INDEX_PATH = 'html/register/register_first_frm.html'

/* ====================== 以下适配器相关配置,一般不需要修改.=================== */
/* 适配器入口文件. */
var WEB_ADAPTER_INDEX_PATH = 'web_adapter/adapter.html'

/* 适配器核心js文件. */
var WEB_ADAPTER_CORE_JS_PATH = 'web_adapter/script/adapter.js'

/* =================== 应用和模块相关信息.一般由 APICloud 服务器自动生成.============= */
var PUBLIC_PATH = '/A6944502823879/'

var APP_INFO = {
  appId: 'A6944502823879',
  version: '1.2.23',
  appVersion: '00.00.01',
  appName: '智慧程优生涯'
}

var MODULES_INFO = [{
	 "name":"aliPay",
	 "class":"UZAliPay",
	 "methods":["pay","config","payOrder","auth"]
 }
,{
 "name":"listContact",
 "class":"UZListContact",
 "methods":["open","close","reloadData","setRefreshHeader","hide","show","deleteItem","refreshItem","insertItem","scrollToItem"]
 }
,{
    "name":"mam",
    "class":"UZMAM",
    "methods":["checkUpdate","addEvent","execCommand","showToastAlert","hideToastAlert"],
    "syncMethods":["syncExecCommand"],
    "launchClassMethod":"launch"
}
,{
 "name":"pdfReader",
 "class":"UZPdfReader",
 "methods":["open","clearCache"]
 }
,{
     "name":"UIListCard",
     "class":"UIListCard",
     "methods":["open","close","hide","show","reloadData"]
 }
,{
 "name":"UIMediaScanner",
 "class":"UZUIMediaScanner",
 "methods":["open","scan","fetch","transPath","getVideoDuration"]
 }
, {
     "name":"webBrowser",
     "class":"UZBrowser",
     "methods":["open","openView","closeView","loadUrl","loadScript","historyBack","historyForward"]
 }
,{
     "name":"wxPay",
     "class":"UZWxPay",
     "methods":["getToken","getOrderId","payOrder","config","pay"]
}
]
