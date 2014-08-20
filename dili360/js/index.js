$(function(){

	quickNote();

	
});

//quick-note
function quickNote(){
	$(document).ready(function(){        
        function scrollNote(){
            var length = $('.quick-note').find('b').length;
            var ship = $('.quick-note').find('.scroll-content');
            var height = parseInt($('.quick-note').height());
            var timeDuration = 3000;
            var current = 0;
            setInterval(function(){
                current++;
                if(current >= length){
                    current = 0;
                }
                ship.css({'margin-top':-current*height});
            },timeDuration)
        }
        scrollNote();
    });
}