$(document).foundation();
/* home page hero button scroll interaction */
$(document).ready(function() {
  $("#js-trigger-work").on('click', function() {
    $('html, body').animate({
      scrollTop: $( $("#js-marker-work")).offset().top
    }, 1200);
  })
});
// jQuery(document).ready(function() {
//   jQuery(document).foundation();
//   /* home page hero button scroll interaction */
//   jQuery("#js-trigger-work").on('click', function() {
//     jQuery('html, body').animate({
//       scrollTop: $( $("#js-marker-work")).offset().top
//     }, 1200);
//   })
// });