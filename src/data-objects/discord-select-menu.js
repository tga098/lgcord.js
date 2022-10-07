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
exports.DiscordSelectMenu = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
var discord_component_types_1 = require("../custom-types/discord-component-types");
var discord_component_1 = require("./discord-component");
var DiscordSelectMenu = /** @class */ (function (_super) {
    __extends(DiscordSelectMenu, _super);
    function DiscordSelectMenu() {
        var _this = _super.call(this) || this;
        _this.disabled = false; // Whether the component is disabled, default false
        _this.options = []; // The choices in the select, max 25
        _super.prototype.type = discord_component_types_1.DiscordComponentType.SELECT_MENU;
        return _this;
    }
    DiscordSelectMenu.prototype.addOptions = function () {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        this.options = options;
        return this;
    };
    DiscordSelectMenu.prototype.setCustomId = function (id) {
        this.custom_id = id;
        return this;
    };
    return DiscordSelectMenu;
}(discord_component_1["default"]));
exports.DiscordSelectMenu = DiscordSelectMenu;
