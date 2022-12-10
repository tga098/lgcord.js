import { DiscordApplicationCommandType } from '../custom-types/discord-application-command-type';
import { Snowflake } from '../custom-types/snowflake';
import { DiscordApplicationCommandOption } from './discord-application-command-option';
export declare class DiscordApplicationCommand {
    /**
     * Unique id of the command
     */
    id?: Snowflake;
    /**
     * One of application command type the type of command, defaults 1 if not set
     */
    type: DiscordApplicationCommandType;
    /**
     * Unique id of the parent application
     */
    application_id: Snowflake;
    /**
     * Guild id of the command, if not global
     */
    guild_id?: Snowflake;
    /**
     * 1 - 32 character name
     */
    name: string;
    /**
     * Localization dictionary for the name field. Values follow the same restrictions as name
     */
    name_localizations?: {
        [key: string]: string;
    };
    /**
     * 1 - 100 character description for CHAT_INPUT commands, empty string for USER and MESSAGE commands
     */
    description: string;
    /**
     * Localization dictionary for the description field. Values follow the same restrictions as description
     */
    description_localizations?: {
        [key: string]: string;
    };
    /**
     * The parameters for the command, max 25	CHAT_INPUT
     */
    options: DiscordApplicationCommandOption[];
    /**
     * Whether the command is enabled by default when the app is added to a guild
     */
    default_permission?: boolean;
    /**
     * Autoincrementing version identifier updated during substantial record changes
     */
    version?: Snowflake;
    constructor(application_id: Snowflake, name: string, description: string);
    static fromJson(json: any): DiscordApplicationCommand;
    setType(type: DiscordApplicationCommandType): DiscordApplicationCommand;
    addOption(...options: DiscordApplicationCommandOption[]): DiscordApplicationCommand;
}
