$(document).ready(function(){
	// 배너 슬라이드
	var wd = $(".banner_wrap").width();
	var cnt = $(".banner_box li").length;
	var intv = setInterval(function(){ bannerSlide(); }, 3000);

	function bannerSlide() {
		$(".banner_box").not(":animated").animate({"marginLeft":-wd}, 800, function(){
			$(".banner_box li").eq(0).appendTo($(".banner_box"));
			$(".banner_box").css("margin-left","0px");
		});
	}

	function reverseSlide() {
		$(".banner_box").css("marginLeft", -wd+"px");
		$(".banner_box li").eq(cnt-1).prependTo($(".banner_box"));
		$(".imgBox").not(":animated").animate({"marginLeft":"0px"}, 1000);
	}

	$(".prev").click(function(){
		clearInterval(intv);
		reverseSlide();
		intv = setInterval(function(){ bannerSlide(); }, 3000);
	});

	$(".next").click(function(){
		clearInterval(intv);
		bannerSlide();
		intv = setInterval(function(){ bannerSlide(); }, 3000);
	});

	$(".stop").click(function(){
		clearInterval(intv);
		$(".banner_box").clearQueue().stop();
	});

	$(".play").click(function(){
		bannerSlide();
		intv = setInterval(function(){ bannerSlide(); }, 3000);
	});

	// ------------------------------------------------------------------------
});