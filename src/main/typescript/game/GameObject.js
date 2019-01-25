"use strict";
exports.__esModule = true;
var GameObject = /** @class */ (function () {
    function GameObject(x, y) {
        this.posX = x;
        this.posY = y;
    }
    GameObject.prototype.interact = function () {
        console.log("Interacting with GameObject");
    };
    GameObject.prototype.draw = function () {
        console.log("Drawing GameObject at position: " + this.posX + " " + this.posY);
    };
    return GameObject;
}());
exports["default"] = GameObject;
