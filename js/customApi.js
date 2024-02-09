$(function () {
    var type = getCustomTypeByCookie();
    if (type !== null && type != ''  && typeof(type) != "undefined") {
        var customTopHeadline = getCustomData('topHeadline', type);
        var customChannelsOrder = getCustomData('channelsOrder', type);
        changeTopHeadline(customTopHeadline);
        changeChannels(customChannelsOrder);
    }
});

function getCustomTypeByCookie()
{
    var type = getCookie('customType');
    if (type === null || type == '' || typeof(type) == "undefined") {
        // var date = new Date();
        // date.setTime(date.getTime() + 3*60*1000); //3 minutes
        // document.cookie = 'customType=2; expires=' + date.toUTCString();
    }
    return type;
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getCustomData(file, type)
{
    var customData = '';
    $.ajax({
        url: 'customData/' + file+ '/' + type,
        type: 'post',
        async: false,
        success: function (data) {
            customData = data;
        }
    });
    return customData;
}

function changeTopHeadline(data)
{
    if (data != '') {
        var length = data.length;
        for (var i = 0; i < length; i++) {
            var $custom = $('#custom' + (i + 1));
            if ($custom.length > 0) {
                $custom.attr({
                    'href': data[i]['link'],
                    'data-desc': 'P:' + ($custom.index()) + ':' + data[i]['title']
                });
                $custom.find('figure').find('img').attr('src', data[i]['photoL']);
                var html = data[i]['title_html'];
                if (data[i]['video'] === 1) {
                    html += '<i class="v_icon"><img src="assets/images/video01.svg"></i>';
                }
                $custom.find('p').html(html);
            }
        }
    }
}

function changeChannels(data)
{
    if (data != '') {
        var html = '';
        data.forEach(function (item) {
            html += $('.' + item).prop("outerHTML");
        });

        $('.channel').html(html);
    }
}
