$(function(){

	//导航下拉菜单显示
	$("#topTxt4").hover(function(){
		$(this).find("#topNavHide").show();
	},function(){
		$(this).find("#topNavHide").hide();
	});

	//邮箱/手机注册选项卡
	$("#secEmail").click(function(){
		$(this).removeClass("secOn");
		$(this).parent().find("#secPhone").removeClass("secOn");
		$(this).addClass("secOn");
		$(this).parent().parent().parent().find("#regFormEmail").show();
		$(this).parent().parent().parent().find("#regFormPhone").hide();
	});

	$("#secPhone").click(function(){
		$(this).removeClass("secOn");
		$(this).parent().find("#secEmail").removeClass("secOn");
		$(this).addClass("secOn");
		$(this).parent().parent().parent().find("#regFormEmail").hide();
		$(this).parent().parent().parent().find("#regFormPhone").show();
	});

});