(function($){
	$(function(){
		var colorDropdown = $('#select_22');
		
		var options = $('option',colorDropdown);

		$('.product-image-thumbs img').each(function(){
			var img = $(this);
			var colorName = img.attr('alt');
			if(colorName.length > 0){
				console.log(colorName);
				var span = $('<span class="imageLabel">' + colorName + '</span>');
				img.parent().append(span);
				/*options.each(function(){
					var option = $(this);

					if(option.text() == colorName){

					}

				});*/
			}
		});
	});
})(jQuery)
