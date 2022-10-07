"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
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
exports.Client = void 0;
const ws_1 = __importStar(require("ws"));
const events_1 = __importDefault(require("events"));
const discord_api_1 = require("./api/discord-api");
const websocket_data_1 = require("./api/websocket-data");
const data_objects_1 = require("./data-objects");
const payloads_1 = require("./payloads");
const _1 = require(".");
const discord_message_reaction_remove_1 = require("./data-objects/discord-message-reaction-remove");
const discord_message_reaction_remove_all_1 = require("./data-objects/discord-message-reaction-remove-all");
const discord_message_reaction_remove_emoji_1 = require("./data-objects/discord-message-reaction-remove-emoji");
const discord_guild_memeber_remove_1 = require("./data-objects/discord-guild-memeber-remove");
const discord_guild_memeber_update_1 = require("./data-objects/discord-guild-memeber-update");
const discord_guild_role_upsert_1 = require("./data-objects/discord-guild-role-upsert");
const discord_guild_role_delete_1 = require("./data-objects/discord-guild-role-delete");
const discord_channel_1 = require("./data-objects/discord-channel");
const discord_thread_list_sync_1 = require("./data-objects/discord-thread-list-sync");
const discord_stage_instance_1 = require("./data-objects/discord-stage-instance");
const discord_channel_pins_update_1 = require("./data-objects/discord-channel-pins-update");
const discord_application_command_permissions_1 = require("./data-objects/discord-application-command-permissions");
const discord_voiceupdate_1 = require("./data-objects/discord-voice-update");
const EVENTS_MAP = {};
const {guild_cache} = require("./client/cache");
const {channel_cache} = require("./client/cache");
const {client_cache} = require("./client/cache");
const { throws } = require("assert");
const { read } = require("fs");
function addEvent(type, eventId, dataMap) {
    EVENTS_MAP[type] = { eventId, dataMap };
}
addEvent('MESSAGE_CREATE', 'messageCreate', d => _1.DiscordMessage.fromJson(d));
addEvent('MESSAGE_UPDATE', 'messageUpdate', d => _1.DiscordMessage.fromJson(d));
addEvent('MESSAGE_DELETE', 'messageDelete', d => _1.DiscordMessageDelete.fromJson(d));
addEvent('MESSAGE_DELETE_BULK', 'messageDeleteBulk', d => _1.DiscordMessageDeleteBulk.fromJson(d));
addEvent('MESSAGE_REACTION_ADD', 'messageReactionAdd', d => _1.DiscordMessageReactionAdd.fromJson(d));
addEvent('MESSAGE_REACTION_REMOVE', 'messageReactionRemove', d => discord_message_reaction_remove_1.DiscordMessageReactionRemove.fromJson(d));
addEvent('MESSAGE_REACTION_REMOVE_ALL', 'messageReactionRemoveAll', d => discord_message_reaction_remove_all_1.DiscordMessageReactionRemoveAll.fromJson(d));
addEvent('MESSAGE_REACTION_REMOVE_EMOJI', 'messageReactionRemoveEmoji', d => discord_message_reaction_remove_emoji_1.DiscordMessageReactionRemoveEmoji.fromJson(d));
addEvent('INTERACTION_CREATE', 'interactionCreate', d => _1.DiscordInteraction.fromJson(d));
addEvent('GUILD_CREATE', 'guildCreate', d => _1.DiscordGuild.fromJson(d));
addEvent('GUILD_DELETE', 'guildDelete', d => _1.DiscordGuild.fromJson(d));
addEvent('GUILD_UPDATE', 'guildUpdate', d => _1.DiscordGuild.fromJson(d));
addEvent('GUILD_MEMBER_ADD', 'guildMemberAdd', d => data_objects_1.DiscordGuildMember.fromJson(d));
addEvent('GUILD_MEMBER_REMOVE', 'guildMemberRemove', d => discord_guild_memeber_remove_1.DiscordGuildMemberRemove.fromJson(d));
addEvent('GUILD_MEMBER_UPDATE', 'guildMemberUpdate', d => discord_guild_memeber_update_1.DiscordGuildMemberUpdate.fromJson(d));
addEvent('GUILD_ROLE_CREATE', 'guildRoleCreate', d => discord_guild_role_upsert_1.DiscordGuildRoleUpsert.fromJson(d));
addEvent('GUILD_ROLE_UPDATE', 'guildRoleUpdate', d => discord_guild_role_upsert_1.DiscordGuildRoleUpsert.fromJson(d));
addEvent('GUILD_ROLE_DELETE', 'guildRoleDelete', d => discord_guild_role_delete_1.DiscordGuildRoleDelete.fromJson(d));
addEvent('CHANNEL_CREATE', 'channelCreate', d => discord_channel_1.DiscordChannel.fromJson(d));
addEvent('CHANNEL_UPDATE', 'channelUpdate', d => discord_channel_1.DiscordChannel.fromJson(d));
addEvent('CHANNEL_DELETE', 'channelDelete', d => discord_channel_1.DiscordChannel.fromJson(d));
addEvent('CHANNEL_PINS_UPDATE', 'channelPinsUpdate', d => discord_channel_pins_update_1.DiscordChannelPinsUpdate.fromJson(d));
// eslint-disable-next-line max-len
addEvent('APPLICATION_COMMAND_PERMISSIONS_UPDATE', 'applicationCommandPermissionsUpdate', d => discord_application_command_permissions_1.DiscordApplicationCommandPermissions.fromJson(d));
addEvent('STAGE_INSTANCE_CREATE', 'stageInstanceCreate', d => discord_stage_instance_1.DiscordStageInstance.fromJson(d));
addEvent('STAGE_INSTANCE_DELETE', 'stageInstanceDelete', d => discord_stage_instance_1.DiscordStageInstance.fromJson(d));
addEvent('STAGE_INSTANCE_UPDATE', 'stageInstanceUpdate', d => discord_stage_instance_1.DiscordStageInstance.fromJson(d));
addEvent('THREAD_LIST_SYNC', 'threadListSync', d => discord_thread_list_sync_1.DiscordThreadListSync.fromJson(d));
addEvent('USER_UPDATE', 'userUpdate', d => data_objects_1.DiscordUser.fromJson(d));
//addEvent('VOICE_UPDATE', 'voiceStateUpdate', d => discord_voiceupdate_1.voiceStateUpdate.fromJson(d))
class Client extends events_1.default.EventEmitter {

constructor(intents) {
        super(); 
        //const client = client_cache.get(`user`)
        this.guilds = []
        this.client_inf = "none"
        this.channels = []
        this.websocket = [];
        this.heartbeat = [];
        this.shards = 1;
        this.gatewayUrl = '';
        this.intents = intents.reduce((sum, a) => sum + a, 0);
    }

