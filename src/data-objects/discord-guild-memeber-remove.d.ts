import { Snowflake } from '../custom-types/snowflake';
import { DiscordUser } from './discord-user';
export declare class DiscordGuildMemberRemove {
    /**
     * The id of the guild
     */
    guild_id: Snowflake;
    /**
     * The user who was removed
     */
    user: DiscordUser;
    constructor(guild_id: Snowflake, user: DiscordUser);
    static fromJson(json: any): DiscordGuildMemberRemove;
}
