"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
exports.__esModule = true;
exports.DiscordApplicationCommandOptionChoiceStructure = void 0;
var DiscordApplicationCommandOptionChoiceStructure = /** @class */ (function () {
    function DiscordApplicationCommandOptionChoiceStructure(name, value) {
        this.name = name;
        this.value = value;
    }
    DiscordApplicationCommandOptionChoiceStructure.fromJson = function (json) {
        var newInst = new DiscordApplicationCommandOptionChoiceStructure(json.name, json.value);
        return newInst;
    };
    return DiscordApplicationCommandOptionChoiceStructure;
}());
exports.DiscordApplicationCommandOptionChoiceStructure = DiscordApplicationCommandOptionChoiceStructure;
