$(function(){
	//左导
	$(".lev").click(function(){
		$(".lev").find(".S_txt1").removeClass("lev_curr");
		$(this).find(".S_txt1").addClass("lev_curr");
	});
	setPositon();
	faBu();
	shoucang();
	Zan();


});

//页面滚动时左导航位置
function setPositon(){
	$(window).scroll(function(){
		if ($(window).scrollTop()>=70) {
			$(".WB_left_nav").css({"position": "fixed", "top": "70px", "left": "auto"});
		}else{
			$(".WB_left_nav").css({"position": "static"});
		}
		
	});	
}

//发布微博
function faBu(){
	$(".mainCenter1BRightR").click(function(){
		var castval = $(".textareastyle").val();
		var ct = new Date();
		var month = ct.getMonth();
		month = month + 1;
		var day = ct.getDate();
		var hour = ct.getHours();
		var minute = ct.getMinutes();
		if(castval == ""){
			return;
		}else{
			var html = '';

			html+='<div class="mainCenter4Main">';
			html+='	<div class="mainCenter4MainPic"><img src="images/myheadimg.jpg"></div>';
			html+='	<div class="mainCenter4MainContent">';
			html+='		<div class="mainCenter4MainContent1">';
			html+='			<a href="#">千冥静</a>';
			html+='			<i class="i1"></i>';
			html+='			<i class="i2"></i>';
			html+='		</div>';
			html+='		<div class="mainCenter4MainContent2">'+ castval +'</div>';
			html+='		<div class="mainCenter4MainContent4">';
			html+='			<div class="mainCenter4MainContent4Left">';
			html+='				<a href="#">'+ month +'月'+ day +'日 '+ hour +':'+ minute +'</a>';
			html+='				<span>来自</span>';
			html+='				<a href="#">微博 weibo.com</a>';
			html+='				<span class="hide">|</span>';
			html+='				<a href="#" class="hide">举报</a>';
			html+='			</div>';
			html+='			<div class="mainCenter4MainContent4Right">';
			html+='				<a class="mainCenter4MainContent4RightSA" iszan="no" title="赞"><em></em>赞(<span class="zanNum" count="0">0</span>)</a>';
			html+='				<span>|</span>';
			html+='				<a class="zhuanFa" ><em></em>转发(<span class="zhuanFaNum">1045</span>)</a>';
			html+='				<span>|</span>';
			html+='				<a class="shouCang" issc="no">收藏</a>';
			html+='				<span>|</span>';
			html+='				<a class="pingLun">评论(<span class="pingLunNum">120</span>)</a>';
			html+='			</div>';
			html+='		</div>';
			html+='	</div>';
			html+='</div>';

			var html2 = $(".broadcontent").html();
			html = html + html2;
			$(".broadcontent").html(html);
			$(".textareastyle").val("");
		}

	});

}

//收藏
function shoucang(){
	$(document).on("click",".shouCang",function(){
		var sc=$(this).attr("issc");		
		if (sc=="no") {
			$(this).html("取消收藏");
			$(this).attr("issc","yes");
		}
		else{
			$(this).html("收藏");
			$(this).attr("issc","no");
		}

	});
}

//赞
function Zan(){
	$(document).on("click",".mainCenter4MainContent4RightSA",function(){
		var zan = $(this).attr("iszan");
		var zancount = $(this).find(".zanNum").attr("count");
		//alert(zancount);
		if (zan=="no") {
			zancount++;			
			$(this).attr("iszan","yes");
			$(this).attr("title","取消赞");
			$(this).find(".zanNum").attr("count",zancount);
			$(this).find(".zanNum").html(zancount);
		}
		if(zan=="yes"){
			zancount--;			
			$(this).attr("iszan","no");
			$(this).attr("title","赞");
			$(this).find(".zanNum").attr("count",zancount);
			$(this).find(".zanNum").html(zancount);
		}
		
	});
}