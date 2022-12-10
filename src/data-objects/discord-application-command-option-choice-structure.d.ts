export declare class DiscordApplicationCommandOptionChoiceStructure {
    /**
     * 1-100 character choice name
     */
    name: string;
    /**
     * Value of the choice, up to 100 characters if string
     */
    value: string | number;
    constructor(name: string, value: string | number);
    static fromJson(json: any): DiscordApplicationCommandOptionChoiceStructure;
}
