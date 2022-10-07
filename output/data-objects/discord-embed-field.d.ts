export default class DiscordEmbedField {
    /**
     * Name of the field
     */
    name: string;
    /**
     * Value of the field
     */
    value: string;
    /**
     * Whether or not this field should display inline
     */
    inline?: boolean;
    constructor(name: string, value: string, inline?: boolean);
}
