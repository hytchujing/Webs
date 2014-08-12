$(function(){
	

	//幻灯片
	$(document).ready(function(){
    $('.flexslider').flexslider({
        directionNav: true,
        pauseOnAction: false
    });
});

	//header
	$("#headShoppingBag").hover(function(){
		$(this).find("#shoppingBag").show();
	},function(){
		$(this).find("#shoppingBag").hide();
	});

	$(".headInfoRUL3Li").hover(function(){
		$(this).css("background-color","#fff");
		$(this).find(".ul3Text").css("color","#CF0101");
		$(this).find(".menuDD").show();
	},function(){
		$(this).css("background-color","");
		$(this).find(".ul3Text").css("color","");
		$(this).find(".menuDD").hide();		
	});


	//菜单
	$(".type_5luxLi").hover(function(){
		$(this).find(".leftmenu").show();
	},function(){
		$(this).find(".leftmenu").hide();
	});

	$(".leftmenuLI").hover(function(){
		$(this).find(".menu_show").show();
	},function(){
		$(this).find(".menu_show").hide();
	});

	//品牌推荐
	$(".sal_navLi").hover(function(){
		$(this).removeClass("sal_navOn");
		$(this).addClass("sal_navOn");
	},function(){
		$(this).removeClass("sal_navOn");
	});


	$(".brand_bg").hover(function(){
		$(this).find(".brand_bg_span").show();
	},function(){
		$(this).find(".brand_bg_span").hide();
	});

	$(".bwcur").hover(function(){
		$(this).find(".bw_bg").hide();
	},function(){
		$(this).find(".bw_bg").show();
	});

	//经典包款
	$(".clbrandg_box").hover(function(){
		$(this).addClass("hyinying");
		$(this).find(".clbrandg_textbg").addClass("hbg");
	},function(){
		$(this).removeClass("hyinying");
		$(this).find(".clbrandg_textbg").removeClass("hbg");
	});

	$(".bank-li").hover(function(){
		$(this).find(".bank-tab-bg").hide();
		var curIndex = $(this).find(".banl-pic").attr("picIndex");			
		$(this).parent().parent().find(".cop-Image").html('<img src="images/'+ curIndex +'ad_board.jpg">');	
	},function(){
		$(this).find(".bank-tab-bg").show();
	});

	
	
    
	
});

