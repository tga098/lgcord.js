import { DiscordButtonStyle } from '../custom-types/discord-button-styles';
import DiscordComponent from './discord-component';
import { DiscordEmoji } from './discord-emoji';
export declare class DiscordMessageButton extends DiscordComponent {
    /**
     * A developer-defined identifier for the component, max 100 characters
     */
    custom_id?: string;
    /**
     * Whether the component is disabled, default false
     */
    disabled?: boolean;
    /**
     * One of button styles
     */
    style?: DiscordButtonStyle;
    /**
     * Text that appears on the button, max 80 characters
     */
    label?: string;
    /**
     * Partial emoji name, id, and animated
     */
    emoji?: DiscordEmoji;
    /**
     * A url for link - style buttons
     */
    url?: string;
    constructor();
    setCustomId(id: string): DiscordMessageButton;
    setLabel(label: string): DiscordMessageButton;
    setStyle(style: DiscordButtonStyle): DiscordMessageButton;
}
