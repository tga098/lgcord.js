import { Snowflake } from '../custom-types';
export declare class DiscordChannelPinsUpdate {
    /**
     * The id of the guild
     */
    guild_id?: Snowflake;
    /**
     * The id of the channel
     */
    channel_id: Snowflake;
    /**
     * The time at which the most recent pinned message was pinned (ISO8601 timestamp)
     */
    last_pin_timestamp?: string;
    constructor(channel_id: Snowflake);
    static fromJson(json: any): DiscordChannelPinsUpdate;
}
