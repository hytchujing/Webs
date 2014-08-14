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


	//下拉菜单
	$(document).on("click", ".chatMenu", function () {				
			var isshow = $(this).parent().next().find(".TcTab").attr("isShow");			
			if(isshow == "false"){
				$(this).parent().next().find(".TcTab").css("display","block");
				$(this).parent().next().find(".TcTab").attr("isShow","true");
			}
			else{
				$(this).parent().next().find(".TcTab").css("display","none");
				$(this).parent().next().find(".TcTab").attr("isShow","false");
			}
		});

	//弹出聊天框
	TCchatArea();

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
function TCchatArea(){
	$(".chatA").click(function(){
		var talkid=$(this).attr("talkid");
		var cAname=$(this).attr("cafName");
		var isappear = $(this).attr("isappear");
		if(isappear=="yes"){
			$("#"+talkid).show();
			$(".qqChat").css("z-index","10");
			$("#"+talkid).css("z-index","12");
			return;
		}
		
		var chatHtml = '';
		
		chatHtml+='	<!--聊天框-->';
		chatHtml+='	<div id="'+ talkid +'" class="qqChat">';
		chatHtml+='		<div class="chatTitle">';
		chatHtml+='			<div class="chatMenu">';
		chatHtml+='				<p></p>';
		chatHtml+='			</div>';
		chatHtml+='			<div class="chatFriendName">'+ cAname +'</div>';
		chatHtml+='			<div class="chatClose">';
		chatHtml+='				<span>关闭</span>';
		chatHtml+='			</div>';
		chatHtml+='		</div>';
		chatHtml+='		<div class="chatHistory">';
		chatHtml+='			<!--下拉菜单-->';
		chatHtml+='			<ul class="TcTab" isShow="false">';
		chatHtml+='				<li class="TcTabLi">';
		chatHtml+='					<p class="TcTPic t01"></p>';
		chatHtml+='					<span class="TcTWord">群成员</span>';
		chatHtml+='				</li>';
		chatHtml+='				<li class="TcTabLi">';
		chatHtml+='					<p class="TcTPic t02"></p>';
		chatHtml+='					<span class="TcTWord">群资料</span>';
		chatHtml+='				</li>';
		chatHtml+='				<li class="TcTabLi">';
		chatHtml+='					<p class="TcTPic t03"></p>';
		chatHtml+='					<span class="TcTWord">聊天记录</span>';
		chatHtml+='				</li>';
		chatHtml+='			</ul>';
		chatHtml+='			<!--下拉菜单  end-->';
		chatHtml+='			';
		chatHtml+='		</div>';
		chatHtml+='		<div class="chatControl"></div>';
		chatHtml+='	</div>';
		chatHtml+='	<!--聊天框  end-->';

		$("body").append(chatHtml);
		$(this).attr("isappear","yes");
		$(".qqChat").css("z-index","10");
		$("#"+talkid).css("z-index","12");


		//最近聊天的人在最上面
		$(".qqChat").click(function(){
			$(".qqChat").css("z-index","10");
			$(this).css("z-index","12");
		});


		
		
		//出现在随机的位置
		var ranleft= (Math.random()+5)*100;
		var rantop= Math.random()*30;
		$("#"+talkid).css({
			"left":ranleft+"px",
			"top":rantop+"px"
		});



		//关闭聊天框
		$(".chatClose").click(function(){
			$(this).parent().parent().hide();
		});

	});


}
//弹出聊天框  end