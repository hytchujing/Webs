$(function(){	//alert("123");	
 	
 	//更换背景图片
	$("#BgLeft").click(function(){
		BgChangeLeft();//更换上一张背景
	});
	$("#BgRight").click(function(){
		BgChangeRight();//更换下一张背景
	});


	//在线状态设置
	$(".online_state_setting").click(function(){
		
		var isshow = $(".OsList").attr("isShow");

		if(isshow == "no"){
			$(".OsList").show();
			$(".OsList").attr("isShow","yes");
			//切换图标
			$(".OsLi").click(function(){
				var OSthisclass = $(this).find(".main_icon").attr("class");
				$(".SZIcon").attr("class",OSthisclass +" SZIcon");
			});
		}
		else{
			$(".OsList").hide();
			$(".OsList").attr("isShow","no");
		}
	});


	//WebQQ 栏目选择
	$(".fAF01").click(function(){
		$(this).find(".fAFPic").addClass("fAFP01");
		$(".fAFPic02").removeClass("fAFP02");
		$(".fAFPic03").removeClass("fAFP03");
		$(".fAFPic04").removeClass("fAFP04");

		$(".fAFLi").removeClass("fAFPicBg");
		$(this).addClass("fAFPicBg");

		$(".friendAll").addClass("disnone");
		$("#huihua").removeClass("disnone");
	});
	$(".fAF02").click(function(){
		$(this).find(".fAFPic").addClass("fAFP02");
		$(".fAFPic01").removeClass("fAFP01");
		$(".fAFPic03").removeClass("fAFP03");
		$(".fAFPic04").removeClass("fAFP04");

		$(".fAFLi").removeClass("fAFPicBg");
		$(this).addClass("fAFPicBg");

		$(".friendAll").addClass("disnone");
		$("#lianxiren").removeClass("disnone");
	});
	$(".fAF03").click(function(){
		$(this).find(".fAFPic").addClass("fAFP03");
		$(".fAFPic01").removeClass("fAFP01");
		$(".fAFPic02").removeClass("fAFP02");
		$(".fAFPic04").removeClass("fAFP04");

		$(".fAFLi").removeClass("fAFPicBg");
		$(this).addClass("fAFPicBg");

		$(".friendAll").addClass("disnone");
		$("#faxian").removeClass("disnone");
	});
	$(".fAF04").click(function(){
		$(this).find(".fAFPic").addClass("fAFP04");
		$(".fAFPic01").removeClass("fAFP01");
		$(".fAFPic02").removeClass("fAFP02");
		$(".fAFPic03").removeClass("fAFP03");

		$(".fAFLi").removeClass("fAFPicBg");
		$(this).addClass("fAFPicBg");

		$(".friendAll").addClass("disnone");
		$("#shezhi").removeClass("disnone");
	});


	//联系人选项卡  好友/群/讨论组的选择
	$(".lxrChatKindLi").click(function(){
		var upid=$(this).attr("upid");
		//alert(upid);
		$(".lxrFCList").addClass("disnone");
		$("#"+upid).removeClass("disnone");
		$(".lxrChatKindLi").removeClass("lxrChatKindOn");
		$(this).addClass("lxrChatKindOn");
	});
	//选项卡中好友列表的显示与隐藏
	$(".lxrLiA").click(function(){
		var isshow = $(this).parent().find(".lxrLiDes").attr("isShow");

		if(isshow=="no"){
			$(this).parent().find(".lxrLiDes").show();
			$(this).parent().find(".lxrLiDes").attr("isShow","yes");
			$(this).parent().find(".lxrLiPic").css("background-image",'url("css/images/open_arrow_fire.png")');
		}
		else{
			$(this).parent().find(".lxrLiDes").hide();
			$(this).parent().find(".lxrLiDes").attr("isshow","no");
			$(this).parent().find(".lxrLiPic").css("background-image",'url("css/images/open_arrow.png")');
		}
	});

	//弹出聊天框
	

});


//更换背景图片
var bgIndex;
function BgChangeLeft(){
	bgIndex = $("body").attr("bgIndex");
	if( bgIndex == 1){
		bgIndex = 4;
	}
	bgIndex--;
	$("body").css("background-image",'url("css/images/bodyBg'+ bgIndex +'.jpg")');
	bgIndex = $("body").attr("bgIndex",bgIndex);
}
function BgChangeRight(){
	bgIndex = $("body").attr("bgIndex");
	if( bgIndex == 3){
		bgIndex = 0;
	}
	bgIndex++;
	$("body").css("background-image",'url("css/images/bodyBg'+ bgIndex +'.jpg")');
	bgIndex = $("body").attr("bgIndex",bgIndex);
}
//更换背景图片 end


//弹出聊天框
