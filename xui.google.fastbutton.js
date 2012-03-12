/** Integrate google.fastbutton.js with XUI */
(function(x$) {
  x$.fn.fastClick = function(handler) {  
    return this.each(function( element , index , xui) { 
      new FastButton(xui[index], handler);
    });
  }
}(xui));
