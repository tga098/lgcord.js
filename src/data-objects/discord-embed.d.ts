import DiscordEmbedAuthor from './discord-embed-author';
import DiscordEmbedField from './discord-embed-field';
import DiscordEmbedFooter from './discord-embed-footer';
import DiscordEmbedImage from './discord-embed-image';
export declare class DiscordEmbed {
    /**
     * Title of embed
     */
    title?: string;
    /**
     * Type of embed (always "rich" for webhook embeds)
     */
    type?: string;
    /**
     * Description of embed
     */
    description?: string;
    /**
     * Url of embed
     */
    url?: string;
    /**
     * timestamp of embed content (ISO8601 timestamp)
     */
    timestamp?: string;
    /**
     * Color code of the embed
     */
    color?: number;
    /**
     * Footer information
     */
    footer?: DiscordEmbedFooter;
    /**
     * Image information
     */
    image?: DiscordEmbedImage;
    /**
     *  Embed author object	author information
     */
    author?: DiscordEmbedAuthor;
    /**
     * Array of embed field objects fields information
     */
    fields?: DiscordEmbedField[];
    setColor(color: number | string): DiscordEmbed;
    setDescription(description: string): DiscordEmbed;
    setTitle(title: string): DiscordEmbed;
    setAuthor(name: string, iconUrl?: string, url?: string, proxyIconUrl?: string): DiscordEmbed;
    setImage(url: string, proxyUrl?: string, height?: number, width?: number): DiscordEmbed;
    addField(name: string, value: string, inline?: boolean): DiscordEmbed;
    setFooter(text: string, iconUrl?: string, proxyIconUrl?: string): DiscordEmbed;
    setTimestamp(): DiscordEmbed;
}
