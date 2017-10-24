
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
//放大镜效果
    $('.jqzoom').hover(function () {
        $('.zoomWrapper').show();
    }, function () {
        $('.zoomWrapper').hide();
    });
    $('.jqzoom').jqzoom({
        zoomType: 'standard',
        lens: true,
        preloadImages: false,
        alwaysOn: true
    });

//查看大图
    $('#jnProitem ul.imgList li a').bind('click', function () {
        var imgSrc = $(this).find('img').attr('src');
        var i = imgSrc.lastIndexOf('.');
        var unit = imgSrc.substring(i);
        imgSrc = imgSrc.substring(0, i);
        var imgSrc_big = imgSrc + '_big' + unit;
        $('#hdpic').find('a').attr('href', imgSrc_big);
    });

//Tab菜单
    var $div_li = $('div.tab_menu ul li');
    $div_li.click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        var index = $div_li.index(this);
        $('div.tab_box>div').eq(index).show().siblings().hide();
    }).hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });

//选择尺码	
    $('.size li').click(function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        $(this).parent('ul').siblings('strong').text($(this).text());
    });

//	计算金额
    var price = $('.promotion').html();
    var storage= parseInt($('.storage').html());
    $('#num').find('input').change(function (e) {
        var num = $(this).val();

        if (num <= 1) {
            $(this).val(1);
            num = 1;
        }

        else if (num > storage) {
            alert('您的输入已超出库存');
            $(this).val(storage);
            num =storage;
        }

        var amount = num * price;
        $('#sum').html(amount);

    }).change();

//评分效果
    $('#jnDetails').find('i').click(function () {
        $(this).css('color', '#FFA500').prevAll().css('color', '#FFA500').end().nextAll().css('color', '#ccc');
    });

//颜色选择
    $('.color img').click(function () {
        $(this).css('border', '1px solid red').siblings().css('border', '1px solid #999');
        var imgSrc = $(this).attr('src');
        var i = imgSrc.lastIndexOf('.');
        var unit = imgSrc.substring(i);
        imgSrc = imgSrc.substring(0, i);
        var imgSrc_small = imgSrc + unit;
        var imgSrc_big = imgSrc + '_big' + unit;
        $('.small').attr('src', imgSrc_small);
        $('#hdpic a').attr('href', imgSrc_big);
        var title = $(this).attr('title');
        $('.thickbox').attr('title', title);
        $('.imgList li').eq(0).find('img').attr('src', imgSrc_small).parent('a').attr('rel', "{gallery: 'gal1', smallimage:'" + imgSrc_small + "',largeimage:'" + imgSrc_big + "'}").click();

    });

});