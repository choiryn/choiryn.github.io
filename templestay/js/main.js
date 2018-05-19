$(document).ready(function(){
	//temple recommend
	$(".rcm_nav ul li").mouseover(function(){
		$(this).css("color","#000");
	});

	$(".rcm_nav ul li").mouseleave(function(){
		$(this).css("color","#555");
	});

	$(".temple1").mouseover(function() {
		$(".rcm_image").css({"background":"url(./img/temple1.jpg)","background-size":"cover"});
		$(".title_top").text('"나만의 향기를 찾아서"');
		$(".title_name").text("길상사");
		$(".title_exp").text('평온을 주는 아름다운 자연과 숨쉬며 나를 너그럽게 바라 볼 수 있는 시간을 갖도록 합니다.');
	});

	$(".temple2").mouseover(function() {
		$(".rcm_image").css({"background":"url(./img/temple2.jpg)","background-size":"cover"});
		$(".title_top").text('"내 마음의 주인 되기"');
		$(".title_name").text("화엄사");
		$(".title_exp").text("푸른 자연이 살아있는 맑고 고요한 산사에서 내면을 들여다 보세요.")
	});

	$(".temple3").mouseover(function() {
		$(".rcm_image").css({"background":"url(./img/temple3.jpg)","background-size":"cover"});
		$(".title_top").text('"장기 휴식형 템플스테이"');
		$(".title_name").text("낙산사");
		$(".title_exp").text("산사에 길가 머물며 수행하면서 기도하고 싶으신 분들을 위해서 장기 템플스테이를 진행 합니다.")
	});

	$(".temple4").mouseover(function() {
		$(".rcm_image").css({"background":"url(./img/temple4.jpg)","background-size":"cover"});
		$(".title_top").text('"데일리 템플스테이"');
		$(".title_name").text("백담사");
		$(".title_exp").text("시간이 많지 않은 직장인 혹은 수학여행이나, 동호회 등을 마음 편하게 하고 싶은 분들께 권해드립니다.")
	});

	$(".temple5").mouseover(function() {
		$(".rcm_image").css({"background":"url(./img/temple5.jpg)","background-size":"cover"});
		$(".title_top").text('"반야로 가는 인연"');
		$(".title_name").text("보현사");
		$(".title_exp").text("내가 누구인가? 참 나를 밝히는 불법의 인연을 이어가보시길 바랍니다.")
	});

	// 서브 메뉴
	
	$(".main_menu_box").mouseenter(function(){
		$(".sub,.menuBg").not(":animated").slideDown(300);
	});
	$(".main_menu_box").mouseleave(function(){
		$(".sub,.menuBg").not(":animated").slideUp(300);
	});

	// 스크롤 애니메이션 
	$(window).scroll(function(){
		var par = $(window).scrollTop();
		// if(par>=800){
		// 	$("#section2").css("background-repeat","repeat-y");
		// 	$(".con2 h1").animate({"marginRight":"0","opacity":"1"},2000);
		// 	$(".con2 p").fadeIn(1500);
		// 	$(".media").delay(500).animate({"opacity":"1","top":"330px"},800);
		// }

		//stroke-dasharray

		if(par>=1450) {
			$(".st0").animate({"stroke-dasharray":"500"},2000,function(){
					$(this).css({"fill":"#333","stroke":"#333"});
				});	
		    }

		if(par>=1750) {
			$(".st1").animate({"stroke-dasharray":"450"},2000,function() {
				    	$(".st1").css({"fill":"#333","stroke":"#333"});
				});	
		   	}

		if(par>=2050) {
			$(".st2").animate({"stroke-dasharray":"400"},2000,function() {
				    $(".st2").css({"fill":"#333","stroke":"#333"});
				});	
		    }
		});

	//window 로드될 때 animation
//
//	$(window).ready(function(){
//		$(".visual").animate({"background-size":"105%"},6000);
//	});

	//배너 슬라이드

	var wd = $(".banner li").width();
	var cnt = $(".banner li").length;
	var intv = setInterval(function(){ autoSlide(); }, 3000);

	function autoSlide() {
		$(".banner").not(":animated").animate({"marginLeft":-wd},1000,function(){
				$(".banner li").eq(0).appendTo($(".banner"));
				$(".banner").css("marginLeft","0px");
		});
	}

	function reverse() {
		$(".banner").css("marginLeft",-wd+"px");
		$(".banner li").eq(cnt-1).prependTo($(".banner"));
		$(".banner").not(":animated").animate({"marginLeft":"0px"},1000);
	}

	$(".banner li").mouseover(function(){
		clearInterval(intv);
		$(".banner").clearQueue().stop();
	});

	$(".banner li").mouseleave(function(){
		autoSlide();
		intv = setInterval(function(){ autoSlide(); }, 3000);
	});

	$(".next").click(function(){
		clearInterval(intv);
		autoSlide();
		intv = setInterval(function(){ autoSlide(); }, 3000);
	});

	$(".prev").click(function(){
		clearInterval(intv);
		reverse();
		intv = setInterval(function() { autoSlide(); }, 3000);
	});

	//지도 
	$(".select").click(function(){
		$(this).toggleClass("toggle_color");
	});
    
    $(".form_first").mouseover(function(){
       $(this).find("legend").stop().animate({"border-color":"#85859e"},500); 
    });
    
    $(".form_first").mouseout(function(){
       $(this).find("legend").stop().animate({"border-color":"#afadbc"},500); 
    });
    
    $(".form_second").mouseover(function(){
       $(this).find("legend").stop().animate({"border-color":"#85859e"},500); 
    });
    
    $(".form_second").mouseout(function(){
       $(this).find("legend").stop().animate({"border-color":"#afadbc"},500); 
    });
    
    $(".form_toggle_btn").click(function(){
       $("aside").toggleClass("toggle");
    });

	//슬라이딩 이미지

	var slidewd = $(".type_image").width();

	$(".type_image").mouseover(function() {
		$(this).find(".box1").stop().animate({"margin-left":-slidewd},500);
	});
	$(".type_image").mouseout(function() {
		$(this).find(".box1").stop().animate({"margin-left":"0px"},500);
	});
	$(".type_image").mouseover(function() {
		$(this).find(".box2").stop().animate({"margin-left":-slidewd},500);
	});
	 $(".type_image").mouseout(function() {
		$(this).find(".box2").stop().animate({"margin-left":"0px"},500);
	});
	$(".type_image").mouseover(function() {
		$(this).find(".box3").stop().animate({"margin-left":"0px"},500);
	});
	$(".type_image").mouseout(function() {
		$(this).find(".box3").stop().animate({"margin-left":-slidewd},500);
	});

	// mobile

	$(".open_slide").click(function(){
		$(this).find(".mo_sub_depth").slideDown(500);
	});
});
		    

// CLIENT INFO
// CLIENT ID	a914cde3849d4e43b01d2d24bca7ac55
// SUPPORT EMAIL	mamiedoreen@naver.com
// CLIENT STATUS	Sandbox Mode
// https://choiryn.github.io/#access_token=3613685325.a914cde.9c57842519da43a188a26aad6d38c63f

