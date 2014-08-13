$(function(){	//alert("123");	

	$("#BgLeft").click(function(){
		BgChangeLeft();//更换上一张背景
	});
	$("#BgRight").click(function(){
		BgChangeRight();//更换下一张背景
	});


	
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