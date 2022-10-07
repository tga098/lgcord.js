import { Snowflake } from '../custom-types/snowflake';
export default class DiscordApplication {
    /**
     * The id of the app
     */
    id: Snowflake;
    /**
     * The name of the app
     */
    name: string;
    /**
     * The icon hash of the app
     */
    icon?: string;
    /**
     * the description of the app
     */
    description: string;
    /**
     * An array of rpc origin urls, if rpc is enabled
     */
    rpc_origins?: string[];
    /**
     * when false only app owner can join the app's bot to guilds
     */
    bot_public: boolean;
    constructor(id: Snowflake, name: string, description: string, bot_public: boolean);
    static fromJson(json: any): DiscordApplication;
}
