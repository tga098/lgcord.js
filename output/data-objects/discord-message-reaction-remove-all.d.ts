import { Snowflake } from '../custom-types/snowflake';
export declare class DiscordMessageReactionRemoveAll {
    /**
     * The id of the channel
     */
    channel_id: Snowflake;
    /**
     * The id of the message
     */
    message_id: Snowflake;
    /**
     * The id of the guild
     */
    guild_id?: Snowflake;
    constructor(channel_id: Snowflake, message_id: Snowflake);
    static fromJson(json: any): DiscordMessageReactionRemoveAll;
}
