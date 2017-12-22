// ----------------------------------------------//
//                                               //
//                唐明明☀20150724                //
//                                               //
// ----------------------------------------------//


//Regional开始
$(document).ready(function(){
    $(".Regional").click(function(){

        if ($('.grade-eject').hasClass('grade-w-roll')) {
            $('.grade-eject').removeClass('grade-w-roll');
                  $('#main').removeClass('alpha');
                  // $('#shanxuan').removeClass('alpha');
        } else {
            $('.grade-eject').addClass('grade-w-roll');
                  $('#main').addClass('alpha');
                  // $('#shanxuan').addClass('alpha');
        }
    });
});

$(document).ready(function(){
    $(".grade-w>li").click(function(){
        $(".grade-t")
            .css("left","33.48%")
    });
});

$(document).ready(function(){
    $(".grade-t>li").click(function(){
        $(".grade-s")
            .css("left","66.96%")
    });
});

//Brand开始

$(document).ready(function(){
    $(".Brand").click(function(){
        if ($('.Category-eject').hasClass('grade-w-roll')) {
            $('.Category-eject').removeClass('grade-w-roll');
            $('#main').removeClass('alpha');
        } else {
            $('.Category-eject').addClass('grade-w-roll');
            $('#main').addClass('alpha');
        }
    });
});

$(document).ready(function(){
    $(".Category-w>li").click(function(){
        $(".Category-t")
            .css("left","33.48%")
    });
});

$(document).ready(function(){
    $(".Category-t>li").click(function(){
        $(".Category-s")
            .css("left","66.96%")
    });
});

//Sort开始

$(document).ready(function(){
    $(".Sort").click(function(){
        if ($('.Sort-eject').hasClass('grade-w-roll')) {
          $('#main').removeClass('alpha');
            $('.Sort-eject').removeClass('grade-w-roll');
        } else {
          $('#main').addClass('alpha');
            $('.Sort-eject').addClass('grade-w-roll');
        }
    });
});


//判断页面是否有弹出

