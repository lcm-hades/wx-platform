(function(window){
  var h = {};
  h.isPhone = function(_p) {
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if(!myreg.test(_p))
    {
        return false;
    }
    return true;
  }
  h.hidePhone = function(phone) {
      var top = phone.substring(0, 3);
      var bottom = phone.substring(7, 11);
      return top+"****"+bottom;
  }

  h.captureArray = function(arr, start, end) {
      var new_arr = [];
      end = end > arr.length ? arr.length : end;
      for (var i = start; i < end; i++) {
          new_arr.push(arr[i]);
      }
      return new_arr;
  }
  window.tools = h;
  })(window);
