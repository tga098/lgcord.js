"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.createGlobalApplicationCommand = exports.deleteAllReactions = exports.deleteUserReaction = exports.addReaction = exports.editMessage = exports.createMessage = exports.interactionCallback = exports.getGatewayBot = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var node_fetch_1 = require("node-fetch");
var discord_message_1 = require("../data-objects/discord-message");
var __1 = require("..");
var discord_gateway_bot_info_1 = require("../data-objects/discord-gateway-bot-info");
var URL_BASE = 'https://discord.com/api/v8';
var requestQueue = Promise.resolve();
var requestQueueLen = 0;
var bucketMap = {};
function timeout(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function sendFetch(url, urlGroup, init) {
    return new Promise(function (resolve, reject) { return queueReq(url, urlGroup, resolve, reject, init); });
}
function queueReq(url, urlGroup, resolve, reject, init) {
    var _this = this;
    requestQueueLen++;
    requestQueue = requestQueue.then(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, processQueue(url, urlGroup, resolve, reject, init)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); })["finally"](function () { return requestQueueLen--; });
}
function processQueue(url, urlGroup, resolve, reject, init) {
    return __awaiter(this, void 0, void 0, function () {
        var bucketInfo, now, holdTime, globalWait, resp;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (bucketMap[urlGroup]) {
                        bucketInfo = bucketMap[urlGroup];
                        if (bucketInfo.remain == 0) {
                            now = Date.now();
                            if (now <= (bucketInfo.resetTime + 2) * 1000) {
                                holdTime = ((bucketInfo.resetTime + 2) * 1000) - now;
                                setTimeout(function () {
                                    queueReq(url, urlGroup, resolve, reject, init);
                                }, holdTime);
                                return [2 /*return*/];
                            }
                        }
                    }
                    globalWait = -1;
                    return [4 /*yield*/, (0, node_fetch_1["default"])("".concat(URL_BASE).concat(url), init).then(function (r) { return __awaiter(_this, void 0, void 0, function () {
                            var bucket, oldBucket;
                            var _a, _b, _c, _d, _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        bucket = r.headers.get('x-ratelimit-bucket');
                                        oldBucket = (_a = bucketMap[urlGroup]) === null || _a === void 0 ? void 0 : _a.bucket;
                                        bucketMap[urlGroup] = {
                                            bucket: bucket,
                                            limit: parseInt((_b = r.headers.get('x-ratelimit-limit')) !== null && _b !== void 0 ? _b : '0'),
                                            remain: parseInt((_c = r.headers.get('x-ratelimit-remaining')) !== null && _c !== void 0 ? _c : '0'),
                                            resetTime: parseInt((_d = r.headers.get('x-ratelimit-reset')) !== null && _d !== void 0 ? _d : '0'),
                                            resetAfter: parseInt((_e = r.headers.get('x-ratelimit-reset-after')) !== null && _e !== void 0 ? _e : '0')
                                        };
                                        if (oldBucket && oldBucket !== bucket)
                                            console.log('ERROR! Bucket mismatch! ', urlGroup, bucketMap[urlGroup].bucket, bucket);
                                        if (!r.headers.get('X-RateLimit-Global')) return [3 /*break*/, 2];
                                        return [4 /*yield*/, resp.json().then(function (json) { return globalWait = json.retry_after * 1000; })];
                                    case 1:
                                        _f.sent();
                                        _f.label = 2;
                                    case 2:
                                        if (r.headers.get('X-RateLimit-Scope')) {
                                            console.log('Rate limit! ', r.headers.get('X-RateLimit-Scope'));
                                            console.log('\tInfo: ', bucketMap[urlGroup]);
                                            console.log('\tReq: ', "".concat(URL_BASE).concat(url));
                                            console.log('\tGroup: ', urlGroup);
                                        }
                                        return [2 /*return*/, r];
                                }
                            });
                        }); })];
                case 1:
                    resp = _a.sent();
                    if (!(globalWait != -1)) return [3 /*break*/, 3];
                    return [4 /*yield*/, timeout(globalWait)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    resolve(resp);
                    return [2 /*return*/];
            }
        });
    });
}
function getGatewayBot() {
    var url = '/gateway/bot';
    return sendFetch(url, url, {
        method: 'GET',
        headers: {
            'authorization': "Bot ".concat(__1.DiscordMinimal.token),
            'Content-Type': 'application/json'
        }
    }).then(function (resp) {
        if (resp.ok)
            return resp.json().then(function (json) { return new discord_gateway_bot_info_1.DiscordGatewayBotInfo(json); });
        return resp.json().then(function (json) { throw new __1.DiscordAPIError(json.code, json.message, json.errors, url); });
    });
}
exports.getGatewayBot = getGatewayBot;
function interactionCallback(interactionId, interactionToken, data) {
    var url = "".concat(URL_BASE, "/interactions/").concat(interactionId, "/").concat(interactionToken, "/callback");
    return (0, node_fetch_1["default"])(url, {
        method: 'POST',
        headers: {
            'authorization': "Bot ".concat(__1.DiscordMinimal.token),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (resp) {
        if (resp.ok)
            return new Promise(function (resolve) { return resolve(); });
        return resp.json().then(function (json) { throw new __1.DiscordAPIError(json.code, json.message, json.errors, url); });
    });
}
exports.interactionCallback = interactionCallback;
function createMessage(channelId, message) {
    var url = "/channels/".concat(channelId, "/messages");
    return sendFetch(url, "/channels/".concat(channelId, "/messages/create"), {
        method: 'POST',
        headers: {
            'authorization': "Bot ".concat(__1.DiscordMinimal.token),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    }).then(function (resp) {
        if (resp.ok)
            return resp.json().then(discord_message_1.DiscordMessage.fromJson);
        return resp.json().then(function (json) { throw new __1.DiscordAPIError(json.code, json.message, json.errors, url); });
    });
}
exports.createMessage = createMessage;
function editMessage(channelId, messagelId, message) {
    var url = "/channels/".concat(channelId, "/messages/").concat(messagelId);
    return sendFetch(url, "/channels/".concat(channelId, "/messages/edit"), {
        method: 'PATCH',
        headers: {
            'authorization': "Bot ".concat(__1.DiscordMinimal.token),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    }).then(function (resp) {
        if (resp.ok)
            return resp.json().then(discord_message_1.DiscordMessage.fromJson);
        return resp.json().then(function (json) { throw new __1.DiscordAPIError(json.code, json.message, json.errors, url); });
    });
}
exports.editMessage = editMessage;
function addReaction(channelId, messagelId, emoji) {
    var url = "/channels/".concat(channelId, "/messages/").concat(messagelId, "/reactions/").concat(encodeURIComponent(emoji), "/@me");
    return sendFetch(url, "/channels/".concat(channelId, "/messages/reactions"), {
        method: 'PUT',
        headers: {
            'authorization': "Bot ".concat(__1.DiscordMinimal.token),
            'Content-Type': 'application/json'
        }
    }).then(function (resp) {
        if (resp.ok)
            return new Promise(function (resolve) { return resolve(); });
        return resp.json().then(function (json) { throw new __1.DiscordAPIError(json.code, json.message, json.errors, url); });
    });
}
exports.addReaction = addReaction;
function deleteUserReaction(channelId, messagelId, emoji, userId) {
    var url = "/channels/".concat(channelId, "/messages/").concat(messagelId, "/reactions/").concat(encodeURIComponent(emoji), "/").concat(userId);
    return sendFetch(url, "/channels/".concat(channelId, "/messages/reactions"), {
        method: 'DELETE',
        headers: {
            'authorization': "Bot ".concat(__1.DiscordMinimal.token),
            'Content-Type': 'application/json'
        }
    }).then(function (resp) {
        if (resp.ok)
            return new Promise(function (resolve) { return resolve(); });
        return resp.json().then(function (json) { throw new __1.DiscordAPIError(json.code, json.message, json.errors, url); });
    });
}
exports.deleteUserReaction = deleteUserReaction;
function deleteAllReactions(channelId, messagelId) {
    var url = "/channels/".concat(channelId, "/messages/").concat(messagelId, "/reactions");
    return sendFetch(url, "/channels/".concat(channelId, "/messages/reactions"), {
        method: 'DELETE',
        headers: {
            'authorization': "Bot ".concat(__1.DiscordMinimal.token),
            'Content-Type': 'application/json'
        }
    }).then(function (resp) {
        if (resp.ok)
            return new Promise(function (resolve) { return resolve(); });
        return resp.json().then(function (json) { throw new __1.DiscordAPIError(json.code, json.message, json.errors, url); });
    });
}
exports.deleteAllReactions = deleteAllReactions;
function createGlobalApplicationCommand(command) {
    var url = "/applications/".concat(command.application_id, "/commands");
    return sendFetch(url, "/applications/".concat(command.application_id, "/commands"), {
        method: 'POST',
        headers: {
            'authorization': "Bot ".concat(__1.DiscordMinimal.token),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(command)
    }).then(function (resp) {
        if (resp.ok)
            return new Promise(function (resolve) { return resolve(); });
        return resp.json().then(function (json) { throw new __1.DiscordAPIError(json.code, json.message, json.errors, url); });
    });
}
exports.createGlobalApplicationCommand = createGlobalApplicationCommand;
