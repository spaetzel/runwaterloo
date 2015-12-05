$(function(){

	// Instantiate MixItUp:

	$('#races').mixItUp();

  $('.filter').click(function(){
    $('.filter').removeClass('active');
    $(this).addClass('active');
  })

});
