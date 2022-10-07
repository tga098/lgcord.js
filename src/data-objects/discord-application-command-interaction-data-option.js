"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
exports.__esModule = true;
var DiscordApplicationCommandInteractionDataOption = /** @class */ (function () {
    function DiscordApplicationCommandInteractionDataOption(name, type) {
        this.name = name;
        this.type = type;
    }
    DiscordApplicationCommandInteractionDataOption.fromJson = function (json) {
        var _a;
        var newInst = new DiscordApplicationCommandInteractionDataOption(json.name, json.type);
        newInst.value = json.value;
        newInst.options = (_a = json.options) === null || _a === void 0 ? void 0 : _a.map(DiscordApplicationCommandInteractionDataOption.fromJson);
        newInst.focused = json.focused;
        return newInst;
    };
    return DiscordApplicationCommandInteractionDataOption;
}());
exports["default"] = DiscordApplicationCommandInteractionDataOption;
