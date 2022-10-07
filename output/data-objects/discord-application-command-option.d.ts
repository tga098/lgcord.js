import { DiscordApplicationCommandOptionType } from '../custom-types/discord-application-command-option-type';
import { DiscordChannelType } from '../custom-types/discord-channel-types';
import { DiscordApplicationCommandOptionChoiceStructure } from './discord-application-command-option-choice-structure';
export declare class DiscordApplicationCommandOption {
    /**
     * One of application command option type	the type of option
     */
    type: DiscordApplicationCommandOptionType;
    /**
     * 1-32 character name
     */
    name: string;
    /**
     * Localization dictionary for the name field. Values follow the same restrictions as name
     */
    name_localizations?: {
        [key: string]: string;
    };
    /**
     * 1 - 100 character description
     */
    description: string;
    /**
     * Localization dictionary for the description field. Values follow the same restrictions as description
     */
    description_localizations?: {
        [key: string]: string;
    };
    /**
     * If the parameter is required or optional--default false
     */
    required?: boolean;
    /**
     * Types for the user to pick from, max 25
     */
    choices: DiscordApplicationCommandOptionChoiceStructure[];
    /**
     * Array of application command option if the option is a subcommand or subcommand group type, these nested options will be the parameters
     */
    options: DiscordApplicationCommandOption[];
    /**
     * If the option is a channel type, the channels shown will be restricted to these types
     */
    channel_types: DiscordChannelType[];
    /**
     * For INTEGER options, double for NUMBER options if the option is an INTEGER or NUMBER type, the minimum value permitted
     */
    min_value?: number;
    /**
     * For INTEGER options, double for NUMBER options	if the option is an INTEGER or NUMBER type, the maximum value permitted
     */
    max_value?: number;
    /**
     * If autocomplete interactions are enabled for this STRING, INTEGER, or NUMBER type option
     */
    autocomplete?: boolean;
    constructor(name: string, description: string, type: DiscordApplicationCommandOptionType);
    static fromJson(json: any): DiscordApplicationCommandOption;
    setRequired(): DiscordApplicationCommandOption;
    addChoiceKeyVal(key: string, value: string | number): DiscordApplicationCommandOption;
    addChoice(choice: DiscordApplicationCommandOptionChoiceStructure): DiscordApplicationCommandOption;
}
