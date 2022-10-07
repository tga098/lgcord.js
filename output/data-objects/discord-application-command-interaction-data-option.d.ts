import { DiscordApplicationCommandOptionType } from '../custom-types/discord-application-command-option-type';
export default class DiscordApplicationCommandInteractionDataOption {
    /**
     * The name of the parameter
     */
    name: string;
    /**
     * Value of application command option type
     */
    type: DiscordApplicationCommandOptionType;
    /**
     * The value of the option resulting from user input
     */
    value?: string | number;
    /**
     * Present if this option is a group or subcommand
     */
    options?: DiscordApplicationCommandInteractionDataOption[];
    /**
     * true if this option is the currently focused option for autocomplete
     */
    focused?: boolean;
    constructor(name: string, type: DiscordApplicationCommandOptionType);
    static fromJson(json: any): DiscordApplicationCommandInteractionDataOption;
}
