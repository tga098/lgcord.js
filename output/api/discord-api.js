"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGlobalApplicationCommand = exports.deleteAllReactions = exports.deleteUserReaction = exports.addReaction = exports.editMessage = exports.createMessage = exports.interactionCallback = exports.getGatewayBot = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const node_fetch_1 = __importDefault(require("node-fetch"));
const discord_message_1 = require("../data-objects/discord-message");
const __1 = require("..");
const discord_gateway_bot_info_1 = require("../data-objects/discord-gateway-bot-info");
const URL_BASE = 'https://discord.com/api/v8';
let requestQueue = Promise.resolve();
let requestQueueLen = 0;
const bucketMap = {};
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function sendFetch(url, urlGroup, init) {
    return new Promise((resolve, reject) => queueReq(url, urlGroup, resolve, reject, init));
}
function queueReq(url, urlGroup, resolve, reject, init) {
    requestQueueLen++;
    requestQueue = requestQueue.then(async () => await processQueue(url, urlGroup, resolve, reject, init)).finally(() => requestQueueLen--);
}
async function processQueue(url, urlGroup, resolve, reject, init) {
    if (bucketMap[urlGroup]) {
        const bucketInfo = bucketMap[urlGroup];
        if (bucketInfo.remain == 0) {
            const now = Date.now();
            if (now <= (bucketInfo.resetTime + 2) * 1000) {
                const holdTime = ((bucketInfo.resetTime + 2) * 1000) - now;
                setTimeout(() => {
                    queueReq(url, urlGroup, resolve, reject, init);
                }, holdTime);
                return;
            }
        }
    }
    let globalWait = -1;
    const resp = await (0, node_fetch_1.default)(`${URL_BASE}${url}`, init).then(async (r) => {
        const bucket = r.headers.get('x-ratelimit-bucket');
        const oldBucket = bucketMap[urlGroup]?.bucket;
        bucketMap[urlGroup] = {
            bucket: bucket,
            limit: parseInt(r.headers.get('x-ratelimit-limit') ?? '0'),
            remain: parseInt(r.headers.get('x-ratelimit-remaining') ?? '0'),
            resetTime: parseInt(r.headers.get('x-ratelimit-reset') ?? '0'),
            resetAfter: parseInt(r.headers.get('x-ratelimit-reset-after') ?? '0'),
        };
        if (oldBucket && oldBucket !== bucket)
            console.log('ERROR! Bucket mismatch! ', urlGroup, bucketMap[urlGroup].bucket, bucket);
        if (r.headers.get('X-RateLimit-Global'))
            await resp.json().then(json => globalWait = json.retry_after * 1000);
        if (r.headers.get('X-RateLimit-Scope')) {
            console.log('Rate limit! ', r.headers.get('X-RateLimit-Scope'));
            console.log('\tInfo: ', bucketMap[urlGroup]);
            console.log('\tReq: ', `${URL_BASE}${url}`);
            console.log('\tGroup: ', urlGroup);
        }
        return r;
    });
    if (globalWait != -1)
        await timeout(globalWait);
    resolve(resp);
}
function getGatewayBot() {
    const url = '/gateway/bot';
    return sendFetch(url, url, {
        method: 'GET',
        headers: {
            'authorization': `Bot ${__1.Client.token}`,
            'Content-Type': 'application/json',
        }
    }).then(resp => {
        if (resp.ok)
            return resp.json().then(json => new discord_gateway_bot_info_1.DiscordGatewayBotInfo(json));
        return resp.json().then(json => { throw new __1.DiscordAPIError(json.code, json.message, json.errors, url); });
    });
}
exports.getGatewayBot = getGatewayBot;
function interactionCallback(interactionId, interactionToken, data) {
    const url = `${URL_BASE}/interactions/${interactionId}/${interactionToken}/callback`;
    return (0, node_fetch_1.default)(url, {
        method: 'POST',
        headers: {
            'authorization': `Bot ${__1.Client.token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(resp => {
        if (resp.ok)
            return new Promise(resolve => resolve());
        return resp.json().then(json => { throw new __1.DiscordAPIError(json.code, json.message, json.errors, url); });
    });
}
exports.interactionCallback = interactionCallback;
function createMessage(channelId, message) {
    const url = `/channels/${channelId}/messages`;
    return sendFetch(url, `/channels/${channelId}/messages/create`, {
        method: 'POST',
        headers: {
            'authorization': `Bot ${__1.Client.token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    }).then(resp => {
        if (resp.ok)
            return resp.json().then(discord_message_1.DiscordMessage.fromJson);
        return resp.json().then(json => { throw new __1.DiscordAPIError(json.code, json.message, json.errors, url); });
    });
}
exports.createMessage = createMessage;
function editMessage(channelId, messagelId, message) {
    const url = `/channels/${channelId}/messages/${messagelId}`;
    return sendFetch(url, `/channels/${channelId}/messages/edit`, {
        method: 'PATCH',
        headers: {
            'authorization': `Bot ${__1.Client.token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    }).then(resp => {
        if (resp.ok)
            return resp.json().then(discord_message_1.DiscordMessage.fromJson);
        return resp.json().then(json => { throw new __1.DiscordAPIError(json.code, json.message, json.errors, url); });
    });
}
exports.editMessage = editMessage;
function addReaction(channelId, messagelId, emoji) {
    const url = `/channels/${channelId}/messages/${messagelId}/reactions/${encodeURIComponent(emoji)}/@me`;
    return sendFetch(url, `/channels/${channelId}/messages/reactions`, {
        method: 'PUT',
        headers: {
            'authorization': `Bot ${__1.Client.token}`,
            'Content-Type': 'application/json',
        }
    }).then(resp => {
        if (resp.ok)
            return new Promise(resolve => resolve());
        return resp.json().then(json => { throw new __1.DiscordAPIError(json.code, json.message, json.errors, url); });
    });
}
exports.addReaction = addReaction;
function deleteUserReaction(channelId, messagelId, emoji, userId) {
    const url = `/channels/${channelId}/messages/${messagelId}/reactions/${encodeURIComponent(emoji)}/${userId}`;
    return sendFetch(url, `/channels/${channelId}/messages/reactions`, {
        method: 'DELETE',
        headers: {
            'authorization': `Bot ${__1.Client.token}`,
            'Content-Type': 'application/json',
        }
    }).then(resp => {
        if (resp.ok)
            return new Promise(resolve => resolve());
        return resp.json().then(json => { throw new __1.DiscordAPIError(json.code, json.message, json.errors, url); });
    });
}
exports.deleteUserReaction = deleteUserReaction;
function deleteAllReactions(channelId, messagelId) {
    const url = `/channels/${channelId}/messages/${messagelId}/reactions`;
    return sendFetch(url, `/channels/${channelId}/messages/reactions`, {
        method: 'DELETE',
        headers: {
            'authorization': `Bot ${__1.Client.token}`,
            'Content-Type': 'application/json',
        }
    }).then(resp => {
        if (resp.ok)
            return new Promise(resolve => resolve());
        return resp.json().then(json => { throw new __1.DiscordAPIError(json.code, json.message, json.errors, url); });
    });
}
exports.deleteAllReactions = deleteAllReactions;
function createGlobalApplicationCommand(command) {
    const url = `/applications/${command.application_id}/commands`;
    return sendFetch(url, `/applications/${command.application_id}/commands`, {
        method: 'POST',
        headers: {
            'authorization': `Bot ${__1.Client.token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(command),
    }).then(resp => {
        if (resp.ok)
            return new Promise(resolve => resolve());
        return resp.json().then(json => { throw new __1.DiscordAPIError(json.code, json.message, json.errors, url); });
    });
}
exports.createGlobalApplicationCommand = createGlobalApplicationCommand;
