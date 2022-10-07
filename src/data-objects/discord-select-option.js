"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
exports.__esModule = true;
exports.DiscordSelectOption = void 0;
var discord_emoji_1 = require("./discord-emoji");
var DiscordSelectOption = /** @class */ (function () {
    function DiscordSelectOption(label, value) {
        this.label = label;
        this.value = value;
    }
    DiscordSelectOption.fromJson = function (json) {
        var newInst = new DiscordSelectOption(json.label, json.value);
        newInst.description = json.description;
        newInst.emoji = json.emoji && discord_emoji_1.DiscordEmoji.fromJson(json.emoji);
        newInst["default"] = json["default"];
        return newInst;
    };
    DiscordSelectOption.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    DiscordSelectOption.prototype.setEmoji = function (emoji) {
        this.emoji = emoji;
        return this;
    };
    DiscordSelectOption.prototype.setDefault = function (def) {
        if (def === void 0) { def = true; }
        this["default"] = def;
        return this;
    };
    return DiscordSelectOption;
}());
exports.DiscordSelectOption = DiscordSelectOption;
