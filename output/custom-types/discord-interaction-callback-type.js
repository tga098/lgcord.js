"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordInteractionCallbackType = void 0;
var DiscordInteractionCallbackType;
(function (DiscordInteractionCallbackType) {
    /**
     * ACK a Ping
     */
    DiscordInteractionCallbackType[DiscordInteractionCallbackType["PONG"] = 1] = "PONG";
    /**
     * A button object
     */
    DiscordInteractionCallbackType[DiscordInteractionCallbackType["CHANNEL_MESSAGE_WITH_SOURCE"] = 4] = "CHANNEL_MESSAGE_WITH_SOURCE";
    /**
     * ACK an interaction and edit a response later, the user sees a loading state
     */
    DiscordInteractionCallbackType[DiscordInteractionCallbackType["DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE"] = 5] = "DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE";
    /**
     * For components, ACK an interaction and edit the original message later; the user does not see a loading state
     */
    DiscordInteractionCallbackType[DiscordInteractionCallbackType["DEFERRED_UPDATE_MESSAGE"] = 6] = "DEFERRED_UPDATE_MESSAGE";
    /**
     * For components, edit the message the component was attached to
     */
    DiscordInteractionCallbackType[DiscordInteractionCallbackType["UPDATE_MESSAGE"] = 7] = "UPDATE_MESSAGE";
})(DiscordInteractionCallbackType = exports.DiscordInteractionCallbackType || (exports.DiscordInteractionCallbackType = {}));
