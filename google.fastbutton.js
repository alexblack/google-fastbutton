var evt = {
  /** For IE8 and earlier compatibility: https://developer.mozilla.org/en/DOM/element.addEventListener */
  addListenener: function(el, type, listener, useCapture) {
    if (el.addEventListener) {
      el.evt.addListener(type, listener, useCapture);
    } else if (el.attachEvent)  {
      el.attachEvent(type, listener);
    }
  }
};
  
(function() {

  /** 
   * From: http://code.this.com/mobile/articles/fast_buttons.html
   * Also see: http://stackoverflow.com/questions/6300136/trying-to-implement-googles-fast-button 
   */
 
  /* Construct the FastButton with a reference to the element and click handler. */
  this.FastButton = function(element, handler) {
    //console.log('fastbutton init');
    this.element = element;
    this.handler = handler;
    //console.log(this);
    evt.addListener(element, 'touchstart', this, false);
    evt.addListener(element, 'click', this, false);
  };
  
  /* acts as an event dispatcher */
  this.FastButton.prototype.handleEvent = function(event) {
    switch (event.type) {
      case 'touchstart': this.onTouchStart(event); break;
      case 'touchmove': this.onTouchMove(event); break;
      case 'touchend': this.onClick(event); break;
      case 'click': this.onClick(event); break;
    }
  };
  
  /* Save a reference to the touchstart coordinate and start listening to touchmove and
   touchend events. Calling stopPropagation guarantees that other behaviors don’t get a
   chance to handle the same click event. This is executed at the beginning of touch. */
  this.FastButton.prototype.onTouchStart = function(event) {
    event.stopPropagation();
    evt.addListener(this.element, 'touchend', this, false);
    evt.addListener(document.body, 'touchmove', this, false);
    this.startX = event.touches[0].clientX;
    this.startY = event.touches[0].clientY;
  };
  
  /* When /if touchmove event is invoked, check if the user has dragged past the threshold of 10px. */
  this.FastButton.prototype.onTouchMove = function(event) {
    if (Math.abs(event.touches[0].clientX - this.startX) > 10 || Math.abs(event.touches[0].clientY - this.startY) > 10) {
      this.reset(); //if he did, then cancel the touch event
    }
  };
  
  /* Invoke the actual click handler and prevent ghost clicks if this was a touchend event. */
  this.FastButton.prototype.onClick = function(event) {
    event.stopPropagation();
    this.reset();
    var result = this.handler(event);
    if (event.type == 'touchend') {
      clickbuster.preventGhostClick(this.startX, this.startY);
    }
    return result;
  };
  
  this.FastButton.prototype.reset = function() {
    this.element.removeEventListener('touchend', this, false);
    document.body.removeEventListener('touchmove', this, false);
  };
  
  this.clickbuster = function() {
    //console.log('init clickbuster');
  }
  
  /* Call preventGhostClick to bust all click events that happen within 25px of
   the provided x, y coordinates in the next 2.5s. */
  this.clickbuster.preventGhostClick = function(x, y) {
    clickbuster.coordinates.push(x, y);
    window.setTimeout(this.clickbuster.pop, 2500);
  };
  
  this.clickbuster.pop = function() {
    this.clickbuster.coordinates.splice(0, 2);
  };
  
  /* If we catch a click event inside the given radius and time threshold then we call
   stopPropagation and preventDefault. Calling preventDefault will stop links
   from being activated. */
  this.clickbuster.onClick = function(event) {
    for (var i = 0; i < clickbuster.coordinates.length; i += 2) {
      //console.log(this);
      var x = clickbuster.coordinates[i];
      var y = clickbuster.coordinates[i + 1];
      if (Math.abs(event.clientX - x) < 25 && Math.abs(event.clientY - y) < 25) {
        event.stopPropagation();
        event.preventDefault();
      }
    }
  };  
})(this);


evt.addListener(document, 'click', clickbuster.onClick, true);
clickbuster.coordinates = [];
