"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordChannel = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
class DiscordChannel {
    // bitrate?	integer	the bitrate (in bits) of the voice channel
    // user_limit?	integer	the user limit of the voice channel
    // rate_limit_per_user?*	integer	amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected
    // recipients?	array of user objects	the recipients of the DM
    // icon?	?string	icon hash of the group DM
    // owner_id?	snowflake	id of the creator of the group DM or thread
    // application_id?	snowflake	application id of the group DM creator if it is bot-created
    // parent_id?	?snowflake	for guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created
    // last_pin_timestamp?	?ISO8601 timestamp	when the last pinned message was pinned. This may be null in events such as GUILD_CREATE when a message is not pinned.
    // rtc_region?	?string	voice region id for the voice channel, automatic when set to null
    // video_quality_mode?	integer	the camera video quality mode of the voice channel, 1 when not present
    // message_count?	integer	number of messages (not including the initial message or deleted messages) in a thread (if the thread was created before July 1, 2022, it stops counting at 50)
    // member_count?	integer	an approximate count of users in a thread, stops counting at 50
    // thread_metadata?	a thread metadata object	thread-specific fields not needed by other channels
    // member?	a thread member object	thread member object for the current user, if they have joined the thread, only included on certain API endpoints
    // default_auto_archive_duration?	integer	default duration that the clients (not the API) will use for newly created threads, in minutes, to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080
    // permissions?	string	computed permissions for the invoking user in the channel, including overwrites, only included when part of the resolved data received on a slash command interaction
    // flags?	integer	channel flags combined as a bitfield
    // total_message_sent?	integer	number of messages ever sent in a thread, it's similar to message_count on message creation, but will not decrement the number when a message is deleted
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
    static fromJson(json) {
        const newInst = new DiscordChannel(json.id, json.type);
        newInst.guild_id = json.guild_id;
        newInst.position = json.position;
        newInst.name = json.name;
        newInst.topic = json.topic;
        newInst.nsfw = json.nsfw;
        newInst.last_message_id = json.last_message_id;
        return newInst;
    }
}
exports.DiscordChannel = DiscordChannel;
