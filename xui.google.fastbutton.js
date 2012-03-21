/** Integrate google.fastbutton.js with XUI */
(function(x$) {
  x$.fn.fastClick = function(handler, useCapture) {  
    return this.each(function(element ,index, xui) { 
      new FastButton(xui[index], handler, useCapture);
    });
  }
}(xui));

