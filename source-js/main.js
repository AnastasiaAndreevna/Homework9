//popup
jQuery(function () {
  jQuery('#modal-trigger').click(function () {
    jQuery('#modal_1').fadeIn(600)
  })

  jQuery(function () {
    jQuery('#close').click(function () {
      jQuery('#modal_1').fadeOut(300)
    })
  })
})

//sliders
jQuery(window).load(function() {
  jQuery('.flexslider').flexslider({
    animation: 'slide',
    controlNav: false,
  })
})

