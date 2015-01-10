(function($){
	$(function(){
		var colorDropdown = $('#select_22');
		
		var options = $('option',colorDropdown);

		$('.product-image-thumbs img').each(function(){
			var img = $(this);
			var colorName = img.attr('alt');
			if(colorName.length > 0){
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

		/*var ImageMap = {};

		$('.thumb-link img').each(function(){
			var img = $(this);
			var altText = img.attr('alt');

			var imgSrc = img.attr('src');

			var pathArray = imgSrc.split("/");

			var fileName = pathArray[pathArray.length - 1];

			ImageMap[altText] = {
				"filename":fileName
			};
		});

		console.log(JSON.stringify(ImageMap));*/
	});
})(jQuery);
