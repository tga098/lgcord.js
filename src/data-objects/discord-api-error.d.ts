export declare class DiscordAPIError {
    code: number;
    message: string;
    errors: any;
    method: string;
    endpoint: string;
    constructor(code: number, message: string, errors: any, method: string, endpoint: string);
}
