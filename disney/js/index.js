$(function(){

	$(".c").hover(function(){
		$(this).find(".my_search_down").show();
	},function(){
		$(this).find(".my_search_down").hide();
	});

	$(".subnav_ul li").hover(function(){
		$(this).find(".subnav_down").show();		
	},function(){
		$(this).find(".subnav_down").hide();
	});

	$(".tab1_li a").hover(function(){
		$(this).find(".tab_li_img").hide();
		$(this).find(".tab_li_img_0n").show();
	},function(){
		$(this).find(".tab_li_img").show();
		$(this).find(".tab_li_img_0n").hide();
	});

	tabPrevNext();

});

function tabPrevNext(){

	$(".next").click(function(){
		var Left = Math.floor($(".tab1_ul").attr("left")) ;		
		Left = Left-170;		
		$(".tab1_ul").css("left",''+ Left +'px');		
		$(".tab1_ul").attr("left",''+ Left +'');

	});
	
	$(".prev").click(function(){
		var Left = Math.floor($(".tab1_ul").attr("left")) ;			
		Left = Left+170;		
		$(".tab1_ul").css("left",''+ Left +'px');		
		$(".tab1_ul").attr("left",''+ Left +'');
	});

}

