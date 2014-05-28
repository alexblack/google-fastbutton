/** Integrate google.fastbutton.js with XUI */
(function(x$) {
  "use strict";

  x$.fn.fastClick = function(handler, useCapture) {
    return this.each(function(element, index, xui) {
      element.fastButton = new window.FastButton(xui[index], handler, useCapture);
    });
  };

  x$.fn.unFastClick = function() {
    return this.each(function (element) {
      element.fastButton.destroy();
      element.fastButton = null;
    });
  };
}(xui));

