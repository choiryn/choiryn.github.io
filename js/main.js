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

	function afterAni()
	 {
		$("#constellation_box .line").animate({"opacity":"0"},1800);
		$(".opc").animate({"opacity":"0.5"},1000);
		// $(".intro_text").animate({"bottom":"10px","opacity":"1"},1200);
	}

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

	function strokeAni(a) {
		$("#constellation_box .line").eq(a).delay(1800).animate({"stroke-dashoffset":"0"},300);
	}

	//menu open

	$(".gnb").click(function() {
		$(".gnb_open").addClass("active");
	});

	// menu close

	$(".gnb_open").click(function() {
		$(this).removeClass("active");
	});

    //map
    var position = new naver.maps.LatLng(36.2832250, 127.4774750);
    var map = new naver.maps.Map('map', {
   		center: position,
    	zoom: 10
	});

	var marker = new naver.maps.Marker({
	    position: position,
	    map: map,
	    icon: '../img/marker.svg'
	});
});






