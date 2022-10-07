import { DiscordEmoji } from './discord-emoji';
export declare class DiscordSelectOption {
    /**
     * The user-facing name of the option, max 100 characters
     */
    label: string;
    /**
     * The dev-define value of the option, max 100 characters
     */
    value: string;
    /**
     * An additional description of the option, max 100 characters
     */
    description?: string;
    /**
     * Partial emoji object	id, name, and animated
     */
    emoji?: DiscordEmoji;
    /**
     * Will render this option as selected by default
     */
    default?: boolean;
    constructor(label: string, value: string);
    static fromJson(json: any): DiscordSelectOption;
    setDescription(description: string): DiscordSelectOption;
    setEmoji(emoji: DiscordEmoji): DiscordSelectOption;
    setDefault(def?: boolean): DiscordSelectOption;
}
