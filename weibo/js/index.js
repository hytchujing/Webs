$(function(){
	//左导
	$(".lev").click(function(){
		$(".lev").find(".S_txt1").removeClass("lev_curr");
		$(this).find(".S_txt1").addClass("lev_curr");
	});
	setPositon();

	faBu();
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
			html+='				<a href="#" id="mainCenter4MainContent4RightSA"><em></em>(502)</a>';
			html+='				<span>|</span>';
			html+='				<a href="#"><em></em>转发(1045)</a>';
			html+='				<span>|</span>';
			html+='				<a href="#">收藏(1)</a>';
			html+='				<span>|</span>';
			html+='				<a href="#">评论(120)</a>';
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