var current;

$(document).ready(function(){
  // $(document).on('click', nextSlide);
  body = $('body');
  $('.zoom_image').on('click', openSlideshow);

  $('.next').on('click', nextSlide);
  $('.prev').on('click', prevSlide);
  $('.close').on('click', closeSlideshow);
});

function closeSlideshow(){
  body.removeClass('slideshow_open');
}

function openSlideshow(){
  var src = $(this).attr('src');
  var caption = $(this).data('caption');
  current = $(this).data('position');
  $('.current_slide').attr('src', src);
  document.getElementById('slideshow_caption').innerHTML = caption;

  body.addClass('slideshow_open');
}

function nextSlide(){
  var current_image = $('.image' + current);
  current = current + 1;
  var next_image = $('.image' + current);
  if (current_image.data('project') == next_image.data('project')){
    fadeTransition(next_image);
  }else{
    slideTransition(next_image, 'next');
  }
}

function prevSlide(){
  var current_image = $('.image' + current);
  current = current - 1;
  var next_image = $('.image' + current);
  if (current_image.data('project') == next_image.data('project')){
    fadeTransition(next_image);
  }else{
    slideTransition(next_image, 'prev');
  }
}

function fadeTransition(next){
  body.addClass('fade_transition');
  setTimeout(function(){
    $('.current_slide').attr('src', next.attr('src'));
    body.removeClass('fade_transition');
  }, 450);
}

function slideTransition(next, direction){
  next_slide = $('.next_slide');
  body.addClass('slide_transition');
  body.addClass(direction);
  next_slide.attr('src', next.attr('src'));
  setTimeout(function(){
    body.addClass('transitioning');
  }, 100);
  setTimeout(function(){
    document.getElementById('slideshow_caption').innerHTML = next.data('caption');
    body.removeClass('transitioning');
    body.removeClass(direction);
    $('.current_slide').removeClass('current_slide').addClass('next_slide').attr('src', '');
    next_slide.removeClass('next_slide').addClass('current_slide');
  }, 700);
}