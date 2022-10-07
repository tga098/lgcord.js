"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DiscordMessageActionRow = void 0;
var discord_component_types_1 = require("../custom-types/discord-component-types");
var discord_component_1 = require("./discord-component");
var DiscordMessageActionRow = /** @class */ (function (_super) {
    __extends(DiscordMessageActionRow, _super);
    function DiscordMessageActionRow() {
        var _this = _super.call(this) || this;
        _this.components = []; // A list of child components
        _super.prototype.type = discord_component_types_1.DiscordComponentType.ACTION_ROW;
        return _this;
    }
    DiscordMessageActionRow.prototype.addComponents = function () {
        var components = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            components[_i] = arguments[_i];
        }
        this.components = components;
        return this;
    };
    return DiscordMessageActionRow;
}(discord_component_1["default"]));
exports.DiscordMessageActionRow = DiscordMessageActionRow;