    /** 
     * @param {client_login} login login into the client
    */
    
    async login(token) {
        Client.token = token;
        if (!Client.token || typeof Client.token !== 'string') throw new Error("LGcord Error #1372\nInvalid token provided. Provide a valid token to login in to your bot");
        this.debug(`Connecting to discord gateway`)
        const gatewayInfo = await (0, discord_api_1.getGatewayBot)().catch(e => { console.log(e); return new data_objects_1.DiscordGatewayBotInfo({}); });
        this.gatewayUrl = gatewayInfo.url;
        this.shards = gatewayInfo.shards;
        const interval = setInterval(() => {
            const startIndex = this.websocket.length;
            const max = Math.min(gatewayInfo.session_start_limit.max_concurrency, this.shards - startIndex);
            for (let i = 0; i < max; i++)
                this.initGatewaySocket(this.gatewayUrl, startIndex + i);
            if (this.websocket.length === this.shards)
                clearInterval(interval);
        }, 7000);

    }

    initGatewaySocket(gatewayUrl, shardId) {
        const ws = new ws_1.default(`${gatewayUrl}/?v=8&encoding=json`);
        const wsd = new websocket_data_1.WebSocketData(ws, shardId);
        this.websocket[shardId] = wsd;
        ws.addEventListener('message', (event) => this.onMessage(wsd, event, shardId));
        ws.addEventListener('close', (event) => this.onClose(event, shardId));
        ws.addEventListener('open', (event) => this.onOpen(event, shardId));
        ws.addEventListener('error', (error) => console.error(error));
    }


    onMessage(wsd, event, shardNum) {
        const message = Object.assign(new payloads_1.GatewayPayload(), JSON.parse(event.data));
        if (message.s)
            wsd.seq = message.s;
        switch (message.op) {
            case 0:
                this.onEvent(message, wsd);
                break;
            case 7:
            case 9:
                if (message.d)
                    this.sendPayload(wsd.ws, new payloads_1.ResumePayload(Client.token ?? '', wsd.session_id, wsd.seq));
                break;
            case 10:
                this.startHeartbeat(wsd, shardNum, parseInt(message.d.heartbeat_interval));
                if (wsd.resume)
                    this.sendPayload(wsd.ws, new payloads_1.ResumePayload(Client.token ?? '', wsd.session_id, wsd.seq));
                else
                    this.sendPayload(wsd.ws, new payloads_1.IdentifyPayload(Client.token ?? '', this.intents, [shardNum, this.shards]));
                break;
            case 11:
                //Heartbeat ACK
                break;
            default:
                console.log('[Discord] Unknown OP Code: ' + message.op);
        }
    }



