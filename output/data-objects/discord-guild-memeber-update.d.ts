import { Snowflake } from '../custom-types/snowflake';
import { DiscordUser } from './discord-user';
export declare class DiscordGuildMemberUpdate {
    /**
     * The id of the guild
     */
    guild_id: Snowflake;
    /**
     * User role ids
     */
    roles: Snowflake[];
    /**
     * The user
     */
    user: DiscordUser;
    /**
     * Nickname of the user in the guild
     */
    nick?: string;
    /**
     * The member's guild avatar hash
     */
    avatar?: string;
    /**
     * When the user joined the guild (ISO8601 timestamp)
     */
    joined_at?: string;
    /**
     * When the user starting boosting the guild (ISO8601 timestamp)
     */
    premium_since?: string;
    /**
     * Whether the user is deafened in voice channels
     */
    deaf?: boolean;
    /**
     * Whether the user is muted in voice channels
     */
    mute?: boolean;
    /**
     * Whether the user has not yet passed the guild's Membership Screening requirements
     */
    pending?: boolean;
    /**
     * When the user's timeout will expire and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed out (ISO8601 timestamp)
     */
    communication_disabled_until?: boolean;
    constructor(guild_id: Snowflake, roles: Snowflake[], user: DiscordUser);
    static fromJson(json: any): DiscordGuildMemberUpdate;
}
