$(document).ready(function(){

	//line animation

	var num = 0;
	var constellation = setInterval(function() {
		if( num < 17 ){
			strokeAni(num);
			num += 1;
		}
		else {
			clearInterval(constellation);
		}
	}, 300);

	function strokeAni(a) {
		$("#constellation_box .line").eq(a).delay(2000).animate({"stroke-dashoffset":"0"},400);
	}

	$(".intro_text").delay(7300).animate({"bottom":"10px","opacity":"1"},1500);
});


