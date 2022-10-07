import { Snowflake } from '../custom-types/snowflake';
import DiscordComponent from './discord-component';
import { DiscordEmbed } from './discord-embed';
import DiscordMessageRefrence from './discord-message-refrence';
export declare class DiscordMessageCreate {
    /**
     * The message contents(up to 2000 characters)
     */
    content?: string;
    /**
     * True if this is a TTS message
     */
    tts?: boolean;
    /**
     * Embedded rich content(up to 6000 characters)
     */
    embeds?: DiscordEmbed[];
    /**
     * JSON encoded body of non - file params
     */
    payload_json?: string;
    /**
     * Include to make your message a reply
     */
    message_reference?: DiscordMessageRefrence;
    /**
     * The components to include with the message
     */
    components?: DiscordComponent[];
    /**
     * IDs of up to 3 stickers in the server to send in the message
     */
    sticker_ids?: Snowflake[];
}
