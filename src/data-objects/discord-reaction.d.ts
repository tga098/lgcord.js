import { DiscordEmoji } from './discord-emoji';
export default class DiscordReaction {
    /**
     * Times this emoji has been used to react
     */
    count: number;
    /**
     * Whether the current user reacted using this emoji
     */
    me: boolean;
    /**
     * Partial emoji object - emoji information
     */
    emoji: DiscordEmoji;
    constructor(count: number, me: boolean, emoji: DiscordEmoji);
    static fromJson(json: any): DiscordReaction;
}
