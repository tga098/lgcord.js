import { Snowflake } from '../custom-types/snowflake';
export declare class DiscordUser {
    /**
     * The user's id
     */
    id: Snowflake;
    /**
     * The user's username, not unique across the platform
     */
    username: string;
    /**
     * The user's 4-digit discord-tag
     */
    discriminator: string;
    /**
     * The user's avatar hash
     */
    avatar?: string;
    /**
     * Whether the user belongs to an OAuth2 application
     */
    bot?: boolean;
    constructor(id: Snowflake, username: string, discriminator: string);
    static fromJson(json: any): DiscordUser;
    setActivity(activity: string): void;
}
