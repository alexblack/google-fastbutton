# Google FastButton

An implementation of [Google's FastButton javascript](http://code.google.com/mobile/articles/fast_buttons.html), to avoid the 300ms touch delay on Android and iOS devices.  Code forked from: http://stackoverflow.com/questions/6300136/trying-to-implement-googles-fast-button

- Doesn't break in IE6-8, Chrome 17, Firefox 11, or Windows Phone 7.5
- Touch support tested in Android 2.3 (Nexus S) and IOS 5 (iPad 2)
- google.fastbutton.js The javascript, no dependencies
- xui.google.fastbutton.js Provides a nice event handler using [XUI](http://xuijs.com/)
- jquery.google.fastbutton.js Provides a nice event handler using [jQuery](http://jquery.com/)
- Added a method destroy() to cleanup event handlers etc

## Usage
``` js
new FastButton(document.getElementById('your-button'), function() {
  alert('click');
});
````
## jQuery Usage

``` js
$('#your-button').fastClick(function(e) {
  alert('fast clicked!');
});
```

## XUI Usage

``` js
x$('#your-button').fastClick(function(e) {
  alert('fast clicked!');
});
```
