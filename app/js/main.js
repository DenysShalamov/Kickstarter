$(function () {
  $('img.footer__social-link--facebook, img.footer__social-link--twitter, img.footer__social-link--inst, img.footer__arrow-img').each(function(){
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function(data) {
      var $svg = $(data).find('svg');
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });

 $('.advantages__inner').slick({
    infinite: false,
    mobileFirst: true,
    responsive: {
      breakpoint: 750,
      settings: "unslick"
    },

    prevArrow: '<button class="slider-btn slider-btn__left"><svg width="48" height="13" viewBox="0 0 48 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48 4.19628e-06L0.329261 0L0.329261 0.999998L48 1V4.19628e-06Z" fill="#BDBDBD"/><path d="M18.2022 11.8047L0.440509 0.000149576L0 1.19548L17.7616 13L18.2022 11.8047Z" fill="#BDBDBD"/></svg></button>',

    nextArrow: '<button class="slider-btn slider-btn__right"><svg width="48" height="13" viewBox="0 0 48 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 13H47.6707V12H0V13Z" fill="#333333"/><path d="M29.7978 1.19533L47.5595 12.9999L48 11.8045L30.2384 0L29.7978 1.19533Z" fill="#333333"/></svg></button>'
  }) 
});