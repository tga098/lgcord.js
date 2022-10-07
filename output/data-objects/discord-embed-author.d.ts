export default class DiscordEmbedAuthor {
    /**
     * Name of author
     */
    name: string;
    /**
     * URL of author
     */
    url?: string;
    /**
     * URL of author icon(only supports http(s) and attachments)
     */
    icon_url?: string;
    /**
     * A proxied url of author icon
     */
    proxy_icon_url?: string;
    constructor(name: string, url?: string, iconUrl?: string, proxyIconUrl?: string);
}
