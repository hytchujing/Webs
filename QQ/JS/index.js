$(function(){

	//顶部搜索栏
	$("#sosoMenu").hover(function(){
		$(this).find("#sosoDown").show();
		$(this).css("background-position","-554px -200px");
	},function(){
		$(this).find("#sosoDown").hide();
		$(this).css("background-position","");
	});

	$(".sosoDownLi").hover(function(){
		$(this).css("background-color","rgb(50,151,100)");
	},function(){
		$(this).css("background-color","");
	});

	
	//要闻/江苏新闻特效	
	$(".yaowen").hover(function(){	
		$(this).removeClass("activeTitle");
		$(this).addClass("activeTitle");
		$(this).parent().find(".jiangsuNews").removeClass("activeTitle");	
		$(this).parent().next().show();
		$(this).parent().next().next().hide();		
	},function(){		
		$(this).parent().next().show();
		$(this).parent().next().next().hide();
	});
	
	$(".jiangsuNews").hover(function(){	
		$(this).removeClass("activeTitle");
		$(this).addClass("activeTitle");
		$(this).parent().find(".yaowen").removeClass("activeTitle");			
		$(this).parent().next().hide();
		$(this).parent().next().next().show();		
	},function(){				
		$(this).parent().next().hide();
		$(this).parent().next().next().show();
	});

	$("#tablmPei").hover(function(){
		$(this).parent().parent().find("#lm7PeiXun").show();
		$(this).parent().parent().find("#lm7KaoShi").hide();
	},function(){
		$(this).parent().parent().find("#lm7PeiXun").show();
		$(this).parent().parent().find("#lm7KaoShi").hide();
	});	

	$("#tablmKao").hover(function(){
		$(this).parent().parent().find("#lm7KaoShi").show();
		$(this).parent().parent().find("#lm7PeiXun").hide();
	},function(){
		$(this).parent().parent().find("#lm7KaoShi").show();
		$(this).parent().parent().find("#lm7PeiXun").hide();
	});	
	
});


