$(function() {
	// header 首页按钮
	$('#toHome').click(function() {
		$('#indexiframe').attr('src', 'page/statics.jsp');
	});
	// 日期显示
	var now = new Date();
	$('#showDate i').html(now.format("yyyy年MM月dd日"));

	// 菜单栏，切换展示按钮
	$('#toggle').click(function() {
		$(this).children('span').toggleClass('icon-fold', 'icon-unfold');
		$('#nav1').toggleClass('closed');
	});
	$('#toggle2').click(function() {
		$('#nav2').hide();
	});

	// 一级菜单单击，展示二级菜单
	$('ul.according > li').click(function() {
		$(this).children('ul').toggle();

		if ($(this).children('ul').css('display') == "none") {
			$(this).children('span').removeClass('icon-arrow-down');
			$(this).children('span').addClass('icon-arrow-right');
		} else {
			$(this).children('span').removeClass('icon-arrow-right');
			$(this).children('span').addClass('icon-arrow-down');
		}
	});

	// 二级菜单单击，展示收纳子菜单栏
	$('ul.according > li > ul > li').click(function() {
		var pageto = $(this).attr('pageto');
		var data_toggle= $(this).attr('data-toggle');
		if (pageto) {
			$('#indexiframe').attr('src', pageto);
			$('#nav2').hide();
		}

		if(data_toggle){
			$('#nav2 section').hide();
			$('#navsec-'+data_toggle).show();
			$('#nav2').show();
		}

		return false;
	});

	$('#nav2 li').click(function(){
		var pageto = $(this).attr('pageto');
		if (pageto) {
			$('#indexiframe').attr('src', pageto);
			$('#nav2').hide();
		}
		return false;
	});
});

// 注销
function logout(e) {
	if (confirm("确实要退出吗？")) {
		window.location.href = '../logout';
	}
}

//遮罩的高度
function setDaskHeight() {
	$(".shadowBg").css('position','absolute').css('left',0).css('right',0).css('top',0).css('bottom',0);
}

//设置弹窗的宽度
function setPopWidth() {
	var iframe = $("#popIframe");
	iframe.css("width", $("#popIframe").contents().find(".outer-box").width() + 2);

}
//设置弹窗的位置
function setPopPos() {
	var iframe = $("#popIframe"),
		width = iframe.contents().find(".outer-box").width(),
		height = iframe.contents().find(".outer-box").height();
	var topH = ($(window).height() - height) / 2 + $(window).scrollTop();
	var leftW = ($(window).width() - width) / 2;
	if (topH < 0) {
		iframe.css({"top": "5px","left": leftW + "px"});
	} else {
		iframe.animate({"top": topH + "px"},150).css({"left": leftW + "px"});
	}

	setIframeHeight('popIframe');
}

//设置弹窗的高度
function setIframeHeight(obj) {
	var iframe=$("#"+obj);
	try {
		var cntHeight = 0;
		if(iframe.contents().find(".asideR-cont")[0]){
			cntHeight = iframe.contents().find(".asideR-cont")[0].scrollHeight;
			iframe.height(cntHeight+"px");
		}
		if(iframe.contents().find(".outer-box")[0]){
			cntHeight = iframe.contents().find(".outer-box")[0].scrollHeight+35;
			iframe.height(cntHeight+"px");
		}
		else{
			try {
				iframe = document.getElementById(obj);
				var bHeight = iframe.contentWindow.document.body.scrollHeight;
				var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
				var height = Math.max(bHeight, dHeight);
				//iframe.height = height;
				iframe.style.height=height+"px";


			} catch (e) {}
		}
	} catch (e) {}
}

function resetIframe100(){
	$('#indexiframe').removeAttr('style');
	if($('#indexiframe').attr('height') != '100%'){
		$('#indexiframe').attr('height','100%');
	}
}

window.setInterval(resetIframe100,500);
















//
Date.prototype.format = function(format) {
	var o = {
		"M+" : this.getMonth() + 1, // month
		"d+" : this.getDate(), // day
		"h+" : this.getHours(), // hour
		"m+" : this.getMinutes(), // minute
		"s+" : this.getSeconds(), // second
		"q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
		"S" : this.getMilliseconds()
	// millisecond
};

	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	}

	for ( var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
					: ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
};
