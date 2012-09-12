(function($) {
  $.event.special.fastClick = {
		setup: function () {
		    $(this).data('fastClick', new FastButton(this, $.event.special.fastClick.handler));
		},
		teardown: function () {
		   $(this).data('fastClick').destroy();
		   $(this).removeData('fastClick');
		},
		handler: function (e) {
			// convert native event to jquery event
			e = $.event.fix(e);
			e.type = 'fastClick';
		
			$.event.handle.apply(this, arguments);
		}
	};

	$.fn.fastClick = function(fn) {
		return $(this).each(function() {
			return fn ? $(this).bind("fastClick", fn) : $(this).trigger("fastClick");
		});
	};
}(jQuery));

