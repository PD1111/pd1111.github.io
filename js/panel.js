$(document).ready(function() {
	  /*$(".item img").mouseenter(function() {
       $(this).animate({
           height: '+=20px',
           width: '+=20px'
       }, 500);
    });
    $(".item img").mouseleave(function() {
       $(this).animate({
           height: '-=20px',
           width: '-=20px'
       }, 500); 
    });*/
    $("body").delay("slow").fadeIn();
	  $("#menu").accordion({animated: 'bounceslide', collapsible: true, active: false, heightStyle: "content"});
});