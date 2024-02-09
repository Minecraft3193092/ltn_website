(function($) {
 $.fn.rTabs = function(options) {
  //暺䁅�滚��
  var defaultVal =  {
  btnClass:'.j-tab-nav', /*��厰�閧���蝝鋴lass*/
  conClass:'.j-tab-con', /*�批捆����蝝鋴lass*/
  bind:'hover', /*鈭衤辣���彍 click,hover*/
  animation:'0', /*��閧𧞄�䲮��� left,up,fadein,0 �箇�∪�閧𧞄*/
  speed:300,  /*��閧𧞄�见�閖�笔漲*/
  delay:200, /*Tab撱園�脤�笔漲*/
  auto:false, /*�糓�炏��见�蠘䌊��閖�贝�� true,false*/
  autoSpeed:3000 /*�䌊��閖�贝�屸�笔漲*/
  };
  //�典�霈𢠃��
  var obj = $.extend(defaultVal, options),
  evt = obj.bind,
  btn = $(this).find(obj.btnClass),
  con = $(this).find(obj.conClass),
  anim = obj.animation,
  conWidth = con.width(),
  conHeight = con.height(),
  len = con.children().length,
  sw = len * conWidth,
  sh = len * conHeight,
  i = 0,
  len,t,timer;
  return this.each(function() {
  //�ế�𪃾��閧𧞄�䲮���
  function judgeAnim() {
   var w = i * conWidth,
   h = i * conHeight;
  btn.children().removeClass('current').eq(i).addClass('current');
   switch(anim) {
   case '0':
   con.children().hide().eq(i).show();
   break;
   case 'left':
   con.css( { position:'absolute',width:sw}).children().css( { float:'left',display:'block'}).end().stop().animate( { left:-w},obj.speed);
   break;
   case 'up':
   con.css( { position:'absolute',height:sh}).children().css( { display:'block'}).end().stop().animate( { top:-h},obj.speed);
   break;
   case 'fadein':
   con.children().hide().eq(i).fadeIn();
   break;
   }
  }
  //�ế�𪃾鈭衤辣憿𧼮��
  if(evt == "hover") {
   btn.children().hover(function() {
    var j = $(this).index();
    function s() {
    i = j;
    judgeAnim();
    }
    timer=setTimeout(s,obj.delay);
    }, function() {
     clearTimeout(timer);
    })
   }else {
    btn.children().bind(evt,function() {
     i = $(this).index();
     judgeAnim();
    })
   }
   //�䌊��閖�贝��
   function startRun() {
    t = setInterval(function() {
     i++;
     if(i>=len) {
      switch(anim) {
       case 'left':
       con.stop().css( { left:conWidth});
       break;
       case 'up':
       con.stop().css( { top:conHeight});
      }
      i=0;
     }
     judgeAnim();
    },obj.autoSpeed)
   }
   //憒���𡏭䌊��閖�贝�屸�见���諹矽�鍂�䌊��閖�贝��遆�彍
   if(obj.auto) {
    $(this).hover(function() {
     clearInterval(t);
    },function() {
     startRun();
    })
    startRun();
   }
  })
 }
})(jQuery);
   $(function()  {
    $("#tab").rTabs( {
     bind : 'click',
    });
    $("#tab2").rTabs( {
     bind : 'hover',
    });
    $("#tab3").rTabs( {
     bind : 'hover',
    });
   })
