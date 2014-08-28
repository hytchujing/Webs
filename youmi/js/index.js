$(function(){
	// 幻灯片
	$(".controlArea").click(function(){
		curIndex = $(this).attr("picIndex");
		showFlashImage();
	});
	
	$("#flash").hover(function(){
		clearInterval(intervalId);
	},function(){
		intervalId = setInterval("showFlashImage()",2000);
	});

	intervalId = setInterval("showFlashImage()",2000);

	// jobs
	$(".jobs_list_img").hover(function(){
		$(this).next().find(".word_tips").show();
	},function(){
		$(this).next().find(".word_tips").hide();
	});
	$(".list_content .content").hover(function(){
		$(this).next().show();
	},function(){
		$(this).next().hide();
	});

	setPositon();
	// light
	lightUp();



});


// 幻灯片
var intervalId;
var curIndex = 2;
//显示图片
function showFlashImage(){
	

	//取出当前点击的小控制块对应的图片地址
	var curImage = $("#controlSpan"+curIndex).attr("imgurl");	
	$("#flash").css("background-image",'url("images/'+ curIndex +'.jpg")');
	$(".controlArea").removeClass("controlSpan");
	$("#controlSpan"+curIndex).addClass("controlSpan");
	curIndex++;
	if(curIndex == 7){ //6张图片，从2开始直到7
		curIndex = 1;
	}
}


function lightUp(){
	
	$(document).on("click","#light", function(){
		
		var isbgwhite = $(this).attr("isBGwhite");
		
		if(isbgwhite == "no")
		{
			$(this).parent().removeClass("works_bg");
			$(this).parent().addClass("works_bg_white");
			$(this).next().find("#chan_span").removeClass("white");
			$(this).next().find("#works_box ul li").removeClass("li_black");
			$(this).next().find("#works_box ul li").addClass("li_white");
			$(this).attr("isBGwhite","yes");
		}
		if(isbgwhite == "yes")
		{
			$(this).parent().removeClass("works_bg_white");
			$(this).parent().addClass("works_bg");
			$(this).next().find("#chan_span").addClass("white");
			$(this).next().find("#works_box ul li").removeClass("li_white");
			$(this).next().find("#works_box ul li").addClass("li_black");
			$(this).attr("isBGwhite","no");
		}
	});

}

//页面滚动时导航位置
function setPositon(){

	$(window).scroll(function(){
		if ($(window).scrollTop()>=900) {
			$(".nav_helper").css({"position": "fixed", "top": "0px", "left": "0px"});
		}else{
			$(".nav_helper").css({"position": "relative"});
		}
		
	});
	
}