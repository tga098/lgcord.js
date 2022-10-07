import DiscordApplication from './discord-application';
import { DiscordGuild } from './discord-guild';
import { DiscordUser } from './discord-user';
export declare class DiscordReady {
    /**
     * Gateway version
     */
    v: number;
    /**
     * Information about the user including email
     */
    user: DiscordUser;
    /**
     * The guilds the user is in
     */
    guilds: DiscordGuild[];
    /**
     * Used for resuming connections
     */
    session_id: string;
    /**
     * Gateway url for resuming connections
     */
    resume_gateway_url: string;
    /**
     * Array of two integers(shard_id, num_shards) the shard information associated with this session, if sent when identifying
     */
    shard?: number[];
    /**
     * Partial application object, contains id and flags
     */
    application: DiscordApplication;
    constructor(json: any);
}
