$(document).ready(function(){
	//wave event
	var left_wave_morph = anime({
		targets: '#left_wave .wave1',
		d: [
			{ value: 'M-0.3,42.7c20.6,31,26.2,68.9,43.5,101.5C71,196.5,126.4,217.1,167,256c43.1,41.3,57.8,96.9,95.6,141.7c30.2,35.9,74.6,60.8,115.4,81.3c38.1,19.1,71.3,39.7,94.5,75.8c17.5,27.3,32.4,55.8,56.2,78.6C552.5,656.3,604,691,604,691L0,691c0,0,0-107.1,0-160.6C0,367.8-0.1,205.3-0.3,42.7z' },
			{ value: 'M-0.3,42.7c20.6,31,26.2,68.9,43.5,101.5C71,196.5,126.4,217.1,167,256c43.1,41.3,56.2,102.1,94,147c30.2,35.9,73.4,47.7,114.2,68.1c38.1,19.1,74.1,47.6,97.3,83.7c17.5,27.3,32.4,55.8,56.2,78.6C552.5,656.3,604,691,604,691L0,691c0,0,0-107.1,0-160.6C0,367.8-0.1,205.3-0.3,42.7z'},
			{ value: 'M-0.3,42.7c20.6,31,26.2,68.9,43.5,101.5C71,196.5,128,212.3,168.6,251.3c43.1,41.3,56.2,101.6,94,146.5c30.2,35.9,71.7,52.9,112.6,73.3c38.1,19.1,74.1,47.6,97.3,83.7c17.5,27.3,32.4,55.8,56.2,78.6C552.5,656.3,604,691,604,691L0,691c0,0,0-107.1,0-160.6C0,367.8-0.1,205.3-0.3,42.7z'}
		],
		easing: 'linear',
		duration: 2000,
		loop: true
	});

	var right_wave_morph = anime({
		targets: '#right_wave .wave2',
		d: [
			{ value: 'M21.2,0c18.2,19.9,24.7,47.5,35.9,72c14.4,31.3,37.2,54.9,65.9,74c45,30.1,103.8,51.7,130,99c13.4,24.1,17.2,48.1,22.8,75.2c15.9,76.9,67.5,144.3,134,186.1c21.6,13.6,46,26,57.7,48.7c14.4,28,51.2,102.4,66.5,101c0-239.3,0-416.7,0-656C363.1,0,192.1,0,21.2,0z' },
			{ value: 'M21.2,0c18.2,19.9,24.7,47.5,35.9,72c14.4,31.3,37.2,54.9,65.9,74c45,30.1,98.8,59.7,125,107c13.4,24.1,22.2,40.1,27.8,67.2c15.9,76.9,67.5,144.3,134,186.1c21.6,13.6,37.6,35,49.2,57.7c14.4,28,59.6,93.4,75,92c0-239.3,0-416.7,0-656C363.1,0,192.1,0,21.2,0z'},
			{ value: 'M21.2,0c18.2,19.9,24.7,47.5,35.9,72c14.4,31.3,37.2,54.9,65.9,74c45,30.1,103.8,51.7,130,99c13.4,24.1,22,47.6,22.8,75.2c2.2,80.8,67.5,144.3,134,186.1c21.6,13.6,46,26,57.7,48.7c14.4,28,51.2,102.4,66.5,101c0-239.3,0-416.7,0-656C363.1,0,192.1,0,21.2,0z'},
			{ value: 'M21.2,0c18.2,19.9,24.7,47.5,35.9,72c14.4,31.3,37.7,58.5,66.3,77.7c45,30.1,105.6,43.4,131.9,90.7c13.4,24.1,14.9,52.8,20.4,79.8c15.9,76.9,67.5,144.3,134,186.1c21.6,13.6,46,26,57.7,48.7c14.4,28,51.2,102.4,66.5,101c0-239.3,0-416.7,0-656C363.1,0,192.1,0,21.2,0z'}
			],
		easing: 'linear',
		duration: 3000,
		loop: true
	});
    
    //intro number event
    
    var $randomnbr = $('.nbr');
    var $timer = 40;
    var $it;
    var $data = 0;
    var index;
    var change;
    var letters = ["h", "o", "l", "a", "!"];
    
    $randomnbr.each(function() {
        change = Math.round(Math.random()*30);
        $(this).attr('data-change', change);
    });
    
    function random() {
        return Math.round(Math.random()*9);
    };
    
    function select() {
        return Math.round(Math.random()*$randomnbr.length+1);
    };
    
    function value() {
        $('.nbr:nth-child('+select()+')').html(''+random()+'');
        $('.nbr:nth-child('+select()+')').attr('data-number', $data);
        $data++;
        
        $randomnbr.each(function() {
           if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
               index = $('.ltr').index(this);
               $(this).html(letters[index]);
               $(this).removeClass('nbr');
           } 
        });
    };
    

    //anim animation

    $(".anim").delay(1000).animate({"bottom":"10px"},400);
});


