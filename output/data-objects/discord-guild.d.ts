import { Snowflake } from '../custom-types/snowflake';
import { DiscordChannel } from './discord-channel';
import { DiscordGuildMember } from './discord-guild-memeber';
import { DiscordRole } from './discord-role';
export declare class DiscordGuild {
    /**
     * Guild id
     */
    id: Snowflake;
    /**
     * Guild name (2-100 characters, excluding trailing and leading whitespace)
     */
    name: string;
    /**
     * icon hash
     */
    icon?: string;
    /**
     * Returned when in the template object
     */
    icon_hash?: string;
    /**
     * Id of owner
     */
    owner_id: Snowflake;
    /**
     * Roles in the guild
     */
    roles: DiscordRole[];
    /**
     * True if this guild is unavailable due to an outage
     */
    unavailable?: boolean;
    /**
     * Users in the guild
     */
    members?: DiscordGuildMember[];
    /**
     * Channels in the guild
     */
    channels?: DiscordChannel[];
    constructor(id: Snowflake, name: string, owner_id: Snowflake);
    static fromJson(json: any): DiscordGuild;
}
