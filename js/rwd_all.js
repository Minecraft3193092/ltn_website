// view control
$(function(){
    //�湧�𦠜��詨鱓�鍂
    $('.nav_bar').click(function(){
        $('.mobileMenu').addClass('VB').animate({right: '0px'},100);
        $('body').addClass('opacity');
        $('.maskMM').addClass('VB');
    });
    $('.maskMM, .close').click(function(){
        $('.mobileMenu').removeClass('VB');
        $('.maskMM').removeClass('VB');
        $('body').removeClass('opacity');
    });

    //銵��閗�萘蔭_search 撅閖��
    $('.ltnSearch').click(function(){
        $('.M_LTN_Search').fadeIn(300);
        $('body').css('overflow','hidden');
        //��㚚�桃蔗��touchmove 嚗䔶蝙�桃蔗敺峕䲮��隞嗡�滚虾皛穃��
        $('.M_LTN_Search').on("touchmove", function(e) {
            return false;
        });
    });
    //銵��閗�萘蔭_search �黸���
    $('.mobileMask, .searchltn_close').not('form,input').click(function(){
        $('.M_LTN_Search').fadeOut(150);
        $('body').removeAttr('style');
    })

    //獢峕�毺�Ósearch 撅閖��
    $('.iconSearch').click(function(){
        $bar = $('.icon').find('.ltnsch_show');
        $bar.fadeIn(100);
        $(".ltnsch_show form input").animate({width:'230px'},300).trigger("focus");
        $bar.siblings("a").hide();
    });
    //獢峕�毺�Ósearch ��𣈯��
    $('.ltnsch_show form input').blur(function(){
        $bar = $('.icon').find('.ltnsch_show');
        $bar.fadeOut(100);
        $('.iconSearch').show();
        $bar.siblings("a").show();
    });

    evtInit('.evtUp_box', '.evt'); //��滩�撠��𣊁AB
    evtInit('.evtDown_box', '.evt'); //��滩�撠��𣊁AB

    setTimeout(function(){

        if(jQuery.browser.mobile){return;}
        move_sidebar_space();

    }, 300);
});

// ��滩�撠��𣊁AB JS
function evtInit(tabEvt, evt) {
    var $evt = $(evt);
    var $tab = $(tabEvt).find('.evtTab');
    if ($tab.length >= 2) {
        $tab.click(evtChange).hover(evtChange);	  // tab蝬�摰帋�衤辣

        var showTab = 0;						  // 憿舐內��鞱身tab���批捆(��庆vtTabConfig.method���㺿�鍂random�䲮撘誯＊蝷�)
        var evtTabConfig = {'method' : 'random'}; // 閮剖�関ab憿舐內�䲮撘讐�氳andom

        if ('object' == typeof evtTabConfig && 'random' == evtTabConfig.method) {
            showTab = parseInt($tab.length * Math.random());
        }
        $tab.eq(showTab).click();
        $tab.show(); // 憿舐內tab
        $('.tabs_bg').show();
    } else {
        $evt.first().show(); //瘝㦙ab�蘨show蝚砌�蝯�(銝漤＊蝷演ab)
    }
}

function evtChange() {
    var tab = $('.evtDown_box'), evt = $('.evtDown_box .evt');
    if ($(this).parents('.evtUp_box').length > 0) {
        tab = $('.evtUp_box'); //銝𦠜䲮��滩�撠���
        evt = $('.evtUp_box .evt');
    }
    evt.hide();
    tab.find('.evtTab').removeClass('active');
    var n = $(this).attr('data-col');
    $('.e' + n).show();
    $('.t' + n).addClass('active');
}

// �眏userAgent�ế�𪃾�糓�炏�箸�𧢲�鋆萘蔭
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
var cookies_m = new cookies_admin_mode('m.ltn.com.tw');
function cookies_admin_mode(mobile_key){
    this.write = function (value){
        document.cookie=mobile_key+'='+value+';domain=.ltn.com.tw;path=/';
    };
    this.read = function(){
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        var res;
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = parts.shift();
            var cookie = parts.join('=');
            if (mobile_key && mobile_key === name) {
                res = cookie;
                break;
            }
        }
        return res;
    };
    this.isPC = function(){
        // 甇文ế�𪃾���拍鍂�䲰��兴WD�����𢒰
        return $(window).width() > 1100;
    }
}

function ltncookies_news(key, value, time_sec) {
    var fn = ltncookies || function () {
    };
    fn(key, value, time_sec);
}

/**
 * 撱��𠹺��彍
 * @param min
 * @param max
 * @returns {number}
 * @constructor
 */
function ADRandCeil(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min - 1);
}

/**
 * �𢰧�港�𧢲䲮��嗵蒾憭芸��, ��蝘餃�訫𢰧�游�憛𠰴縧憛急遛
 */
