"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordInteraction = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const __1 = require("..");
const discord_interaction_data_1 = __importDefault(require("./discord-interaction-data"));
const discord_interaction_response_data_1 = __importDefault(require("./discord-interaction-response-data"));
const DiscordAPI = __importStar(require("../api/discord-api"));
class DiscordInteraction {
    constructor(id, application_id, type, token) {
        this.id = id;
        this.application_id = application_id;
        this.type = type;
        this.token = token;
    }
    static fromJson(json) {
        const newInst = new DiscordInteraction(json.id, json.application_id, json.type, json.token);
        newInst.data = json.data && discord_interaction_data_1.default.fromJson(json.data);
        newInst.guild_id = json.guild_id;
        newInst.channel_id = json.channel_id;
        newInst.member = json.member && __1.DiscordGuildMember.fromJson(json.member);
        newInst.user = json.user && __1.DiscordUser.fromJson(json.user);
        newInst.version = json.version;
        newInst.message = json.message && __1.DiscordMessage.fromJson(json.message);
        return newInst;
    }
    isButton() {
        return this.data?.component_type == __1.DiscordComponentType.BUTTON;
    }
    isAppCommand() {
        return this.type == __1.DiscordInteractionType.APPLICATION_COMMAND;
    }
    update(data) {
        return DiscordAPI.interactionCallback(this.id, this.token, {
            type: __1.DiscordInteractionCallbackType.UPDATE_MESSAGE,
            data
        });
    }
    respond(data) {
        return DiscordAPI.interactionCallback(this.id, this.token, {
            type: __1.DiscordInteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
            data
        });
    }
    respondText(message) {
        const data = new discord_interaction_response_data_1.default();
        data.content = message;
        return this.respond(data);
    }
    sendMessageInChannel(message) {
        // -1? Should never call this if the channel_id is not set
        return DiscordAPI.createMessage(this.channel_id ?? -1, message);
    }
    deferUpdate() {
        return DiscordAPI.interactionCallback(this.id, this.token, {
            type: __1.DiscordInteractionCallbackType.DEFERRED_UPDATE_MESSAGE
        });
    }
}
exports.DiscordInteraction = DiscordInteraction;
