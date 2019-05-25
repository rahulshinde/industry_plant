$(document).ready(function(){
  // $(document).on('click', nextSlide);
  $('#about_trigger').on('click', toggleAbout);
  $('#index_trigger').on('click', toggleIndex);
  body = $('body');
});

nextSlide = function(){
  $('.slide').toggleClass('current');
  $('.slide').toggleClass('out');
}

toggleAbout = function(){
  if (body.hasClass('open_bottom') && !body.hasClass('show_about')){
    body.addClass('show_about');
    body.removeClass('show_index');
  } else if(!body.hasClass('open_bottom')){
    body.addClass('open_bottom');
    body.addClass('show_about');  
  } else{
    body.removeClass('open_bottom');
    body.removeClass('show_about');  
  }
}

toggleIndex = function(){
  if (body.hasClass('open_bottom') && !body.hasClass('show_index')){
    body.addClass('show_index');
    body.removeClass('show_about');
  } else if(!body.hasClass('open_bottom')){
    body.addClass('open_bottom');
    body.addClass('show_index');  
  } else{
    body.removeClass('open_bottom');
    body.removeClass('show_index');  
  }
}