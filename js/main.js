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
	}, 200);

	setTimeout( function() { afterAni(); }, 5200 );

	function strokeAni(a) {
		$("#constellation_box .line").eq(a).delay(2000).animate({"stroke-dashoffset":"0"},300);
	}

	function afterAni()
	 {
		$("#constellation_box .line").animate({"opacity":"0.2"},2000);

		$(".intro_text").animate({"bottom":"10px","opacity":"1"},1500);
	}

	
});


