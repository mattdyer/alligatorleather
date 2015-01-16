(function($){
	$(function(){
		
		var getColorDropdown = function(){
			var optionLabels = $('.product-options label');

			var colorDropdown;
			var colorLabel;

			optionLabels.each(function(){
				if($(this).text().match(new RegExp('Color / Finish'))){
					colorLabel = $(this);
					return false;
				}
			});

			if(colorLabel){
				colorDropdown = colorLabel.parent().next().find('select');
			}
			return colorDropdown;
		}

		var makeImagesFromOptions = function(options){
			
			var imageThumbContainer = $('.product-image-thumbs');
			var imageThumbItem = $('.product-image-thumbs li').first();

			var largeImageContainer = $('.product-image-gallery');
			var largeImage = largeImageContainer.find('img').first();

			//largeImageContainer.empty();
			imageThumbContainer.empty();

			options.each(function(){
				var option = $(this);
				var colorName = $.trim(option.text());

				if(imageMap[colorName]){
					var color = imageMap[colorName];
					if(color.displayname){
						colorName = color.displayname;
					}
					var nextImageThumbItem = imageThumbItem.clone();

					var imageSrc = '/images/color-images/' + color.filename;

					var thumbLink = nextImageThumbItem.find('.thumb-link');

					thumbLink.attr('title',colorName);

					var thumb = nextImageThumbItem.find('img');
					thumb.attr('src',imageSrc);
					thumb.on('load',function(){
						var imageHeight = $(this).height();
						$(this).css({'margin':parseInt((75 - imageHeight) / 2,10) + 'px auto'});
					});
					thumb.attr('alt',colorName);
					thumb.removeAttr('height');

					var imageLabel = nextImageThumbItem.find('.imageLabel');
					
					if(imageLabel.length > 0){
						imageLabel.text(colorName);	
					}else{
						var labelContainer = $('<div class="imageLabel">' + colorName + '</div>');
						thumb.parent().append(labelContainer);
					}
					
					imageThumbContainer.append(nextImageThumbItem);
					
					var nextImage = largeImage.clone();

					nextImage.removeAttr('id');
					nextImage.attr('src',imageSrc);
					nextImage.removeClass('visible');

					largeImageContainer.append(nextImage);

					nextImageThumbItem.click(function(){
						$('.product-image-gallery img').removeClass('visible');
						nextImage.addClass('visible');
					});
				}
			});

			//$('.product-image-thumbs img').first().click();
		}

		//var colorDropdown = $('#select_22');

		var colorDropdown = getColorDropdown();
		

		if(colorDropdown){
			var options = $('option',colorDropdown);
			var imageMap;

			$.get('/images/color-images/map.json',function(data){
				imageMap = data;
				makeImagesFromOptions(options);
			});

			$('.product-image-thumbs').on('click','a',function(){
				var img = $('img',this);

				var colorName = img.attr('alt');

				options.each(function(){
					var option = $(this);

					if($.trim(option.text()) == $.trim(colorName)){
						colorDropdown.val(option.attr('value'));
					}

				});
			});
		}

		$('.product-image-thumbs img').each(function(){
			var img = $(this);
			var colorName = img.attr('alt');
			if(colorName.length > 0){
				var labelContainer = $('<div class="imageLabel">' + colorName + '</div>');
				img.parent().append(labelContainer);
			}
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
