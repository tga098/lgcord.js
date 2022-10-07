import { Snowflake } from '../custom-types/snowflake';
export declare class DiscordGuildRoleDelete {
    /**
     * The id of the guild
     */
    guild_id: Snowflake;
    /**
     * The id of the role
     */
    role_id: Snowflake;
    constructor(guild_id: Snowflake, role_id: Snowflake);
    static fromJson(json: any): DiscordGuildRoleDelete;
}
