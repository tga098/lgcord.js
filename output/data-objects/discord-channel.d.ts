import { DiscordChannelType } from '../custom-types';
import { Snowflake } from '../custom-types/snowflake';
export declare class DiscordChannel {
    /**
     * The id of this channel
     */
    id: Snowflake;
    /**
     * The type of channel
     */
    type: DiscordChannelType;
    /**
     * The id of the guild (may be missing for some channel objects received over gateway guild dispatches)
     */
    guild_id?: Snowflake;
    /**
     * Sorting position of the channel
     */
    position?: number;
    /**
     * The name of the channel (1-100 characters)
     */
    name?: string;
    /**
     * The channel topic (0-1024 characters)
     */
    topic?: string;
    /**
     * Whether the channel is nsfw
     */
    nsfw?: boolean;
    /**
     * The id of the last message sent in this channel (or thread for GUILD_FORUM channels) (may not point to an existing or valid message or thread)
     */
    last_message_id?: Snowflake;
    constructor(id: Snowflake, type: DiscordChannelType);
    static fromJson(json: any): DiscordChannel;
}
