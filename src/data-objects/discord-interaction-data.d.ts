import { DiscordComponentType } from '../custom-types/discord-component-types';
import { Snowflake } from '../custom-types/snowflake';
import DiscordApplicationCommandInteractionDataOption from './discord-application-command-interaction-data-option';
import DiscordInteractionResolvedData from './discord-interaction-resolved-data';
export default class DiscordInteractionData {
    /**
     * The ID of the invoked command
     */
    id: Snowflake;
    /**
     * The name of the invoked command
     */
    name: string;
    /**
     * The type of the invoked command
     */
    type: number;
    /**
     * Converted users + roles + channels
     */
    resolved?: DiscordInteractionResolvedData;
    /**
     * The params + values from the user
     */
    options: DiscordApplicationCommandInteractionDataOption[];
    /**
     * The custom_id of the component
     */
    custom_id?: string;
    /**
     * The type of the component
     */
    component_type?: DiscordComponentType;
    /**
     * The values the user selected
     */
    values: string[];
    /**
     * Id the of user or message targetted by a user or message command
     */
    target_id?: Snowflake;
    constructor(id: Snowflake, name: string, type: number);
    static fromJson(json: any): DiscordInteractionData;
}
