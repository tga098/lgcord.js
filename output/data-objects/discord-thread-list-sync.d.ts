import { Snowflake } from '../custom-types';
import { DiscordChannel } from './discord-channel';
import { DiscordThreadMember } from './discord-thread-member';
export declare class DiscordThreadListSync {
    /**
     * The id of the guild
     */
    guild_id: Snowflake;
    /**
     * The parent channel ids whose threads are being synced. If omitted, then threads were synced for the entire guild. This array may contain channel_ids that have no active threads as well, so you know to clear that data.
     */
    channel_ids?: Snowflake[];
    /**
     * All active threads in the given channels that the current user can access
     */
    threads: DiscordChannel[];
    /**
     * All thread member objects from the synced threads for the current user, indicating which threads the current user has been added to
     */
    members: DiscordThreadMember[];
    constructor(guild_id: Snowflake, threads: DiscordChannel[], members: DiscordThreadMember[]);
    static fromJson(json: any): DiscordThreadListSync;
}
