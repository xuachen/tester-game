"use strict";
exports.__esModule = true;
var GameObject_1 = require("./GameObject");
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.main = function () {
        var block = new GameObject_1["default"](10, 10);
        block.interact();
    };
    return App;
}());
