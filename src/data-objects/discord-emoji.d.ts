import { Snowflake } from '../custom-types/snowflake';
import { DiscordRole } from './discord-role';
import { DiscordUser } from './discord-user';
export declare class DiscordEmoji {
    /**
     * Emoji id
     */
    id?: Snowflake;
    /**
     * (can be null only in reaction emoji objects)	emoji name
     */
    name?: string;
    /**
     * Roles allowed to use this emoji
     */
    roles?: DiscordRole[];
    /**
     * user object	user that created this emoji
     */
    user?: DiscordUser;
    /**
     * Whether this emoji must be wrapped in colons
     */
    require_colons?: boolean;
    /**
     * Whether this emoji is managed
     */
    managed?: boolean;
    /**
     * Whether this emoji is animated
     */
    animated?: boolean;
    /**
     * Whether this emoji can be used, may be false due to loss of Server Boosts
     */
    available?: boolean;
    static fromJson(json: any): DiscordEmoji;
}
