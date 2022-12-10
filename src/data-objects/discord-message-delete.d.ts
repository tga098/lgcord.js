import { Snowflake } from '../custom-types/snowflake';
export declare class DiscordMessageDelete {
    /**
     * The id of the message
     */
    id: Snowflake;
    /**
     * The id of the channel
     */
    channel_id: Snowflake;
    /**
     * The id of the guild
     */
    guild_id?: Snowflake;
    constructor(id: Snowflake, channel_id: Snowflake);
    static fromJson(json: any): DiscordMessageDelete;
}
