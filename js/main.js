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

                          var map = new naver.maps.Map('map');
                          var myaddress = '산내로 1257';// 도로명 주소나 지번 주소만 가능 (건물명 불가!!!!)
                          naver.maps.Service.geocode({address: myaddress}, function(status, response) {
                              if (status !== naver.maps.Service.Status.OK) {
                                  return alert(myaddress + '의 검색 결과가 없거나 기타 네트워크 에러');
                              }
                              var result = response.result;
                              // 검색 결과 갯수: result.total
                              // 첫번째 결과 결과 주소: result.items[0].address
                              // 첫번째 검색 결과 좌표: result.items[0].point.y, result.items[0].point.x
                              var myaddr = new naver.maps.Point(result.items[0].point.x, result.items[0].point.y);
                              map.setCenter(myaddr); // 검색된 좌표로 지도 이동
                              // 마커 표시
                              var marker = new naver.maps.Marker({
                                position: myaddr,
                                map: map
                              });
                              // 마커 클릭 이벤트 처리
                              naver.maps.Event.addListener(marker, "click", function(e) {
                                if (infowindow.getMap()) {
                                    infowindow.close();
                                } else {
                                    infowindow.open(map, marker);
                                }
                              });
                              // 마크 클릭시 인포윈도우 오픈
                              var infowindow = new naver.maps.InfoWindow({
                                  content: '<h4> [네이버 개발자센터]</h4><a href="https://developers.naver.com" target="_blank"><img src="https://developers.naver.com/inc/devcenter/images/nd_img.png"></a>'
                              });
                          });
});






