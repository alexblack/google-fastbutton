/** Integrate google.fastbutton.js with XUI */
(function(x$) {
  x$.fn.fastClick = function(handler, useCapture) {
    return this.each(function(element, index, xui) {
      element.fastButton = new FastButton(xui[index], handler, useCapture);
    });
  }
  
  x$.fn.unFastClick = function() {    
    return this.each(function(element, index, xui) {
      element.fastButton.destroy();
      element.fastButton = null;
    });
  }
}(xui));

