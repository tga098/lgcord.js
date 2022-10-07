export default class DiscordEmbedImage {
    /**
     * Source url of image (only supports http(s) and attachments)
     */
    url: string;
    /**
     * A proxied url of the image
     */
    proxy_url?: string;
    /**
     * Height of image
     */
    height?: number;
    /**
     * Width of image
     */
    width?: number;
    constructor(url: string, proxyUrl?: string, height?: number, width?: number);
}
