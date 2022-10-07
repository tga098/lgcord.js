import { Snowflake } from '../custom-types/snowflake';
export declare class DiscordMessageDeleteBulk {
    /**
     * The ids of the messages
     */
    ids: Snowflake[];
    /**
     * The id of the channel
     */
    channel_id: Snowflake;
    /**
     * The id of the guild
     */
    guild_id?: Snowflake;
    constructor(ids: Snowflake[], channel_id: Snowflake);
    static fromJson(json: any): DiscordMessageDeleteBulk;
}
