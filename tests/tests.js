var testButton = new FastButton(
    document.getElementById("button"),
    function handler() {
        var window.globalVar = true;
    }
);

test("element", function() {
    equal(testButton.element, document.getElementById("button"));

    equal(window.globalVar);
});
