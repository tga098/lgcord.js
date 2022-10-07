import { Snowflake } from '../custom-types/snowflake';
export declare class DiscordRole {
    /**
     * Role id
     */
    id: Snowflake;
    /**
     * Role name
     */
    name: string;
    /**
     * Integer representation of hexadecimal color code
     */
    color: number;
    /**
     * If this role is pinned in the user listing
     */
    hoist: boolean;
    /**
     * Role icon hash
     */
    icon?: string;
    /**
     * Role unicode emoji
     */
    unicode_emoji?: string;
    /**
     * Position of this role
     */
    position: number;
    /**
     * Permission bit set
     */
    permissions: number;
    constructor(id: Snowflake, name: string, permissions: number, color: number, hoist: boolean, position: number);
    static fromJson(json: any): DiscordRole;
}
