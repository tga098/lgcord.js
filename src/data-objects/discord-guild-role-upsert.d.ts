import { Snowflake } from '../custom-types/snowflake';
import { DiscordRole } from './discord-role';
export declare class DiscordGuildRoleUpsert {
    /**
     * The id of the guild
     */
    guild_id: Snowflake;
    /**
     * The role created or updated
     */
    role: DiscordRole;
    constructor(guild_id: Snowflake, role: DiscordRole);
    static fromJson(json: any): DiscordGuildRoleUpsert;
}
