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

	//logo color change

	var chartHt, docuHt = 0;

	$(window).on("scroll",function() {
		
		chartHt = $(".skill").offset().top;
		docuHt = $(document).scrollTop();

		if(docuHt >= chartHt) {
			$(".logo").css("fill","#fff");
			$(".explain_wrap li").addClass("active");
		}
		else {
			$(".logo").css("fill","#1b1b1d");
			$(".explain_wrap li").removeClass("active");
		}
	});	

	//ease scroll

	var scrollHt = $(window).height();
    $(window).on("mousewheel", function(e){
        if(e.originalEvent.wheelDelta < 0) {
            $("html, body").not(":animated").animate({scrollTop:"+="+scrollHt+"px"},800);
        }
        else {
            $("html, body").not(":animated").animate({scrollTop:"-="+scrollHt+"px"},800);
        }
        return false;
    });

    //map
    var map = new naver.maps.Map('map', {
   		center: new naver.maps.LatLng(36.2832250, 127.4774750),
    	zoom: 10
	});
});






