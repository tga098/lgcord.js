"use strict";
exports.__esModule = true;
var discord_application_command_interaction_data_option_1 = require("./discord-application-command-interaction-data-option");
var discord_interaction_resolved_data_1 = require("./discord-interaction-resolved-data");
var DiscordInteractionData = /** @class */ (function () {
    function DiscordInteractionData(id, name, type) {
        this.options = []; // The params + values from the user
        this.values = []; // The values the user selected
        this.id = id;
        this.name = name;
        this.type = type;
    }
    DiscordInteractionData.fromJson = function (json) {
        var _a, _b;
        var newInst = new DiscordInteractionData(json.id, json.name, json.type);
        newInst.resolved = json.resolved && discord_interaction_resolved_data_1["default"].fromJson(json.resolved);
        newInst.options = (_b = (_a = json.options) === null || _a === void 0 ? void 0 : _a.map(discord_application_command_interaction_data_option_1["default"].fromJson)) !== null && _b !== void 0 ? _b : [];
        newInst.custom_id = json.custom_id;
        newInst.component_type = json.component_type;
        newInst.values = json.values;
        newInst.target_id = json.target_id;
        return newInst;
    };
    return DiscordInteractionData;
}());
exports["default"] = DiscordInteractionData;
