$(document).ready( function()
				  {


	$('body').on('mouseenter', '.msgdebug', function()
						  {
//							console.log('mouseenter');
							
							var o = $(this);
							
							if(o.find('.msgdebughop').length<1)
							{
								o.prepend("<div class='msgdebughop'>"+o.attr('rel')+"</div>");
							}
							
							o.find('.msgdebughop').show();
							
							$('#msgdebuglast').html(o.attr('rel'));
							
						  }
						  );
	
	$('body').on('mouseleave', '.msgdebug',
						  function()
						  {
	//						console.log('mouseleave');
							$(this).find('.msgdebughop').hide();
						  }
						  );
	 
	if($('.msgdebug').length)
	{
		$('body').append('<div id="msgdebuglast" class="msgdebuglast"></div>');
	}
	
});