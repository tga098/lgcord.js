"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
Object.defineProperty(exports, "__esModule", { value: true });
class DiscordApplication {
    // bot_require_code_grant	boolean	when true the app's bot will only join upon completion of the full oauth2 code grant flow
    // terms_of_service_url?	string	the url of the app's terms of service
    // privacy_policy_url?	string	the url of the app's privacy policy
    // owner?	partial user object	partial user object containing info on the owner of the application
    // summary	string	if this application is a game sold on Discord, this field will be the summary field for the store page of its primary sku
    // verify_key	string	the hex encoded key for verification in interactions and the GameSDK's GetTicket
    // team	?team object	if the application belongs to a team, this will be a list of the members of that team
    // guild_id?	snowflake	if this application is a game sold on Discord, this field will be the guild to which it has been linked
    // primary_sku_id?	snowflake	if this application is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists
    // slug?	string	if this application is a game sold on Discord, this field will be the URL slug that links to the store page
    // cover_image?	string	the application's default rich presence invite cover image hash
    // flags?	integer	the application's public flags
    constructor(id, name, description, bot_public) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.bot_public = bot_public;
    }
    static fromJson(json) {
        const newInst = new DiscordApplication(json.id, json.name, json.description, json.bot_public);
        newInst.icon = json.icon;
        return newInst;
    }
}
exports.default = DiscordApplication;
