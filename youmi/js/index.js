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