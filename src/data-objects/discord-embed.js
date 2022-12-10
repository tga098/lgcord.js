"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordEmbed = void 0;
const discord_embed_author_1 = __importDefault(require("./discord-embed-author"));
const discord_embed_field_1 = __importDefault(require("./discord-embed-field"));
const discord_embed_footer_1 = __importDefault(require("./discord-embed-footer"));
const discord_embed_image_1 = __importDefault(require("./discord-embed-image"));
class DiscordEmbed {
    constructor() {
        /**
         * Array of embed field objects fields information
         */
        this.fields = [];
    }
    setColor(color) {
        this.color = typeof color === 'string' ? Number(color) : color;
        return this;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    setAuthor(name, iconUrl, url, proxyIconUrl) {
        this.author = new discord_embed_author_1.default(name, url, iconUrl, proxyIconUrl);
        return this;
    }
    setImage(url, proxyUrl, height, width) {
        this.image = new discord_embed_image_1.default(url, proxyUrl, height, width);
        return this;
    }
    addField(name, value, inline) {
        this.fields?.push(new discord_embed_field_1.default(name, value, inline));
        return this;
    }
    setFooter(text, iconUrl, proxyIconUrl) {
        this.footer = new discord_embed_footer_1.default(text, iconUrl, proxyIconUrl);
        return this;
    }
    setTimestamp() {
        this.timestamp = new Date().toISOString();
        return this;
    }
}
exports.DiscordEmbed = DiscordEmbed;
