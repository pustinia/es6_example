"use strict";
/**
 * https://www.samsungsds.com/kr/insights/TypeScript.html
 * 1. build with tsc command
 * 2. transfort code to js
 * 3. run js code.
 */
var Add = /** @class */ (function () {
    function Add(x, y) {
        this.x = x;
        this.y = y;
    }
    Add.prototype.Display = function () {
        console.log(this.x, this.y);
    };
    return Add;
}());
var add = new Add(1, "test");
var message = "Hello World";
add.Display();
console.log(message);
//# sourceMappingURL=sample.js.map