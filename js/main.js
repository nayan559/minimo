

$(document).ready(function () {
    $.fakeLoader({
        timeToHide:2000,
        bgColor:"#fff",
        spinner:"spinner5"
    });
});


/* Stacky Nav */
$(function(){
    $(window).on("scroll", function(){
      if($(window).scrollTop() > 200){
        $(".navbar").addClass("scroll-nav");
      } else {
        $(".navbar").removeClass("scroll-nav");
      }
  });
});


/* Back to top */
$(document).ready(function() {
  var btn = $('#button');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});