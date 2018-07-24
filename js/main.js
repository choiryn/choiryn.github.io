$(document).ready(function() {

	//loading

	$(".link").on("click", function(e){
		e.preventDefault();
		var link_location = $(this).attr("href");

		$(".loading").removeClass("out");
		setTimeout(function(){
			window.location = link_location;
		},2000);
	});

	// text, line opacity

	setTimeout( function() { afterAni(); }, 5200 );

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
});

	function strokeAni(a) {
		$("#constellation_box .line").eq(a).delay(1800).animate({"stroke-dashoffset":"0"},300);
	}

	function afterAni()
	 {
		$("#constellation_box .line").animate({"opacity":"0"},1800);
		$(".intro_text").animate({"bottom":"10px","opacity":"1"},1200);
	}


