$(function(){
	//显示时间
	showDigit();
	
	//setInterval('showDigit()',1000);

	$(".mianContent").hover(function(){
		$(this).css({
			"box-shadow":"1px 1px 10px #333"
		});
	},function(){
		$(this).css({
			"box-shadow":""
		});
	});

	$(".mianCLink").hover(function(){
		$(this).css({
			"color":"#3FA5FF",
			"text-shadow":"1px 1px 10px #9DD1EB"
		});
	},function(){
		$(this).css({
			"color":"",
			"text-shadow":""
		});
	});

});

function showDigit(){
	var ct = new Date();
	var year = ct.getYear();
	var month = ct.getMonth() + 1;
	var date = ct.getDate();
	var hour = ct.getHours();
	var min = ct.getMinutes();
	var sec = ct.getSeconds();

	if( year < 314 ){
		year = 1900 + year;
	}

	var y1 = Math.floor(year/1000);
	var y2 = Math.floor((year%1000)/100);
	var y3 = Math.floor((year%100)/10);
	var y4 = year%10;
	var m1 = Math.floor(month/10);
	var m2 = Math.floor((month%10));
	var d1 = Math.floor(date/10);
	var d2 = Math.floor(date%10);
	var h1 = Math.floor(hour/10);
	var h2 = Math.floor(hour%10);
	var min1 = Math.floor(min/10);
	var min2 = Math.floor(min%10);
	var sec1 = Math.floor(sec/10);
	var sec2 = Math.floor(sec%10);	

	$("#y1").css("background-position","0px -"+y1*30+"px");
	$("#y2").css("background-position","0px -"+y2*30+"px");
	$("#y3").css("background-position","0px -"+y3*30+"px");
	$("#y4").css("background-position","0px -"+y4*30+"px");
	$("#m1").css("background-position","0px -"+m1*30+"px");
	$("#m2").css("background-position","0px -"+m2*30+"px");
	$("#d1").css("background-position","0px -"+d1*30+"px");
	$("#d2").css("background-position","0px -"+d2*30+"px");
	$("#h1").css("background-position","0px -"+h1*30+"px");
	$("#h2").css("background-position","0px -"+h2*30+"px");
	$("#min1").css("background-position","0px -"+min1*30+"px");
	$("#min2").css("background-position","0px -"+min2*30+"px");
	$("#sec1").css("background-position","0px -"+sec1*30+"px");
	$("#sec2").css("background-position","0px -"+sec2*30+"px");

	setTimeout('showDigit()',1000);
}
