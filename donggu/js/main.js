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
		$(".banner_box").not(":animated").animate({"marginLeft":"0px"}, 1000);
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

	//탭 이벤트

	$(".tab_title li").click(function() {
		var tab_index = parseInt($(this).attr("tab-item"));
	 	$(".tab_title li").removeClass("active");
	 	$(this).addClass("active");
	 	$(".tab_element").removeClass("active");
	 	$(".tab_element").eq(tab_index).addClass("active");
	});

	 // -----------------------------------------------------------------------

	 //서브 메뉴

	$(".sub_hover").mouseover(function(){
		$(this).find(".depth2").css("display","block");
		$(this).find(".depth2").css("display","block");
	});
	$(".sub_hover").mouseout(function(){
		$(this).find(".depth2").css("display","none");
	});

	// -----------------------------------------------------------------------

	// nowadays controls

	$(".visual_length .slope:odd").css("background","#f5f5f5");/*slope*/ 
	$(".visual_length li").prepend("<div class='opacity_more'></div>"); /*more box*/
	$(".opacity_more").append("<p class='opacity_plus'>+</p>")

	// -----------------------------------------------------------------------

	// section3 슬라이드

	var now_wd = $(".now_visual").width();
	var indexNum = 0;

	$(".now_btn_box button").click(function(){
		$(".now_btn_box button").removeClass("active");
		$(this).addClass("active");
		indexNum = $(this).attr("data-val");
		$(".visual_length").not(":animated").animate({"margin-left":indexNum*now_wd*-1},{duration:2000, easing:"easeOutQuart"});
	});

	// -----------------------------------------------------------------------

	//모달 

	var $visual_length = $(".visual_length li");

	$visual_length.each(function(){
		$(this).click(function(){
			var modal_img = $(this).find("img").attr("src");
			var modal_text = $(this).find("p").text();
			$(".modal_box_wrap").slideDown(300);
			$(".modal_img").attr("src",modal_img);
			$(".modal_text").text(modal_text);
		});
	});

	$(".modal_box_wrap").click(function(){
		$(this).slideUp(300);
	});

	// -----------------------------------------------------------------------

	//section6 banner slide 

	var item_intv = setInterval(function(){ itemSlide(); }, 3000);

	function itemSlide() {
		var item_wd = $(".item_banner li").eq(0).width();

		$(".item_banner").not(":animated").animate({"marginLeft":-item_wd}, 800, function(){
			$(".item_banner li").eq(0).appendTo($(".item_banner"));
			$(".item_banner").css("margin-left","0px");
		});
	}

	function itemReverseSlide() {
		var item_wd = $(".item_banner li").eq(0).width();

		$(".item_banner").css("marginLeft", -item_wd+"px");
		$(".item_banner li").eq(cnt-1).prependTo($(".item_banner"));
		$(".item_banner").not(":animated").animate({"marginLeft":"0px"}, 1000);
	}

	$(".item_prev").click(function(){
		clearInterval(item_intv);
		itemReverseSlide();
		item_intv = setInterval(function(){ itemSlide(); }, 3000);
	});

	$(".item_next").click(function(){
		clearInterval(item_intv);
		itemSlide();
		item_intv = setInterval(function(){ itemSlide(); }, 3000);
	});

	$(".item_banner_wrap").mouseover(function(){
		clearInterval(item_intv);
		$(".item_banner").clearQueue().stop();
	});

	$(".item_banner_wrap").mouseout(function(){
		itemSlide();
		item_intv = setInterval(function(){ itemSlide(); }, 3000);
	});

	// -----------------------------------------------------------------------

	//page_switch

	$(".page_switch_wrap li").mouseover(function() {
		$(".page_sub").css("display","none");
		$(this).find(".page_sub").css("display","block");
	});

	$(".page_switch_wrap li").mouseout(function() {
		$(".page_sub").css("display","none");
	})
});