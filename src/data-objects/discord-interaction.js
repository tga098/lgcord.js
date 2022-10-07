"use strict";
exports.__esModule = true;
exports.DiscordInteraction = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
var __1 = require("..");
var discord_interaction_data_1 = require("./discord-interaction-data");
var discord_interaction_response_data_1 = require("./discord-interaction-response-data");
var DiscordAPI = require("../api/discord-api");
var DiscordInteraction = /** @class */ (function () {
    function DiscordInteraction(id, application_id, type, token) {
        this.id = id;
        this.application_id = application_id;
        this.type = type;
        this.token = token;
    }
    DiscordInteraction.fromJson = function (json) {
        var newInst = new DiscordInteraction(json.id, json.application_id, json.type, json.token);
        newInst.data = json.data && discord_interaction_data_1["default"].fromJson(json.data);
        newInst.guild_id = json.guild_id;
        newInst.channel_id = json.channel_id;
        newInst.member = json.member && __1.DiscordGuildMember.fromJson(json.member);
        newInst.user = json.user && __1.DiscordUser.fromJson(json.user);
        newInst.version = json.version;
        newInst.message = json.message && __1.DiscordMessage.fromJson(json.message);
        return newInst;
    };
    DiscordInteraction.prototype.isButton = function () {
        var _a;
        return ((_a = this.data) === null || _a === void 0 ? void 0 : _a.component_type) == __1.DiscordComponentType.BUTTON;
    };
    DiscordInteraction.prototype.isAppCommand = function () {
        return this.type == __1.DiscordInteractionType.APPLICATION_COMMAND;
    };
    DiscordInteraction.prototype.update = function (data) {
        return DiscordAPI.interactionCallback(this.id, this.token, {
            type: __1.DiscordInteractionCallbackType.UPDATE_MESSAGE,
            data: data
        });
    };
    DiscordInteraction.prototype.respond = function (data) {
        return DiscordAPI.interactionCallback(this.id, this.token, {
            type: __1.DiscordInteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: data
        });
    };
    DiscordInteraction.prototype.respondText = function (message) {
        var data = new discord_interaction_response_data_1["default"]();
        data.content = message;
        return this.respond(data);
    };
    DiscordInteraction.prototype.sendMessageInChannel = function (message) {
        var _a;
        // -1? Should never call this if the channel_id is not set
        return DiscordAPI.createMessage((_a = this.channel_id) !== null && _a !== void 0 ? _a : -1, message);
    };
    DiscordInteraction.prototype.deferUpdate = function () {
        return DiscordAPI.interactionCallback(this.id, this.token, {
            type: __1.DiscordInteractionCallbackType.DEFERRED_UPDATE_MESSAGE
        });
    };
    return DiscordInteraction;
}());
exports.DiscordInteraction = DiscordInteraction;
