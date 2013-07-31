// DOM READY
// ----------------------------------------------------------------------------------------------------
$(function() {

  $("body").queryLoader2({
      barColor: "#fff",
      backgroundColor: "#000",
      percentage: true,
      barHeight: 1,
      completeAnimation: "grow",
      minimumTime: 100,
      onComplete: function() {
        $('.screen__1').find('.screen_cnt').fadeIn();        
      }
  });

  // $('.screen__1').find('.screen_layer__1').parallax("50%", 0.1);
  $('.screen__1').find('.screen_layer__2').parallax("50%", 0.2);

  // $('.screen__2').find('.screen_layer__1').parallax("50%", 0.1);
  $('.screen__2').find('.screen_layer__2').parallax("50%", 0.2);

  $('.screen__3').find('.screen_layer__1').parallax("50%", 0.2);
  $('.screen__3').find('.screen_layer__2').parallax("50%", 0.1);
  $('.screen__3').find('.screen_layer__3').parallax("50%", 0.3);
  $('.screen__3').find('.screen_layer__4').parallax("50%", 0.4);

  // $('.screen__4').find('.screen_layer__1').parallax("50%", 0.1);
  $('.screen__4').find('.screen_layer__2').parallax("50%", 0.4);

  // $('.screen__5').find('.screen_layer__1').parallax("50%", 0.1);
  $('.screen__5').find('.screen_layer__2').parallax("50%", 0.2);

  // $('.screen__6').find('.screen_layer__1').parallax("50%", 0.1);
  $('.screen__6').find('.screen_layer__2').parallax("50%", 0.2);

  // Popup open
  var
      $dialog  = $('.dialog'),
      $overlay = $('.overlay');
  $('.photos_a').click(function() {
    var
        src = '/img/photos/' + $(this).attr('rel') + '.jpg',
        html = $(this).attr('alt');
    $dialog.find('.dialog_photo').attr('src', src);
    $dialog.find('.dialog_text').html(html);
    $overlay.show();
    $dialog.fadeIn();
    return false;
  });

  // Popup close
  $('.dialog_close, .overlay').click(function() {
    $overlay.hide();
    $dialog.hide();
    return false;
  });

  // Navigation
  $('.section-nav_i').click(function() {
    var 
        id = $(this).attr('href'),
        destination = $(id).offset().top;
    $('html, body').animate({scrollTop: destination}, 1500);
    return false;
  });

});

// DOCUMENT SCROLL
// ----------------------------------------------------------------------------------------------------
$(window).scroll(function() {

  var
    screen__1 = $(".screen__1").offset().top,
    screen__2 = $(".screen__2").offset().top,
    screen__3 = $(".screen__3").offset().top,
    screen__4 = $(".screen__4").offset().top,
    screen__5 = $(".screen__5").offset().top,
    screen__6 = $(".screen__6").offset().top,
    windowOffsetTop = $(window).scrollTop();

 if ($(window).scrollTop() == ($(document).height() - $(window).height())) {

    $('.screen__6').find('.screen_cnt').fadeIn();
    $('.section-nav').find('.section-nav_i__current').removeClass('section-nav_i__current');
    $('[href=#contacts]').addClass('section-nav_i__current');

  } else if (windowOffsetTop >= screen__1 && windowOffsetTop < screen__2) {
    
    $('.section-nav').find('.section-nav_i__current').removeClass('section-nav_i__current');
    $('[href=#about_us]').addClass('section-nav_i__current');

  } else if (windowOffsetTop >= screen__2 && windowOffsetTop < screen__3) {
    
    $('.screen__2').find('.screen_cnt').fadeIn();
    $('.section-nav').find('.section-nav_i__current').removeClass('section-nav_i__current');
    $('[href=#carlsbad]').addClass('section-nav_i__current');

  } else if (windowOffsetTop >= screen__3 && windowOffsetTop < screen__4) {
    
    $('.screen__3').find('.screen_cnt').fadeIn();
    $('.section-nav').find('.section-nav_i__current').removeClass('section-nav_i__current');
    $('[href=#academics]').addClass('section-nav_i__current');

  } else if (windowOffsetTop >= screen__4 && windowOffsetTop < screen__5) {
    
    $('.screen__4').find('.screen_cnt').fadeIn();
    $('.section-nav').find('.section-nav_i__current').removeClass('section-nav_i__current');
    $('[href=#summer_camp]').addClass('section-nav_i__current');

  } else if (windowOffsetTop >= screen__5 && windowOffsetTop < screen__6) {

    $('.screen__5').find('.screen_cnt').fadeIn();
    $('.section-nav').find('.section-nav_i__current').removeClass('section-nav_i__current');
    $('[href=#our_teachers]').addClass('section-nav_i__current');

  }

});

// WINDOW LOAD
// ----------------------------------------------------------------------------------------------------
$(window).load(function() {});

// WINDOW RESIZE
// ----------------------------------------------------------------------------------------------------
$(window).smartresize(function() {});