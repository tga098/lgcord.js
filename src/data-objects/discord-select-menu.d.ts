import DiscordComponent from './discord-component';
import { DiscordSelectOption } from './discord-select-option';
export declare class DiscordSelectMenu extends DiscordComponent {
    /**
     * A developer-defined identifier for the component, max 100 characters
     */
    custom_id?: string;
    /**
     * Whether the component is disabled, default false
     */
    disabled?: boolean;
    /**
     * The choices in the select, max 25
     */
    options: DiscordSelectOption[];
    /**
     * Custom placeholder text if nothing is selected, max 100 characters
     */
    placeholder?: string;
    /**
     * The minimum number of items that must be chosen; default 1, min 0, max 25
     */
    min_values?: number;
    /**
     * The maximum number of items that can be chosen; default 1, max 25
     */
    max_values?: number;
    constructor();
    addOptions(...options: DiscordSelectOption[]): DiscordSelectMenu;
    setCustomId(id: string): DiscordSelectMenu;
}
