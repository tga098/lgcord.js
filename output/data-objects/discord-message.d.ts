import { Snowflake } from '../custom-types/snowflake';
import { DiscordGuildMember } from './discord-guild-memeber';
import { DiscordMessageCreate } from './discord-message-create';
import DiscordMessageEdit from './discord-message-edit';
import DiscordReaction from './discord-reaction';
import { DiscordUser } from './discord-user';
export declare class DiscordMessage {
    /**
     * Id of the message
     */
    id: Snowflake;
    /**
     * Id of the channel the message was sent in
     */
    channel_id: Snowflake;
    /**
     * Id of the guild the message was sent in
     */
    guild_id?: Snowflake;
    /**
     * The author of this message(not guaranteed to be a valid user, see below)
     */
    author: DiscordUser;
    /**
     * Partial guild member object, member properties for this message's author
     */
    member?: DiscordGuildMember;
    /**
     * Contents of the message
     */
    content: string;
    /**
     * Timestamp when this message was sent
     */
    timestamp: string;
    /**
     * Timestamp when this message was edited(or null if never)
     */
    edited_timestamp?: string;
    /**
     * Whether this was a TTS message
     */
    tts: boolean;
    /**
     * Whether this message mentions everyone
     */
    mention_everyone: boolean;
    /**
     * Users specifically mentioned in the message
     */
    mentions: DiscordUser[];
    /**
     * Reactions to the message
     */
    reactions?: DiscordReaction;
    constructor(id: Snowflake, channel_id: Snowflake, author: DiscordUser, content: string, timestamp: string);
    static fromJson(json: any): DiscordMessage;
    reply(message: string): Promise<DiscordMessage>;
    sendMessageInChannel(message: string): Promise<DiscordMessage>;
    sendInChannel(message: DiscordMessageCreate): Promise<DiscordMessage>;
    edit(message: DiscordMessageEdit): Promise<DiscordMessage>;
    react(emoji: string): Promise<void>;
    removeAllReactions(): Promise<void>;
}
