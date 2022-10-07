import DiscordComponent from './discord-component';
import { DiscordEmbed } from './discord-embed';
export default class DiscordMessageEdit {
    /**
     * The message contents(up to 2000 characters)
     */
    content?: string;
    /**
     * Embedded rich content(up to 6000 characters)
     */
    embeds?: DiscordEmbed[];
    /**
     * Edit the flags of a message (only SUPPRESS_EMBEDS can currently be set/unset)
     */
    flags?: number;
    /**
     * JSON encoded body of non - file params
     */
    payload_json?: string;
    /**
     * The components to include with the message
     */
    components?: DiscordComponent[];
}
