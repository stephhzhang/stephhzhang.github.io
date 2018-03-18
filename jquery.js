
var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}
$(window).scroll(function(){
    parallax();
});

// Skills bar

// $.fn.isInViewport = function() {
// var elementTop = $(this).offset().top;
// var elementBottom = elementTop + $(this).outerHeight();
// var viewportTop = $(window).scrollTop();
// var viewportBottom = viewportTop + $(window).height();
// return elementBottom > viewportTop && elementTop < viewportBottom;
// };
//
// $(window).on(‘resize scroll’, function() {
//   $(window).scroll(function(){
//     $('.skillbar').each(function(){
//       $(this).find('.skillbar-bar').animate({
//         width:$(this).attr('data-percent')
//       },2000);
// });
// });
// });
//
  $(".skills").hover(function(){
    $('.skillbar').each(function(){
      $(this).find('.skillbar-bar').animate({
        width:$(this).attr('data-percent')
      },1600);
  });
})


// $('.carousel').carousel({
//   interval: 3000
// })


// $.getJSON('WebsiteJSON.json', function(data) {
// });

// Skills bar


// $(window).scroll(function() {
//     if ($('.skillbar-title').is(':visible')) {
//    function(){
// $('.skillbar').each(function(){
// 		$(this).find('.skillbar-bar').animate({
// 			width:$(this).attr('data-percent')
// 		},2000);
//
//   })
// })


//
// $(window).on('scroll', function(){
// 	$('.skillbar').each(function(){
// 		$(this).find('.skillbar-bar').animate({
// 			width:$(this).attr('data-percent')
// 		},2000);
// 	});
// });





//
// jQuery(document).ready(function(){
// 	jQuery('.skillbar').each(function(){
// 		jQuery(this).find('.skillbar-bar').animate({
// 			width:jQuery(this).attr('data-percent')
// 		},2000);
// 	});
// });
