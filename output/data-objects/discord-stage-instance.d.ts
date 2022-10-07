import { Snowflake } from '../custom-types';
export declare class DiscordStageInstance {
    /**
     * The id of this Stage instance
     */
    id: Snowflake;
    /**
     * The guild id of the associated Stage channel
     */
    guild_id: Snowflake;
    /**
     * The id of the associated Stage channel
     */
    channel_id: Snowflake;
    /**
     * The topic of the Stage instance(1 - 120 characters)
     */
    topic: string;
    /**
     * 	The privacy level of the Stage instance
     */
    privacy_level: number;
    /**
     * Whether or not Stage Discovery is disabled(deprecated)
     */
    discoverable_disabled?: boolean;
    /**
     * The id of the scheduled event for this Stage instance
     */
    guild_scheduled_event_id?: Snowflake;
    constructor(id: Snowflake, guild_id: Snowflake, channel_id: Snowflake, topic: string, privacy_level: number);
    static fromJson(json: any): DiscordStageInstance;
}
