import DiscordComponent from './discord-component';
export declare class DiscordMessageActionRow extends DiscordComponent {
    /**
     * A list of child components
     */
    components: DiscordComponent[];
    constructor();
    addComponents(...components: DiscordComponent[]): DiscordMessageActionRow;
}
