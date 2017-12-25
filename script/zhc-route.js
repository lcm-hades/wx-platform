(function(window){
  var h = {};
  h.openPage = function(url, parames) {
      if ((typeof parames) == 'object') {
        var i = 0;
        for(var key in parames){
          if (i == 0) {
            url = url + "?" + key + "=" + parames[key];
          }else{
            url = url + "&" + key + "=" + parames[key];
          }
          i++;
        }
      }
      window.location.href = url;
  }

  h.closePage = function(parames) {
    window.history.back(); 
  }

  h.getPageParame = function(key) {
    var reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
    // return request(key);
  }

  function request(paras){
    var url = location.href;
    var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");
    var paraObj = {}
    for (i=0; j=paraString[i]; i++){
      paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if(typeof(returnValue)=="undefined"){
      return "";
    }else{
      return returnValue;
    }
  }

  window.rt = h;
  })(window);
