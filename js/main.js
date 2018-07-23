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

	//random move
	setTimeout(function() {
		animateDiv('.random_move1');
		animateDiv('.random_move2');
		animateDiv('.random_move3');
		animateDiv('.random_move4');
		animateDiv('.random_move5');
		animateDiv('.random_move6');
		animateDiv('.random_move7');
		animateDiv('.random_move8');
	},5000);


});

	function strokeAni(a) {
		$("#constellation_box .line").eq(a).delay(2000).animate({"stroke-dashoffset":"0"},300);
	}

	function afterAni()
	 {
		$("#constellation_box .line").animate({"opacity":"0.2"},1800);

		$(".intro_text").animate({"bottom":"10px","opacity":"1"},1200);
	}


	function makeNewPosition($container) {

    $container = ($container || $(window))
    var h = $container.height() - 50;
    var w = $container.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

	}

	function animateDiv(moving) {
	    var $target = $(moving);
	    var newq = makeNewPosition($target.parent());
	    var oldq = $target.offset();
	    var speed = calcSpeed([oldq.top, oldq.left], newq);

	    $(moving).animate({
	        top: newq[0],
	        left: newq[1]
	    }, speed, function() {
	        animateDiv(moving);
	    });
	};

	function calcSpeed(prev, next) {
	    var x = Math.abs(prev[1] - next[1]);
	    var y = Math.abs(prev[0] - next[0]);
	    var greatest = x > y ? x : y;
	    var speedModifier = 0.02;
	    var speed = Math.ceil(greatest / speedModifier);

	    return speed;

	}