function move_sidebar_space() {

    var obj1129 = $('.contentAll');

    var s2a = {
        'height': function(){
            var h = $('div.contentRight').height();
            if(obj1129.length==1){
                h += obj1129.height();
            }
            return h;
        },
        'offset': function(){
            if(obj1129.length==1){
                return obj1129.offset();
            }else{
                return $('div.contentRight').offset();
            }
        }
    };
    var s1 = new scorllobj("div.contentRight", "#right_blake");
    var s2 = new scorllobj(s2a, "#door");
    //var s2 = new scorllobj(".content", "#door");

    $(window).on('scroll.sidebar', function () {
        var winScroll = $(window).scrollTop(),
            windowsH = $(window).height();
        s1.run(winScroll, windowsH);
        s2.run(winScroll, windowsH);
    });

    function scorllobj(obj_left, obj_right) {

        var obj = {
            left: (typeof(obj_left)=='string') ? $(obj_left) : obj_left,
            right: $(obj_right)
        };

        var actType = '';

        this.run = function (winScroll, windowsH) {

            var containerH = obj.left.height(),
                primaryH = obj.left.height(),
                sidebarH = obj.right.height(),
                beginPos = obj.left.offset().top;

            if (sidebarH > primaryH) { return; }
            var runType = 'C';
            var pH = sidebarH + beginPos;
            if (pH > windowsH) {
                runType = 'A';
            } else if (pH < windowsH) {
                runType = 'B';
            }

            if (runType == 'A') {
                if (winScroll + windowsH > sidebarH + beginPos && winScroll + windowsH < primaryH + beginPos) {
                    if (actType == 'A1') { return; }
                    var fix = winScroll + windowsH - (beginPos + sidebarH);
                    obj.right.attr("style", "position:fixed; bottom:0px;");
                    actType = 'A1';
                }
                if (winScroll + windowsH > sidebarH + beginPos && winScroll + windowsH >= primaryH + beginPos) {
                    if (actType == 'A2') { return; }
                    var fix = primaryH - sidebarH;
                    obj.right.attr("style", "position:relative; top:" + fix + "px;")
                    actType = 'A2';
                }
                if (winScroll + windowsH < sidebarH + beginPos) {
                    if (actType == 'A3') { return; }
                    obj.right.attr("style", "position:relative; bottom:auto;")
                    actType = 'A3';
                }
            }

            if (runType == 'B') {
                if (winScroll > beginPos && winScroll + sidebarH < beginPos + primaryH) {
                    if (actType == 'B1') { return; }
                    var fix = winScroll - beginPos;
                    obj.right.attr("style", "position:fixed; top:0px;")
                    actType = 'B1';
                }
                if (winScroll > beginPos && winScroll + sidebarH >= beginPos + primaryH) {
                    if (actType == 'B2') { return; }
                    var fix = primaryH - sidebarH;
                    obj.right.attr("style", "position:relative; top:" + fix + "px;")
                    actType = 'B2';
                }
                if (winScroll <= beginPos) {
                    if (actType == 'B3') { return; }
                    obj.right.attr("style", "position:relative; bottom:auto;")
                    actType = 'B3';
                }
            }
        }
    }
}

// ��閧�蝮桀�硋�𣇉��帖��𡝗遛��� ��见��
$(function () {
    $(".listS_h").find("img").one("load", function () {
        listS_w($(this));
    }).each(function () {
        if (this.complete) {
            $(this).trigger("load");
        }
    });
    $(window).on("resize", function () {
        setTimeout(function () {
            $(".listS_w").addClass('listS_h').removeClass('listS_w');
            $(".listS_h").find("img").each(function () {
                listS_w($(this));
            });
        }, 100);
    });
});
function listS_w($o){
    var $pr = $o.parent('.listS_h');
    // 撠𡁏𧊋憿舐內����𣇉���滩�閧�
    if ($o.is(':hidden')) { return; }
    // ��硋�堒�𡝗�撖祇��
    var div_width = $pr.outerWidth();
    var div_height = ($pr.outerHeight() > 10) ? $pr.outerHeight() : div_width * 2 / 3;
    if ($o.height() / $o.width() > div_height / div_width) {
        $o.css({
            'height': 'auto',
            'width': '100%',
            'marginLeft': 0
        });
        return;
    }
    // 皜��膄璈怠�𡝗見撘�
    $o.css({
        'height': div_height,
        'width': 'auto',
        'max-width': 'unset'
    });
    // ��硋�堒�𣇉��祝摨血�𡃏���𦯀�滨宏
    var p_width = $o.width();
    var	p_margin_left = p_width / 2 - div_width / 2;
    $o.css({
        'marginLeft': -p_margin_left
    });
    $pr.addClass('listS_w').removeClass('listS_h');
}
// ��閧�蝮桀�硋�𣇉��帖��𡝗遛��� 蝯鞉��
