import { Snowflake } from '../custom-types/snowflake';
import { DiscordEmoji } from './discord-emoji';
export declare class DiscordMessageReactionRemoveEmoji {
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
    /**
     * A partial emoji object, the emoji used to react
     */
    emoji: DiscordEmoji;
    constructor(channel_id: Snowflake, message_id: Snowflake, emoji: DiscordEmoji);
    static fromJson(json: any): DiscordMessageReactionRemoveEmoji;
}
