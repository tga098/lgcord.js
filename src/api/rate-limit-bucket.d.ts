export default class RateLimitBucket {
    bucket: string | null;
    limit: number;
    remain: number;
    resetTime: number;
    resetAfter: number;
}
