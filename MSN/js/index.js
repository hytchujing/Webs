$(function(){

	//head菜单----首页
	$(".s1").hover(function(){
		$(this).find(".headCenA").css("color","#fff");
	},function(){
		$(this).find(".headCenA").css("color","");
	});
	//head菜单----首页  end----


	//幻灯片
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

	//幻灯片  end
	

	//幻灯片右边subject
	$(".subPic").hover(function(){
		$(this).parent().find(".opacityA").css("color","#FF6600");
	},function(){
		$(this).parent().find(".opacityA").css("color","");
	});

	$(".opacityA").hover(function(){
		$(this).css("color","#FF6600");
	},function(){
		$(this).css("color","");
	});
	//幻灯片右边subject  end

	//hotRecPic 每日精选
	$("#hotRimg").hover(function(){
		$(this).css({
			"width":"175px",
			"height":"222px",
			"border":"8px solid #FF6600"
		});
	},function(){
		$(this).css({
			"width":"",
			"height":"",
			"border":""
		});
	});

	//hotRecPic 每日精选  end 


	//主内容  大图
	$(".rimWrap").hover(function(){
		$(this).find(".rimWarpPic").css({
			"width":"256px",
			"height":"347px",
			"border":"8px solid #FF6600"
		});
	},function(){
		$(this).find(".rimWarpPic").css({
			"width":"",
			"height":"",
			"border":""
		});
	});

	$(".celeWram").hover(function(){
		$(this).find(".celePic").css({
			"width":"256px",
			"height":"153px",
			"border":"8px solid #FF6600"
		});
	},function(){
		$(this).find(".celePic").css({
			"width":"",
			"height":"",
			"border":""
		});
	});

	//主内容  大图   end

	//奢尚图库 图片链接字gall_opaShow
	$(".gall_opaShow").hover(function(){
		//alert("123");
		$(this).find(".opacitySpec").css("display","block");

	},function(){
		$(this).find(".opacitySpec").css("display","");
	});

	//奢尚图库 图片链接字  end

	//subNav中，随着鼠标的移入和移出，介绍的显示和隐藏  tipBtA1
	$(".subNavLi").hover(function(){
		$(this).find("div").css("display","block");		
	},function(){
		$(this).find("div").css("display","none");		
	});

	$(".tipBtLi").hover(function(){
		$(this).find("div").css("display","block");
	},function(){
		$(this).find("div").css("display","none");
	});


});


var intervalId;
var curIndex = 2;
//显示图片
function showFlashImage(){

	showFlashImageDes();

	//取出当前点击的小控制块对应的图片地址
	var curImage = $("#controlSpan"+curIndex).attr("imgurl");	
	$("#flash").css("background-image",'url("css/images/flash'+ curIndex +'.jpg")');
	$(".controlArea").removeClass("controlSpan");
	$("#controlSpan"+curIndex).addClass("controlSpan");
	curIndex++;
	if(curIndex == 5){ //4张图片，从2开始直到5
		curIndex = 1;
	}
}

//显示图片对应的介绍
function showFlashImageDes(){
	//取出当前图片的介绍
	var curImageDes = $("#controlSpan"+curIndex).attr("imgDes");
	$("#flash_opacity").html('<a class="flashOpaA" href="#">'+ curImageDes +'</a>');
}
	
	

