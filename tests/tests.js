(function (test, equal) {
    "use strict";

    test("element", function() {
        var button = document.getElementById("button");

        var handler = function handler() {
            window.globalVar = true;
        };

        var testButton = new window.FastButton(button, handler);

        // equal(testButton.events.length, 1);
        equal(testButton.element, button);
        equal(testButton.handler, handler);

        var event = document.createEvent("HTMLEvents");
        event.initEvent("click", true, false);
        button.dispatchEvent(event);

        equal(window.globalVar, true);

        testButton.destroy();

        equal(testButton.element, null);
        equal(testButton.events, null);
        equal(testButton.handler, null);
        equal(testButton.touchEvents, null);
    });

}(window.test, window.equal));