$(document).ready(function(){
    $(".Regional").click(function(){
        if ($('.Category-eject').hasClass('grade-w-roll')){
            $('.Category-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Regional").click(function(){
        if ($('.Sort-eject').hasClass('grade-w-roll')){
            $('.Sort-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Brand").click(function(){
        if ($('.Sort-eject').hasClass('grade-w-roll')){
            $('.Sort-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Brand").click(function(){
        if ($('.grade-eject').hasClass('grade-w-roll')){
            $('.grade-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Sort").click(function(){
        if ($('.Category-eject').hasClass('grade-w-roll')){
            $('.Category-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Sort").click(function(){
        if ($('.grade-eject').hasClass('grade-w-roll')){
            $('.grade-eject').removeClass('grade-w-roll');
        };

    });
});


// //js点击事件监听开始
// function grade1(wbj){
//     var arr = document.getElementById("gradew").getElementsByTagName("li");
//     for (var i = 0; i < arr.length; i++){
//         var a = arr[i];
//         a.style.background = "";
//
//     };
//     wbj.style.background = "#eee"
//   var diqu =  document.getElementById("shudu").innerHTML= wbj.innerHTML
//   // diqu
//
//     api.ajax({
//         url: 'http://www.yxke12.com/index.php/App/Zhuanyexueke/search.html',
//         method: 'post',
//         data: {
//             values: {
//                 province: diqu,
//                 xueli:''
//             },
//
//         }
//     },function(ret, err){
//         if (ret) {
//           var html=''
//           html+='<script id="evaluationtmpl" type="text/x-dot-template">{{ for(var i=0;i  <it.length;i++) { }}  <li class="aui-list-item aui-list-item-middle" tapmode onclick=duizhaoxiangqing1("{{=it[i].dxmc}},{{=it[i].xlcc}}"i)>'
//           html+=' <div class="aui-media-list-item-inner"> <div class="aui-list-item-media" style="width: 3rem;"> <img src="http://www.yxke12.com/Public/Home/images/schools/{{=it[i].logo}}" class="aui-img-round aui-list-img-sm"> </div>'
//           html+=' <div class="aui-list-item-inner "> <div class="aui-list-item-text" style="display: flex;justify-content: left;"><div class="aui-list-item-title aui-font-size-14">{{=it[i].dxmc}}</div> </div>'
//           html+=' <div class="aui-list-item-text biaoqian"> {{=it[i].xlcc}} </div> </div>'
//           html+='<div class="aui-list-item-media" style="text-align:right"> <i class="aui-iconfont aui-icon-location">{{=it[i].province}}</i></div></div> </li>{{}}}'
//       document.getElementById('schools').innerHTML = html;
//
//       var evalText = doT.template(document.getElementById('evaluationtmpl').innerHTML);
//       document.getElementById('schools').innerHTML = evalText(ret.data);
//             // alert( JSON.stringify( ret ) );
//         } else {
//             alert( JSON.stringify( err ) );
//         }
//     });
//
//
//     // alert()
// }



// //js点击事件监听开始
// function grade2(wbj){
//     var arr = document.getElementById("gradew1").getElementsByTagName("li");
//     for (var i = 0; i < arr.length; i++){
//         var a = arr[i];
//         a.style.background = "";
//
//     };
//     wbj.style.background = "#eee"
//   var diqu =  document.getElementById("xuexiaoshudi1").innerHTML= wbj.innerHTML
//   // diqu
//
//     api.ajax({
//         url: 'http://www.yxke12.com/index.php/App/Gaokaoxinzheng/lists.html',
//         method: 'post',
//         data: {
//             values: {
//                 province:diqu
//             },
//
//         }
//     },function(ret, err){
//         if (ret) {
//           var html=''
//           html+='<script id="evaluationtmpl" type="text/x-dot-template">  {{ for(var i=0;i  <it.length;i++) { }}<li class="aui-list-item"  tapmode onclick=gaokaoXZXQ3("{{=it[i].url}}")>'
//           html+='<div class="aui-media-list-item-inner"><div class="aui-list-item-media"><img src="http://www.yxke12.com/Public/Home/images/student/{{=it[i].pict}}" style="width: 94px;height: 83px;"></div>'
//           html+='<div class="aui-list-item-inner"><div class="aui-list-item-text"><div class="aui-list-item-title">{{=it[i].name}}</div></div>'
//           html+='<div class="aui-info aui-margin-t-5" ><div class="aui-info-item"></div><div class="aui-info-item">{{=it[i].time}}</div>'
//           html+='  </div></div></div></li>{{}}}</script>'
//       document.getElementById('shengfenzhengce').innerHTML = html;
//
//       var evalText = doT.template(document.getElementById('evaluationtmpl').innerHTML);
//       document.getElementById('shengfenzhengce').innerHTML = evalText(ret.data.lists);
//             // alert( JSON.stringify( ret ) );
//         } else {
//             alert( JSON.stringify( err ) );
//         }
//     });
//
//
//     // alert()
// }



// //js点击事件监听开始
// function grade3(wbj){
//         // alert("aaa")
//     var arr = document.getElementById("gradew3").getElementsByTagName("li");
//     for (var i = 0; i < arr.length; i++){
//         var a = arr[i];
//         a.style.background = "";
//
//     };
//     wbj.style.background = "#eee"
//   var pjsd =  document.getElementById("PJSD").innerHTML= wbj.innerHTML
//   // diqu
//
//
//     api.ajax({
//         url: 'http://www.yxke12.com/index.php/App/Shengfenzhengce/lists.html',
//         method: 'post',
//         data: {
//             values: {
//                 province:pjsd
//             },
//
//         }
//     },function(ret, err){
//         if (ret) {
//           var html=''
//           html+='<script id="evaluationtmpl" type="text/x-dot-template"><li class="aui-list-item" ><div class="aui-media-list-item-inner"><div class="aui-list-item-media">'
//           html+='<img src="http://www.yxke12.com/Public/Home/images/student/{{=it.thumb}}" class="pingGImag"></div><div class="aui-list-item-inner"><div class="aui-list-item-text">'
//           html+='  <div class="aui-list-item-title">{{=it.title}}</div></div><div class="aui-info aui-margin-t-5" ><div class="aui-info-item">'
//           html+='    </div><div class="aui-info-item"></div></div></div></div></li>'
//
//       document.getElementById('pingjiaShengZhengCe').innerHTML = html;
//
//       var evalText = doT.template(document.getElementById('evaluationtmpl').innerHTML);
//       document.getElementById('pingjiaShengZhengCe').innerHTML = evalText(ret.data.zhengce);
//             // alert( JSON.stringify( ret ) );
//         } else {
//             alert( JSON.stringify( err ) );
//         }
//     });
//
//
//     // alert()
// }


function gradet(tbj){
    var arr = document.getElementById("gradet").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "";
    };
    tbj.style.background = "#fff"
}

function grades(sbj){
    var arr = document.getElementById("grades").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.borderBottom = "";
    };
    sbj.style.borderBottom = "solid 1px #ff7c08"
}

function Categorytw(wbj){
    var arr = document.getElementById("Categorytw").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "";
    };
    wbj.style.background = "#eee"
}

function Categoryt(tbj){
    var arr = document.getElementById("Categoryt").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "";
    };
    tbj.style.background = "#fff"
}

function Categorys(sbj){
    var arr = document.getElementById("Categorys").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.borderBottom = "";
    };
    sbj.style.borderBottom = "solid 1px #ff7c08"
}

// function Sorts(sbj){
//     var diqu =  document.getElementById("shudu").innerHTML
//     var xuelicengci =  document.getElementById("xuelicengci").innerHTML=sbj.innerHTML
//
//     api.ajax({
//         url: 'http://www.yxke12.com/index.php/App/Zhuanyexueke/search.html',
//         method: 'post',
//         data: {
//             values: {
//                 province: diqu,
//                 xueli:xuelicengci
//             },
//
//         }
//     },function(ret, err){
//         if (ret) {
//           var html=''
//           html+='<script id="evaluationtmpl" type="text/x-dot-template">{{ for(var i=0;i  <it.length;i++) { }}  <li class="aui-list-item aui-list-item-middle" tapmode onclick="duizhaoxiangqing()">'
//           html+=' <div class="aui-media-list-item-inner"> <div class="aui-list-item-media" style="width: 3rem;"> <img src="http://www.yxke12.com/Public/Home/images/schools/{{=it[i].logo}}" class="aui-img-round aui-list-img-sm"> </div>'
//           html+=' <div class="aui-list-item-inner "> <div class="aui-list-item-text" style="display: flex;justify-content: left;"><div class="aui-list-item-title aui-font-size-14">{{=it[i].dxmc}}</div> </div>'
//           html+=' <div class="aui-list-item-text biaoqian"> {{=it[i].xlcc}} </div> </div>'
//           html+='<div class="aui-list-item-media" style="text-align:right"> <i class="aui-iconfont aui-icon-location">{{=it[i].province}}</i></div></div> </li>{{}}}'
//       document.getElementById('schools').innerHTML = html;
//
//       var evalText = doT.template(document.getElementById('evaluationtmpl').innerHTML);
//       document.getElementById('schools').innerHTML = evalText(ret.data);
//             // alert( JSON.stringify( ret ) );
//         } else {
//             alert( JSON.stringify( err ) );
//         }
//     });
//
//     var arr = document.getElementById("Sort-Sort").getElementsByTagName("li");
//     for (var i = 0; i < arr.length; i++){
//         var a = arr[i];
//         // alert(arr[i].innerHTML)
//
//         a.style.borderBottom = "";
//     };
//     sbj.style.borderBottom = "solid 1px #ff7c08"
//
// }
//Sort开始

$(document).ready(function(){
    $("#Sort").click(function(){
        if ($('#address_pan').hasClass('grade-w-roll')) {
            $('#address_pan').removeClass('grade-w-roll');
            $('#school').removeClass('alpha');
        } else {
            $('#address_pan').addClass('grade-w-roll');
            $('#school').addClass('alpha');
        }
    });

    // $(".grade-w-roll").click(function(){
    //     if ($('#address_pan').hasClass('grade-w-roll')) {
    //         $('#address_pan').removeClass('grade-w-roll');
    //     }
    //
    //     if ($('#level_pan').hasClass('grade-w-roll')) {
    //         $('#level_pan').removeClass('grade-w-roll');
    //     }
    //
    //     if ($('#school_type_pan').hasClass('grade-w-roll')) {
    //         $('#school_type_pan').removeClass('grade-w-roll');
    //     }
    //     if ($('#chara_pan').hasClass('grade-w-roll')) {
    //         $('#chara_pan').removeClass('grade-w-roll');
    //     }
    //
    // });
});

$(document).ready(function(){
    $("#SchoolType").click(function(){
        if ($('#school_type_pan').hasClass('grade-w-roll')) {
            $('#school_type_pan').removeClass('grade-w-roll');
            $('#school').removeClass('alpha');
        } else {
            $('#school_type_pan').addClass('grade-w-roll');
            $('#school').addClass('alpha');
        }
    });
});

$(document).ready(function(){
    $("#Level").click(function(){
        if ($('#level_pan').hasClass('grade-w-roll')) {
            $('#level_pan').removeClass('grade-w-roll');
            $('#school').removeClass('alpha');
        } else {
            $('#level_pan').addClass('grade-w-roll');
            $('#school').addClass('alpha');
        }
    });
});

$(document).ready(function(){
    $("#Chara").click(function(){
        if ($('#chara_pan').hasClass('grade-w-roll')) {
            $('#chara_pan').removeClass('grade-w-roll');
            $('#school').removeClass('alpha');
        } else {
            $('#chara_pan').addClass('grade-w-roll');
            $('#school').addClass('alpha');
        }
    });
});
//判断页面是否有弹出
// sort
$(document).ready(function(){
    $("#Sort").click(function(){
        if ($('#school_type_pan').hasClass('grade-w-roll')){
            $('#school_type_pan').removeClass('grade-w-roll');
        };
    });
});

$(document).ready(function(){
    $("#Sort").click(function(){
        if ($('#level_pan').hasClass('grade-w-roll')){
            $('#level_pan').removeClass('grade-w-roll');
        };
    });
});

$(document).ready(function(){
    $("#Sort").click(function(){
        if ($('#chara_pan').hasClass('grade-w-roll')){
            $('#chara_pan').removeClass('grade-w-roll');
        };
    });
});
// end sort

// SchoolType
$(document).ready(function(){
    $("#SchoolType").click(function(){
        if ($('#address_pan').hasClass('grade-w-roll')) {
            $('#address_pan').removeClass('grade-w-roll');
        }
    });
});

$(document).ready(function(){
    $("#SchoolType").click(function(){
        if ($('#level_pan').hasClass('grade-w-roll')) {
            $('#level_pan').removeClass('grade-w-roll');
        }
    });
});

$(document).ready(function(){
    $("#SchoolType").click(function(){
        if ($('#chara_pan').hasClass('grade-w-roll')) {
            $('#chara_pan').removeClass('grade-w-roll');
        }
    });
});

//end SchoolType

// Level
$(document).ready(function(){
    $("#Level").click(function(){
        if ($('#address_pan').hasClass('grade-w-roll')) {
            $('#address_pan').removeClass('grade-w-roll');
        }
    });
});

$(document).ready(function(){
    $("#Level").click(function(){
        if ($('#school_type_pan').hasClass('grade-w-roll')) {
            $('#school_type_pan').removeClass('grade-w-roll');
        }
    });
});

$(document).ready(function(){
    $("#Level").click(function(){
        if ($('#chara_pan').hasClass('grade-w-roll')) {
            $('#chara_pan').removeClass('grade-w-roll');
        }
    });
});

// end Level

// Chara
$(document).ready(function(){
    $("#Chara").click(function(){
        if ($('#address_pan').hasClass('grade-w-roll')) {
            $('#address_pan').removeClass('grade-w-roll');
        }
    });
});

$(document).ready(function(){
    $("#Chara").click(function(){
        if ($('#school_type_pan').hasClass('grade-w-roll')) {
            $('#school_type_pan').removeClass('grade-w-roll');
        }
    });
});

$(document).ready(function(){
    $("#Chara").click(function(){
        if ($('#level_pan').hasClass('grade-w-roll')) {
            $('#level_pan').removeClass('grade-w-roll');
        }
    });
});

// end Chora
$(document).ready(function(){

});

$(document).ready(function(){
    $("#address_pan").click(function(){
        if ($('#address_pan').hasClass('grade-w-roll')) {
            $('#address_pan').removeClass('grade-w-roll');
            $('#school').removeClass('alpha');
        }
    });
});

$(document).ready(function(){
    $("#school_type_pan").click(function(){
        if ($('#school_type_pan').hasClass('grade-w-roll')) {
            $('#school_type_pan').removeClass('grade-w-roll');
            $('#school').removeClass('alpha');
        }
    });
});

$(document).ready(function(){
    $("#level_pan").click(function(){
        if ($('#level_pan').hasClass('grade-w-roll')) {
            $('#level_pan').removeClass('grade-w-roll');
            $('#school').removeClass('alpha');
        }
    });
});

$(document).ready(function(){
    $("#chara_pan").click(function(){
        if ($('#chara_pan').hasClass('grade-w-roll')) {
            $('#chara_pan').removeClass('grade-w-roll');
            $('#school').removeClass('alpha');
        }
    });
});



function SortsFuc(sbj){
    var arr = document.getElementById("Sort-Sort").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.borderBottom = "";
    };
    sbj.style.borderBottom = "solid 1px #ff7c08"
}
