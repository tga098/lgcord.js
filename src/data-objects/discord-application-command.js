"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
exports.__esModule = true;
exports.DiscordApplicationCommand = void 0;
var discord_application_command_type_1 = require("../custom-types/discord-application-command-type");
var discord_application_command_option_1 = require("./discord-application-command-option");
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
var DiscordApplicationCommand = /** @class */ (function () {
    function DiscordApplicationCommand(application_id, name, description) {
        this.options = []; // The parameters for the command, max 25	CHAT_INPUT
        this.application_id = application_id;
        this.name = name;
        this.description = description;
        this.type = discord_application_command_type_1.DiscordApplicationCommandType.CHAT_INPUT;
    }
    DiscordApplicationCommand.fromJson = function (json) {
        var _a, _b;
        var newInst = new DiscordApplicationCommand(json.application_id, json.name, json.description);
        newInst.id = json.id;
        newInst.type = json.type;
        newInst.guild_id = json.guild_id;
        newInst.options = (_b = (_a = json.options) === null || _a === void 0 ? void 0 : _a.map(discord_application_command_option_1.DiscordApplicationCommandOption.fromJson)) !== null && _b !== void 0 ? _b : [];
        newInst.default_permission = json.default_permission;
        newInst.version = json.version;
        return newInst;
    };
    DiscordApplicationCommand.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    DiscordApplicationCommand.prototype.addOption = function () {
        var _a;
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        (_a = this.options).push.apply(_a, options);
        return this;
    };
    return DiscordApplicationCommand;
}());
exports.DiscordApplicationCommand = DiscordApplicationCommand;
