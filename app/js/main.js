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
    responsive: [{
      breakpoint: 750,
      settings: "unslick"
    }]
  }) 
});