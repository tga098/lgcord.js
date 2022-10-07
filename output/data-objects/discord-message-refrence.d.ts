import { Snowflake } from '../custom-types/snowflake';
export default class DiscordMessageRefrence {
    /**
     * Id of the originating message
     */
    message_id?: Snowflake;
    /**
     * Id of the originating message's channel
     */
    channel_id?: Snowflake;
    /**
     * Id of the originating message's guild
     */
    guild_id?: Snowflake;
    /**
     * When sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true
     */
    fail_if_not_exists?: boolean;
}
