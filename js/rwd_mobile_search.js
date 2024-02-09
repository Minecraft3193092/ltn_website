var tempWidth;

$(function() {
    tempWidth = $(window).width();
    //����
    if (typeof $.datepicker === 'object') {
        $(".datepicker").datepicker({
            dateFormat: 'yy-mm-dd',//����𡑒撓�交�憿舐內�聢撘�
            showOtherMonths: true,
            selectOtherMonths: true,
            inline: true,
            showButtonPanel: true,
            currentText: "",
            closeText: "",//close�����
            dayNamesMin: ["S","M","T","W","T","F","S"],//��������罸＊蝷箸䲮撘�
            monthNames: ["1��� ��","2��� ��","3��� ��","4��� ��","5��� ��","6��� ��",
                "7��� ��","8��� ��","9��� ��","10��� ��","11��� ��","12��� ��"], // ���遢
            beforeShow: function (input, inst) {//憿舐內����敺�
                var w = $(window).width();
                var pickerLeft = (w-290)/2;
                setTimeout(function () {
                    if (inst.id == 'start_time_m' || inst.id == 'end_time_m') {
                        inst.dpDiv.css({
                            'left': pickerLeft + 'px',
                            'top': 120 + 'px'//175
                        });
                    }
                    $('#closex,#ui-datepicker-div:before').click(function(){
                        $('#ui-datepicker-div').fadeOut(300);
                    });
                    $('#ui-datepicker-div').css('z-index',4000);
                    // $("#ui-datepicker-div").before('<div class="da-mask"></div>');
                    $(".maskMM").appendTo($("#ui-datepicker-div"));
                }, 0);
            },

            onChangeMonthYear: function (input, inst) {//�㺿霈𦠜𠯫����
                setTimeout(function () {
                    $('#closex,#ui-datepicker-div:before').click(function(){
                        $('#ui-datepicker-div').fadeOut(300);
                    });
                }, 0);
            },

            onSelect: function(dateText, inst) {
                var hide_input_name = $('#' + inst.id).attr('name');

                $('#' + hide_input_name).val(dateText);
            },
            onClose: function (input, inst) {//�㺿霈𦠜𠯫����
                var name = $(this).attr('name');
                var date = $(this).val();
                $("input[name='" + name + "']").val(date);
                setTimeout(function () {
                    $('.da-mask').hide();
                }, 0);
            }
        });
    } else {
        console.log('=== 隢贝�匧�卡atepicker ===');
    }

    //��𧢲�笔�屸𤓖�衣���𨅯�𧢲�雿滚�峕��凒�鰵
    $('#ltnRWD').find("input[name='keyword']").change(function(){
        var keyword = $(this).val();
        $("input[name='keyword']").val(keyword);
    });
});
var search_for_all_news = function()
{
    var keyword = $('#rwd_qs').val();

    if (!checkKeyword(keyword)) {
        return false;
    }

    var start = $('#start_time_m').val();
    var end = $('#end_time_m').val();

    if (checkTime(start, end)) {
        return true;
    } else {
        return false;
    }
}

function checkKeyword(keyword)
{
    if (keyword.trim() == '') {
        alert('隢贝撓�仿�𣈯枤摮�');
        return false;
    }

    var reg = /\s+/g;
    keyword = keyword.trim().replace(reg,' ');

    if (keyword.length > 50) {
        alert('��𣈯枤摮埈彍�𡡞𩑈');
        return false;
    }

    var res = keyword.split(" ");

    for (var key in res) {
        if (res[key].length < 2) {
            alert('瘥誩�钅�𣈯枤摮𡑒�贝��𤾸�拙�见��');
            return false;
        }
    }

    if (res.length > 3) {
        alert('隢见嚉頞��𦒘�匧�钅�𣈯枤摮�');
        return false;
    }
    return true;
}

function checkTime(start, end) {
    if (start.trim() == '' && end.trim() == '') {
        return true;
    }
    //憒���𨀣糓撅閖�讠��见ế�𪃾�糓�炏��厰�见�𧢲����/蝯鞉������
    if (start.trim() == '') {
        alert('隢钅�豢��䰻閰Ｘ����');
        return false;
    }

    if (end.trim() == '') {
        alert('隢钅�豢��䰻閰Ｘ����');
        return false;
    }

    var start_time = new Date(start).getTime();
    var end_time = new Date(end).getTime();

    if (start_time > end_time) {
        alert('����枏���𤘪�㕑炊');
        return false;
    }

    if (end_time > start_time) {
        if ((end_time - start_time) / 86400000 > 91) {
            alert('�豢�����𤘪��𩑈銝匧�𧢲��');
            return false;
        }
    }
    return true;
}
$(window).resize(function(){
    if (($(window).width() > 1100 && tempWidth <= 1100) || ($(window).width() <= 1100 && tempWidth > 1100) ) {
        $('.M_LTN_Search').css('display', 'none');
        $('#ui-datepicker-div').css('display', 'none');
    }
    tempWidth = $(window).width();
});
