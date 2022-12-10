import DiscordComponent from './discord-component';
import { DiscordEmbed } from './discord-embed';
export default class DiscordInteractionResponseData {
    /**
     * Is the response TTS
     */
    tts?: boolean;
    /**
     * Message content
     */
    content?: string;
    /**
     * Supports up to 10 embeds
     */
    embeds?: DiscordEmbed[];
    /**
     * Interaction callback data flags
     */
    flags?: number;
    /**
     * Message components
     */
    components?: DiscordComponent[];
}
