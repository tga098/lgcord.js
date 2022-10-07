import { Snowflake } from '../custom-types';
export declare class DiscordApplicationCommandPermissions {
    /**
     * ID of the command or the application ID
     */
    id: Snowflake;
    /**
     * ID of the application the command belongs to
     */
    application_id: Snowflake;
    /**
     * ID of the guild
     */
    guild_id: Snowflake;
    constructor(id: Snowflake, application_id: Snowflake, guild_id: Snowflake);
    static fromJson(json: any): DiscordApplicationCommandPermissions;
}
