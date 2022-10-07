import { DiscordGuildMember, DiscordInteractionType, DiscordMessage, DiscordMessageCreate, DiscordUser, Snowflake } from '..';
import DiscordInteractionData from './discord-interaction-data';
import DiscordInteractionResponseData from './discord-interaction-response-data';
export declare class DiscordInteraction {
    /**
     * Id of the interaction
     */
    id: Snowflake;
    /**
     * Id of the application this interaction is for
     */
    application_id: Snowflake;
    /**
     * Interaction type the type of interaction
     */
    type: DiscordInteractionType;
    /**
     * The command data payload
     */
    data?: DiscordInteractionData;
    /**
     * The guild it was sent from
     */
    guild_id?: Snowflake;
    /**
     * The channel it was sent from
     */
    channel_id?: Snowflake;
    /**
     * Guild member data for the invoking user, including permissions
     */
    member?: DiscordGuildMember;
    /**
     * User object for the invoking user, if invoked in a DM
     */
    user?: DiscordUser;
    /**
     * A continuation token for responding to the interaction
     */
    token: string;
    /**
     * Read-only property, always 1
     */
    version?: number;
    /**
     * For components, the message they were attached to
     */
    message?: DiscordMessage;
    constructor(id: Snowflake, application_id: Snowflake, type: DiscordInteractionType, token: string);
    static fromJson(json: any): DiscordInteraction;
    isButton(): boolean;
    isAppCommand(): boolean;
    update(data: DiscordInteractionResponseData): Promise<void>;
    respond(data: DiscordInteractionResponseData): Promise<void>;
    respondText(message: string): Promise<void>;
    sendMessageInChannel(message: DiscordMessageCreate): Promise<DiscordMessage>;
    deferUpdate(): Promise<void>;
}
