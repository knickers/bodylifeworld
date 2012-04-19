jQuery(function($) {
	// Helper functions to keep track of and resize the sign tabs
	var addActive = function(e) {
		$(e).addClass('active')
			.animate({'scale': 1.0, 'translateY': '-=10px', 'opacity': 1});
	},  removeActive = function(e) {
		$(e).removeClass('active')
			.animate({'scale': 0.8, 'translateY': '+=10px', 'opacity': 0.75}, function() {
				$(this).css({'opacity': ''});
			});
	};
	
	// Helper function to load a pages content
	var load = function(url) {
		$('.page').load(url);
	};
	
	// Event handler for the address changes
	$.address.change(function(e) {
		var self = $('[rel="address:' + e.value + '"]');
		$('.page').load(self.attr('href'));
		$.address.title('Body Life World: ' + self.text());
		self.click();
	});
	$.address.strict(false);
	
	// Initialize all the sign tabs
	$('.sign.home').css({'scale':1.0, 'rotate':'6deg', 'translateY':'-=10px'});
	$('.sign.products').css({'scale': 0.8, 'rotate': '2deg'});
	$('.sign.events').css({'scale': 0.8, 'rotate': '-2deg'});
	$('.sign.affiliates').css({'scale': 0.8, 'rotate': '-6deg'});
	
	// Click handler for all the sign tabs
	$('.sign').click(function() {
		if (!$(this).hasClass('active')) {
			removeActive($('.sign.active'));
			addActive(this);
			load($(this).attr('href'));
		}
		return false;
	});
});
