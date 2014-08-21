$(function(){

	quickNote();
    roll_text();

	
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

//roll_text
function roll_text(){
    var _this = $('.roll-text');
    var length = _this.find('p').length
    var counter = 0;
    _this.find('p').hide();
    _this.find('p').eq(counter).show();
    counter++;
    setInterval(function(){
        _this.find('p').hide();
        _this.find('p').eq(counter).fadeIn(200)
        counter++;
        if(counter == length){counter=0;}
    },2500);
}