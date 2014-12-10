(function($){
	$(function(){
		var colorDropdown = $('#select_22');
		
		var options = $('option',colorDropdown);

		$('.product-image-thumbs img').each(function(){
			var img = $(this);
			var colorName = img.attr('alt');
			if(colorName.length > 0){
				console.log(colorName);
				var labelContainer = $('<div class="imageLabel">' + colorName + '</div>');
				img.parent().append(labelContainer);
			}
		});

		$('.product-image-thumbs a').click(function(){
			var img = $('img',this);

			var colorName = img.attr('alt');

			options.each(function(){
				var option = $(this);

				if($.trim(option.text()) == $.trim(colorName)){
					colorDropdown.val(option.attr('value'));
				}

			});
		});
	});
})(jQuery)
