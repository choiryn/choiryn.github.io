/*header slide*/
$(document).ready(function(){
    $(".main_menu").mouseover(function(){
    	$(".sub,.menuBg").not(":animated").slideDown(700);
    $(".menuBg").mouseleave(function(){
    	$(".sub,.menuBg").not(":animated").slideUp(700);
    	});
	});
});