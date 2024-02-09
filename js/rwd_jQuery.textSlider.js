/**
 * @author feiwen
 */
(function ($) {
    $.fn.textSlider = function (settings) {
        settings = jQuery.extend({
            speed : "normal",
            line : 1,
            timer : 5000
        }, settings);
        return this.each(function () {
            $.fn.textSlider.scllor($(this), settings);
        });
    };
    $.fn.textSlider.scllor = function ($this, settings) {
        //alert($this.html());
        var ul = $("ul:eq(0)", $this);
        var timerID;
        var li = ul.children();
        var _btnUp=$(".up:eq(0)", $this)
        var _btnDown=$(".down:eq(0)", $this)
        var liHight=$(li[0]).height();
        var upHeight=0-settings.line*liHight;//皛曉�閧�擃睃漲嚗�
        $(window).resize(function () {
            //RWD
            liHight=$(li[0]).height();
            upHeight=0-settings.line*liHight;
        });
        var scrollUp=function () {
            $(window).resize(function () {
                //RWD
                liHight=$(li[0]).height();
                upHeight=0-settings.line*liHight;
            });
            _btnUp.unbind("click",scrollUp);
            ul.animate({marginTop: upHeight}, settings.speed,function () {
                for (i=0; i<settings.line; i++) {
                     //$(li[i]).appendTo(ul);
                     ul.find("li:first").appendTo(ul);
                    // alert(ul.html());
                }
                   ul.css({marginTop:0});
                _btnUp.bind("click",scrollUp); //Shawphy:蝏穃�𡁜�睲�𦠜�厰�閧�暺墧�𠹺�衤辣
            });
        };
        var scrollDown=function () {
            _btnDown.unbind("click",scrollDown);
            ul.css({marginTop:upHeight});
            for (i=0; i<settings.line; i++) {
                ul.find("li:last").prependTo(ul);
            }
            ul.animate({marginTop:0}, settings.speed, function () {
                _btnDown.bind("click",scrollDown); //Shawphy:蝏穃�𡁜�睲�𦠜�厰�閧�暺墧�𠹺�衤辣
            });
        };
        var autoPlay=function () {
            timerID = window.setInterval(scrollUp,settings.timer);
            //alert(settings.timer);
        };
        var autoStop = function () {
            window.clearInterval(timerID);
        };
        //鈭衤辣蝬�摰�
        ul.hover(autoStop,autoPlay).mouseout();
        _btnUp.css("cursor","pointer").click(scrollUp);
        _btnUp.hover(autoStop,autoPlay);
        _btnDown.css("cursor","pointer").click(scrollDown);
        _btnDown.hover(autoStop,autoPlay)
        document.addEventListener('visibilitychange', function () {
            var isHidden = document.hidden;
            // 憒���𣈯��𢒰�糓�黸��讐��页���蹱麱�𦦵�见��
            // 憒���𣈯��𢒰�糓憿舐內���页���蹱偘�𦆮蝔见��
            if (isHidden) {
                window.clearInterval(timerID);
            } else {
                timerID = window.setInterval(scrollUp,settings.timer);
            }
        });
    };
})(jQuery);
