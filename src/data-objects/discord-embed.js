"use strict";
exports.__esModule = true;
exports.DiscordEmbed = void 0;
var discord_embed_author_1 = require("./discord-embed-author");
var discord_embed_field_1 = require("./discord-embed-field");
var discord_embed_footer_1 = require("./discord-embed-footer");
var discord_embed_image_1 = require("./discord-embed-image");
var DiscordEmbed = /** @class */ (function () {
    function DiscordEmbed() {
        this.fields = []; // Array of embed field objects	fields information
    }
    DiscordEmbed.prototype.setColor = function (color) {
        this.color = typeof color === 'string' ? Number(color) : color;
        return this;
    };
    DiscordEmbed.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    DiscordEmbed.prototype.setTitle = function (title) {
        this.title = title;
        return this;
    };
    DiscordEmbed.prototype.setAuthor = function (name, iconUrl, url, proxyIconUrl) {
        this.author = new discord_embed_author_1["default"](name, url, iconUrl, proxyIconUrl);
        return this;
    };
    DiscordEmbed.prototype.setImage = function (url, proxyUrl, height, width) {
        this.image = new discord_embed_image_1["default"](url, proxyUrl, height, width);
        return this;
    };
    DiscordEmbed.prototype.addField = function (name, value, inline) {
        var _a;
        (_a = this.fields) === null || _a === void 0 ? void 0 : _a.push(new discord_embed_field_1["default"](name, value, inline));
        return this;
    };
    DiscordEmbed.prototype.setFooter = function (text, iconUrl, proxyIconUrl) {
        this.footer = new discord_embed_footer_1["default"](text, iconUrl, proxyIconUrl);
        return this;
    };
    DiscordEmbed.prototype.setTimestamp = function () {
        this.timestamp = new Date().toISOString();
        return this;
    };
    return DiscordEmbed;
}());
exports.DiscordEmbed = DiscordEmbed;
