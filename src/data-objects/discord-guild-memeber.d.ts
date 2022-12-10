import { Snowflake } from '../custom-types/snowflake';
import { DiscordUser } from './discord-user';
export declare class DiscordGuildMember {
    /**
     * The user this guild member represents
     */
    user?: DiscordUser;
    /**
     * This users guild nickname
     */
    nick?: string;
    /**
     * The member's guild avatar hash
     */
    avatar?: string;
    /**
     * Array of role object ids
     */
    roles: Snowflake[];
    /**
     * Total permissions of the member in the channel, including overwrites, returned when in the interaction object
     */
    permissions?: string;
    static fromJson(json: any, parentUser?: DiscordUser | undefined): DiscordGuildMember;
}
