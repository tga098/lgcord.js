export default class DiscordEmbedFooter {
    /**
     * Footer text
     */
    text: string;
    /**
     * Url of footer icon (only supports http(s) and attachments)
     */
    icon_url?: string;
    /**
     * A proxied url of footer icon
     */
    proxy_icon_url?: string;
    constructor(text: string, iconUrl?: string, proxyIconUrl?: string);
}
