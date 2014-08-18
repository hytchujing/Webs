$(function(){

	//导航
	setPositon();
	$("#c_l_3").hover(function(){
		$(this).find(".banner_son").show();
	},function(){

		$(this).find(".banner_son").hide();
	});

	//焦点图--电视墙
	$(document).ready(function(){
		$('#focus').mouseover(function(){
			$('.pre').css('display','block');
			$('.next').css('display','block');
		});
		$('#focus').mouseout(function(){
			$('.pre').css('display','none');
			$('.next').css('display','none');
		});
	});
	var sWidth = $("#focus").width();
	var len = $("#focus ul li").length;
	var index = 0;
	var picTimer;
	var btn = "<div class='btnBg'></div><div class='btn'>";
	for ( var i = 0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
	$("#focus").append(btn);
	$("#focus .btn span").addClass("on").mouseover(function() {
		index = $("#focus .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseover");
	/*$("#focus .preNext").css("opacity",1).hover(function() {
		$(this).stop(true, false).animate( {
			"opacity" : "1"
		}, 300);
	}, function() {
		$(this).stop(true, false).animate( {
			"opacity" : "1"
		}, 300);
	});*/
	$("#focus .pre").click(function() {
		index -= 1;
		if (index == -1) {
			index = len - 1;
		}
		showPics(index);
	});
	$("#focus .next").click(function() {
		index += 1;
		if (index == len) {
			index = 0;
		}
		showPics(index);
	});
	$("#focus ul").css("width", sWidth * (len));
	$("#focus").hover(function() {
		clearInterval(picTimer);
	}, function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if (index == len) {
				index = 0;
			}
		}, 4000);
	}).trigger("mouseleave");
	function showPics(index) {
		var nowLeft = -index * sWidth;
		$("#focus ul").stop(true, false).animate( {
			"left" : nowLeft
		}, 300);
		$("#focus .btn span").stop(true, false).animate( {
			"opacity" : "0.4"
			
		}, 300).eq(index).stop(true, false).animate( {
			"opacity" : "1"
			
		}, 300);
	}


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

	
	//滚动容器ID，上控ID,下控ID，li的宽度，滚动间隔，滚动速率
	smoothScroll('co_ad_ul','ad_rt','ad_lt',627,2000,0.1);

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

function smoothScroll(scr_obj,up_obj,down_obj,w,gap,vate) {
 //初始化
 var scrollE = document.getElementById(scr_obj);
 var scrollCon = scrollE.parentNode;
 var upE = document.getElementById(up_obj);
 var downE = document.getElementById(down_obj);
 var ulE = scrollE.getElementsByTagName('ul')[0];
 var lilist = ulE.getElementsByTagName('li');
 var ulE_copy = document.createElement('ul');
 scrollE.appendChild(ulE_copy);
 ulE_copy.innerHTML = ulE.innerHTML;
 scrollCon.scrollLeft = 0;
 var remark = 0,time=20,timer,fx_timer;
 var l = lilist.length,togget = false;
 //启动动画
 timer = setTimeout(fx,gap);
 //定义动画
 function fx() {
 clearTimeout(timer);
 remark+=1;
 fx_timer = setInterval(setLeft,time);
 }
 //定义左动画
 function setLeft() {
 clearTimeout(timer);
   var left = scrollCon.scrollLeft;
   if(left<remark*w) scrollCon.scrollLeft = Math.ceil(left+(parseInt(remark*w)-left)*vate);
   else {
     clearInterval(fx_timer);
	 remark = remark<l?remark:0;
     scrollCon.scrollLeft = remark*w;
	 if(!togget) timer = setTimeout(fx,gap);
	 }
   }
 //定义右动画
 function setRight() {
 clearTimeout(timer);
   var right = scrollCon.scrollLeft;
   if(right>remark*w) scrollCon.scrollLeft = Math.floor(right-(right-parseInt(remark*w))*vate);
   else {
     clearInterval(fx_timer);
	 remark = remark<1?l:remark;
     scrollCon.scrollLeft = remark*w;
	 if(!togget) timer = setTimeout(fx,gap);
	 }
   }
//扩展为可控
upE.onclick = function() {
 clearInterval(fx_timer);
 remark = remark<l?remark:0;
 scrollCon.scrollLeft = remark*w;
 fx();
 }
downE.onclick = function() {
 clearInterval(fx_timer);
 remark = remark<1?l:remark;
 scrollCon.scrollLeft = remark*w;
 remark-=1;
 fx_timer = setInterval(setRight,time);
 } 
//鼠标事件
scrollCon.onmouseover = function() {togget = true;clearTimeout(timer);}
scrollCon.onmouseout = function() {togget = false;timer = setTimeout(fx,gap);}
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



