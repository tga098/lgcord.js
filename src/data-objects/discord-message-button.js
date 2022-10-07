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
exports.DiscordMessageButton = void 0;
var discord_component_types_1 = require("../custom-types/discord-component-types");
var discord_component_1 = require("./discord-component");
var DiscordMessageButton = /** @class */ (function (_super) {
    __extends(DiscordMessageButton, _super);
    function DiscordMessageButton() {
        var _this = _super.call(this) || this;
        _this.disabled = false; // Whether the component is disabled, default false
        _super.prototype.type = discord_component_types_1.DiscordComponentType.BUTTON;
        return _this;
    }
    DiscordMessageButton.prototype.setCustomId = function (id) {
        this.custom_id = id;
        return this;
    };
    DiscordMessageButton.prototype.setLabel = function (label) {
        this.label = label;
        return this;
    };
    DiscordMessageButton.prototype.setStyle = function (style) {
        this.style = style;
        return this;
    };
    return DiscordMessageButton;
}(discord_component_1["default"]));
exports.DiscordMessageButton = DiscordMessageButton;
