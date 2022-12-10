import { Snowflake } from '../custom-types/snowflake';
import { DiscordEmoji } from './discord-emoji';
export declare class DiscordMessageReactionRemove {
    /**
     * The id of the user
     */
    user_id: Snowflake;
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
    constructor(user_id: Snowflake, channel_id: Snowflake, message_id: Snowflake, emoji: DiscordEmoji);
    static fromJson(json: any): DiscordMessageReactionRemove;
}
