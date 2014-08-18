$(function(){

	//导航
	setPositon();
	$("#c_l_3").hover(function(){
		$(this).find(".banner_son").show();
	},function(){

		$(this).find(".banner_son").hide();
	});

	//焦点图--电视墙

	//热点推荐
	$(".show_good_li").hover(function(){
		$(this).find(".introForPictures").show();
	},function(){

		$(this).find(".introForPictures").hide();
	});

	//特别关注
	$(".list_a").hover(function(){
		$(this).find(".list_a_span").hide();
	},function(){
		$(this).find(".list_a_span").show();
	});

	//杂志轮转
	bottom_pic();

	//

});

//页面滚动时导航位置
function setPositon(){

	$(window).scroll(function(){
		if ($(window).scrollTop()>=170) {
			$(".banner").css({"position": "fixed", "top": "0px", "left": "auto"});
		}else{
			$(".banner").css({"position": "static"});
		}
		
	});
	
}

//*杂志轮转*/
function bottom_pic(){
	var speed = 30;
	var tab = document.getElementById("mag_con");
	var tab1 = document.getElementById("scllo_begin");
	var tab2 = document.getElementById("scllo_end");
	var prev=document.getElementById("prevPage");
	var next=document.getElementById("nextPage");
	tab2.innerHTML = tab1.innerHTML;
	function Marquee(){	
		if(tab2.offsetWidth-tab.scrollLeft<=0)
			tab.scrollLeft-=tab2.offsetWidth
		else{
			tab.scrollLeft++;
		}
	}
	var gundong=setInterval(Marquee,speed);
	prev.onmouseover=next.onmouseover=tab.onmouseover=function() {clearInterval(gundong)};
	prev.onmouseout=next.onmouseout=tab.onmouseout=function() {gundong=setInterval(Marquee,speed)};
	prev.onmousedown=function(){
		startMove(-30);	
	}

	next.onmousedown=function(){						
		startMove(30);			
	}
	var iTimer=null;
	function startMove(iSpeed){
		if(iTimer){
			clearInterval(iTimer);
			iTimer=null;
		}
		iTimer=setInterval(function(){
			doMove(iSpeed);
		},30)
	}
	var cacheLeft=null;
	function doMove(iSpeed){
		var target=0;
		if(cacheLeft==null){
			cacheLeft=tab.scrollLeft;							
		}
		if(iSpeed>0){
			target=cacheLeft+tab.clientWidth;
			if(target>=tab2.offsetWidth){
				target=tab2.offsetWidth;
			}
		}else{
			target=cacheLeft-tab.clientWidth;
			if(target<0){target=0}

		}						
		if(iSpeed>0){
			if(tab.scrollLeft>=target){							
				clearInterval(iTimer);
				iTimer=null;								
				cacheLeft=null;
				tab.scrollLeft=target;
			}else{
				if(tab2.offsetWidth-tab.scrollLeft<=0)
					tab.scrollLeft-=tab2.offsetWidth;
				else{
					tab.scrollLeft+=iSpeed;
				}
			}
		}else{
			if(tab.scrollLeft<=target){
				clearInterval(iTimer);
				iTimer=null;								
				cacheLeft=null;
				tab.scrollLeft=target;							
			}else{
				if(tab2.offsetWidth-tab.scrollLeft<=0)
					tab.scrollLeft-=tab2.offsetWidth;
				else{
					tab.scrollLeft+=iSpeed;
				}
			}
			
		}
	}
}