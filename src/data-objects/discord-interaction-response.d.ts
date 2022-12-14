import { DiscordInteractionCallbackType } from '../custom-types/discord-interaction-callback-type';
import DiscordInteractionResponseData from './discord-interaction-response-data';
export default class DiscordInteractionResponse {
    /**
     * The type of response
     */
    type: DiscordInteractionCallbackType;
    /**
     * An optional response message
     */
    data?: DiscordInteractionResponseData;
}
