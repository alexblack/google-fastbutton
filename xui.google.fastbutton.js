/** Integrate google.fastbutton.js with XUI */
(function (factory) {
  if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require('xui'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['xui'], factory);
  } else {
    factory(xui);
  }
}(function(x$) {
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
}));

