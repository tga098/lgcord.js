import { Snowflake } from '../custom-types';
export declare class DiscordThreadMember {
    /**
     * The id of the thread
     */
    id?: Snowflake;
    /**
     * The id of the user
     */
    user_id?: Snowflake;
    /**
     * The time the current user last joined the thread
     */
    join_timestamp: string;
    /**
     * Any user-thread settings, currently only used for notifications
     */
    flags: number;
    constructor(join_timestamp: string, flags: number);
    static fromJson(json: any): DiscordThreadMember;
}
