import { DiscordGuildMember } from './discord-guild-memeber';
import { DiscordMessage } from './discord-message';
import { DiscordRole } from './discord-role';
import { DiscordUser } from './discord-user';
interface UserMap {
    [key: string]: DiscordUser;
}
interface MemberMap {
    [key: string]: DiscordGuildMember;
}
interface RoleMap {
    [key: string]: DiscordRole;
}
interface MessageMap {
    [key: string]: DiscordMessage;
}
export default class DiscordInteractionResolvedData {
    /**
     * Map of Snowflakes to user objects
     */
    users?: UserMap;
    /**
     * Map of Snowflakes to partial member objects
     */
    members?: MemberMap;
    /**
     * Map of Snowflakes to role objects
     */
    roles?: RoleMap;
    /**
     * Map of Snowflakes to partial messages objects
     */
    messages?: MessageMap;
    static fromJson(json: any): DiscordInteractionResolvedData;
}
export {};
