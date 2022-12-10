"use strict";
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordUser = void 0;
class DiscordUser {
    // public system ? boolean	whether the user is an Official Discord System user(part of the urgent message system)	identify
    // public mfa_enabled ? boolean	whether the user has two factor enabled on their account	identify
    // public banner ?	? string	the user's banner hash	identify
    // public accent_color ?	? integer	the user's banner color encoded as an integer representation of hexadecimal color code	identify
    // public locale ? string	the user's chosen language option	identify
    // public verified ? boolean	whether the email on this account has been verified	email
    // public email ?	? string	the user's email	email
    // public flags ? integer	the flags on a user's account	identify
    // public premium_type ? integer	the type of Nitro subscription on a user's account	identify
    // public public_flags ? integer	the public flags on a user's account	identify
    constructor(id, username, discriminator) {
        this.id = id;
        this.username = username;
        this.discriminator = discriminator;
    }
    static fromJson(json) {
        const newInst = new DiscordUser(json.id, json.username, json.discriminator);
        newInst.avatar = json.avatar;
        newInst.bot = json.bot;
        return newInst;
    }
    setActivity(activity) {
        const rejectedPromise = new Promise((resolve, reject) => {
            reject('.setActivity() is not functional yet');
          });
    }
}
exports.DiscordUser = DiscordUser;
