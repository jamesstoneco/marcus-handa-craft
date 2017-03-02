jQuery(document).ready(function() {
	jQuery(document).foundation();
});

// home page hero button scroll interaction
jQuery(document).ready(function() {
  jQuery("#js-trigger-work").on('click', function() {
    jQuery('html, body').animate({
      scrollTop: $( $("#js-marker-work")).offset().top
    }, 1200);
  })
});