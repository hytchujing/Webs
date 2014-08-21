$(function(){

	$(".c").hover(function(){
		$(this).find(".my_search_down").show();
	},function(){
		$(this).find(".my_search_down").hide();
	});

});