    debug(message) {
        this.emit('debug', message);
    }
    onOpen(event, shardId) {
        this.debug(`Shard \`${shardId}\` OPEN! Event type: ${event.type} `);
    }
    onClose(event, shardId) {
        const code = event.code;
        clearInterval(this.heartbeat[shardId]);
        this.debug(`Shard \`${shardId}\` CLOSED! Code: ${code} | Reason: ${event.reason} `);
        switch (code) {
            case -1:
            case 1000:
            case 1001:
            case 1006:
            case 4000:
            case 4008:
            case 4009:
                this.initReconnect(shardId);
                break;
            default:
                console.log('[DISCORD] Closed: ' + code + ' - ' + event.reason);
                this.initReconnectFull();
                break;
        }
    }
    initReconnect(shardId) {
        const socketData = this.websocket.find(wsd => wsd.shard === shardId);
        if (socketData) {
            socketData.resume = true;
            socketData.ws.removeAllListeners();
            socketData.ws.close(1002);
            const ws = new ws_1.default(`${this.gatewayUrl}/?v=8&encoding=json`);
            socketData.ws = ws;
            ws.addEventListener('message', (event) => this.onMessage(socketData, event, shardId));
            ws.addEventListener('close', (event) => this.onClose(event, shardId));
            ws.addEventListener('error', (error) => console.error(error));
        }
    }
    initReconnectFull() {
        for (let i = 0; i < this.websocket.length; i++)
            this.websocket[i].ws.removeAllListeners();
        this.websocket = [];
        this.login(Client.token ?? '');
    }
    sendPayload(ws, message) {
        if (ws.readyState === ws_1.OPEN)
            ws.send(JSON.stringify(message));
    }

    /**
     * @param {event} onEvent events for the clieent
     */

    onEvent(json, wsd) {
        const eventId = json.t;
        this.debug(`${this.baseStr('Event recieved')} | Shard: ${wsd.shard} | ID: ${eventId}`);
        if (!eventId) {
            return;
        }
        const event = EVENTS_MAP[eventId];
        if (event) {
            this.emit(event.eventId, event.dataMap(json.d));
            if(event.eventId == `guildCreate`) {
              this.guilds.cache = new Map()
              this.channels.cache = new Map()
               const g =  _1.DiscordGuild.fromJson(json.d)
               this.guilds.push(g)

               /**
                *  @param {guilds.cache} this.guilds.cache cache for the client 
                *  @param {guild_cache} Cache local cache for the package
                */

               this.guilds.forEach(guild => {
                this.guilds.cache.set(`${guild.id}`, guild)
                guild_cache.set(`${guild.id}`, guild)
               })

               this.guilds.forEach(guild => {
                const c = this.guilds.cache.get(`${guild.id}`)

                c.channels.forEach(text => {
                   // console.log(`CHANNEL: ${text}`)
                    const amt = this.channels.push(text)
                    this.channels.cache.set(`${text.id}`, text)
                    channel_cache.set(`${text.id}`, text)
                })

               })

              
            }
        }
        else if (eventId === 'READY') {
            const ready = new _1.DiscordReady(json.d);
            this.emit('ready', ready);
            //console.log(ready)
           // client_cache.set(`user`, ready)
            this.client_inf = ready
            wsd.session_id = ready.session_id;
            wsd.resume_url = ready.resume_gateway_url;
        }
        else if (eventId === 'RESUMED') {
            this.emit('resumed');
        } 
        // eslint-disable-next-line max-len
        else if (['GUILD_JOIN_REQUEST_UPDATE', 'GUILD_JOIN_REQUEST_DELETE', 'GUILD_APPLICATION_COMMAND_INDEX_UPDATE', 'GIFT_CODE_UPDATE'].includes(eventId)) {
            //TODO: I've seen these event id's but no idea what their payload is... Can't find docs on them
        } 
        else {
            console.log('UNKNOWN EVENT!', eventId);
        }
    }
    startHeartbeat(wsd, shardNum, heartbeatDelay) {
        if (this.heartbeat[shardNum])
            clearInterval(this.heartbeat[shardNum]);
        this.heartbeat[shardNum] = setInterval(() => {
            this.sendPayload(wsd.ws, new payloads_1.HeartBeatPayload(wsd.seq));
            this.debug(`${this.baseStr('Heartbeat')} | Shard: ${shardNum} | Delay: ${heartbeatDelay}`);
        }, heartbeatDelay);
    }
    createGlobalCommand(command) {
        (0, discord_api_1.createGlobalApplicationCommand)(command);
    }
    baseStr(str) {
        return str + ' '.repeat(20 - str.length);
    }
}

exports.Client = Client;
exports.default = Client;
