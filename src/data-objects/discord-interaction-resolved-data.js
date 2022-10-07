"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
exports.__esModule = true;
var DiscordInteractionResolvedData = /** @class */ (function () {
    function DiscordInteractionResolvedData() {
    }
    DiscordInteractionResolvedData.fromJson = function (json) {
        var newInst = new DiscordInteractionResolvedData();
        newInst.users = json.users;
        newInst.members = json.members;
        newInst.roles = json.roles;
        newInst.messages = json.messages;
        return newInst;
    };
    return DiscordInteractionResolvedData;
}());
exports["default"] = DiscordInteractionResolvedData;
