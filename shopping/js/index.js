$(function () {
    //搜索框提示
    $('#inputSearch').focus(function () {
        $(this).addClass("focus");
        if ($(this).val() == this.defaultValue) {
            $(this).val("");
        }
    }).blur(function () {
        $(this).removeClass("focus");
        if ($(this).val() == "") {
            $(this).val(this.defaultValue);
        }
    }).keyup(function (e) {
        if (e.which == 13) {
            alert('您按了回车键提交');
        }
    });

    //导航菜单
    $('#nav li').hover(function () {
        $(this).find('.subNav').show();
    }, function () {
        $(this).find('.subNav').hide();
    });

    //	热销提示
    $('.jnCatainfo .promoted').append('<span class="hot">hot</span>');

    //	轮播图
    var $imgrolls = $('#jnImageroll div a');
    var len = $imgrolls.length;
    var index = 0;
    var timer = null;
    $imgrolls.mouseover(function () {
        var index = $imgrolls.index(this);
        showImg(index);
    }).eq(0).mouseover();

    function showImg(index) {
        var nowhref = $imgrolls.eq(index).attr('href');
        $('#JS_imgWrap').attr('href', nowhref).find('img').eq(index).stop(true, true).fadeIn().siblings().fadeOut();
        $imgrolls.css('opacity', '0.7').children('i').remove().end().eq(index).css('opacity', 1).append('<i class="fa fa-caret-up" aria-hidden="true"></i>');
    };
    $('#JS_imgWrap').hover(function () {
        if (timer) {
            clearInterval(timer);
        }
    }, function () {
        timer = setInterval(function () {
            showImg(index);
            index++;
            if (index == len) {
                index = 0;
            }
        }, 3000);
    }).trigger('mouseleave');

    //跟随鼠标移动的提示信息
    var x = 10;
    var y = 20;
    var newtitle = '';
    $('a.tooltip').mouseover(function (e) {
        newtitle = this.title;
        this.title = '';
        $('body').append('<div id="tooltip">' + newtitle + '</div>');
        $('#tooltip').css({
            'left': (e.pageX + x + 'px'),
            'top': (e.pageY + y + 'px')
        }).show();
    }).mouseout(function () {
        this.title = newtitle;
        $('#tooltip').remove();
    }).mousemove(function (e) {
        $('#tooltip').css({
            'left': (e.pageX + x + 'px'),
            'top': (e.pageY + y + 'px')
        }).show();
    });

    //滚动图片
    $('#jnBrandTab li a').click(function () {
        var index = $('#jnBrandTab li a').index(this);
        $(this).parent().addClass('chos').siblings().removeClass('chos');
        showBlandList(index);
        return false;
    }).eq(0).click();

    function showBlandList(index) {
        var $rollObj = $('#jnBrandList');
        var rollWidth = $rollObj.find('li').outerWidth();
        rollWidth = rollWidth * 4;
        $rollObj.stop(true, false).animate({
            'left': (-rollWidth * index)
        }, 1000)
    }

//图片遮罩效果
    $('#jnBrandList li').each(function (index) {
        var $img_w = $(this).width();
        var $img_h = $(this).height();
        var spanHtml = '<span style="position:absolute;top:0;left:5px;z-index:1;width:' + $img_w + 'px;height:' + $img_h + 'px;" class="imageMask"></span>'
        $(spanHtml).appendTo(this);
    });

})
