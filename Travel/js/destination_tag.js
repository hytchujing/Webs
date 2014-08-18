Array.prototype.in_array = function(p_val) {
	for(var i = 0, l = this.length; i < l; i++) {
		if(this[i] == p_val) {
			return true;
		}
	}
	return false;
}

function getTotal(arr)
{
    var total = 0;
	var temp_arr = new Array();
    if(arr.length > 0)
	{
	    for(var i = 0; i<arr.length; i++)
		{
		    if(!temp_arr.in_array(arr[i]))
			{
			    temp_arr.push(arr[i]);
			}
		    
		}

		for(var k = 0; k<temp_arr.length;k++)
		{
		    total +=temp_arr[k];
		}
	}
	return total;
}

function destination_tag()
	{
		var oDiv = document.getElementById('destination_tag');//console.log(oDiv);
		var aA = oDiv.getElementsByTagName('a');
		var marks = new Array();
		var default_mark = 1;
		for(var j = 0; j < aA.length; j++)
		{
			marks.push(aA[j].getAttribute("mark") == null ? default_mark : parseInt(aA[j].getAttribute("mark"), 10));
		}
		
		var total = getTotal(marks);
		
		var i = 0;
		for(i = 0; i < aA.length; i++)
		{
			aA[i].pause = 1;
			aA[i].time = null;
			initialize(aA[i]);   //初始化个个div的位置，以及速度          
			aA[i].onmouseover = function ()
			{
				this.pause = 0;
			};
			aA[i].onmouseout = function ()
			{
				this.pause = 1;
			};
		}
		
		var t = null;
		function starmove()
		{
			if(t)
			{
				t = clearInterval(t);
				t = null;
			}
			t = setInterval(function ()
			{
				for(i = 0; i < aA.length; i++)
				{
					if(aA[i].pause)
					{
						domove(aA[i]);
					}
				}
			}, 24);
		}
		starmove();
		function domove(obj)
		{
			var objOffsetTop = obj.offsetTop;
			if(objOffsetTop >= obj.offsetHeight && obj.offsetHeight == 0)
			{
				objOffsetTop = 0;
                
			}

			if(objOffsetTop <= -obj.offsetHeight)
			{
				obj.style.top = oDiv.offsetHeight + "px";
				initialize(obj);
			}
			else
			{
				obj.style.top = obj.offsetTop - obj.ispeed + "px";
			}
		}
		function initialize(obj)
		{
			var _mark = obj.getAttribute("mark") == null ? default_mark : parseInt(obj.getAttribute("mark"), 10);
			var randNum = Math.round(Math.random() * total);
			
			if(randNum <= _mark)
			{
				obj.style.display = "block";
			}
			else
			{
				obj.style.display = "none";
			}

			var iLeft = parseInt(Math.random() * oDiv.offsetWidth);
			var scale = Math.random() * 1 + 1;
			var iTimer = parseInt(Math.random() * 1500);
			obj.pause = 0;
			var fontSize = Math.ceil(12 * scale);//设置单个字节的长度
			obj.style.fontSize=fontSize+"px";
			var txt=obj.innerHTML;//获取文本
			var _offsetWidth=txt.length*fontSize;//计算文本的总宽度
			obj.style.width=_offsetWidth+"px";
			if((iLeft - _offsetWidth) >= 0)
			{
				obj.style.left = iLeft-obj.offsetWidth+ "px";
			}
			else 
			{							
				obj.style.left = iLeft + "px";
			}
			clearTimeout(obj.time);
			obj.time = setTimeout(function ()
			{
				obj.pause = 1;
			}, iTimer);
			obj.ispeed = Math.ceil(Math.random() * 4) + 1;
		}
	}destination_tag();