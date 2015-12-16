(function($){
	$(function(){
		
		var addInitialsImage = function(){
			var notes = $('.note');

			notes.each(function(){
				
				var note = $(this);

				if(note.text() == 'Maximum number of characters: 3'){
					note.append('<img src="/images/initials.jpg" class="initials-image">');
				}
			});
		}
		
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

			imageThumbContainer.empty();

			$('.zoomContainer').remove();
			
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

					thumb.on('mouseenter',function(){
						var thumbZoom = thumb.clone();
						thumbZoom.addClass('thumb-zoom');
						thumbZoom.css({
							'top':thumb.position().top + 'px',
							'left':thumb.position().left + 'px',
							'margin-left':thumb.css('margin-left')
						});

						nextImageThumbItem.append(thumbZoom);

					});
					nextImageThumbItem.on('mouseleave',function(){
						$('.thumb-zoom').remove();
					});

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

		}

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

			colorDropdown.change(function(){

				var optionText = $('option[value=' + $(this).val() + ']',this).text();

				var selector = '.thumb-link[title="' + $.trim(optionText) + '"]';

				$(selector).click();
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

		//$('.thumb-link').off('click');

		var showBuckleImages = function(buckleImageMap){
			$('.options-list label').each(function(){
				var optionLabel = $(this);

				var buckle = buckleImageMap[optionLabel.text()];

				if(buckle){
					var imagePath = '/images/buckle-images/' + buckle.filename;
					optionLabel.append('<img src="' + imagePath + '">');
				}
				
			});
		}

		var buckleResult = $.get('/images/buckle-images/map.json',showBuckleImages);

		addInitialsImage();
	});
})(jQuery);


(function(window){
	var hrefparts = window.location.href.split('/');
	
	if(hrefparts[hrefparts.length - 2] == 'onepage'){
		window.onbeforeunload = function(e) {
			console.log(e);
			console.log(checkout);
			if(checkout.currentStep != 'review' && checkout.currentStep != 'login'){
				return 'If you continue, any information you have entered on the checkout page will be lost.\n\n If you need to make changes to any information you have entered use the Edit links next to each section.';
			}
		}
	}

})(window);
