import { Snowflake } from '../custom-types/snowflake';
import { DiscordEmoji } from './discord-emoji';
import { DiscordGuildMember } from './discord-guild-memeber';
export declare class DiscordMessageReactionAdd {
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
     * The member who reacted if this happened in a guild
     */
    member?: DiscordGuildMember;
    /**
     * A partial emoji object, the emoji used to react
     */
    emoji: DiscordEmoji;
    constructor(user_id: Snowflake, channel_id: Snowflake, message_id: Snowflake, emoji: DiscordEmoji);
    static fromJson(json: any): DiscordMessageReactionAdd;
    removeUser(userId: Snowflake): Promise<void>;
    remove(): Promise<void>;
}
