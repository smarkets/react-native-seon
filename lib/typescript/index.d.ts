interface SeonInterface {
    setSessionId(sessionId: string): Promise<boolean>;
    setLoggingEnabled(enabled: boolean): Promise<boolean>;
    getFingerprintBase64(): Promise<string>;
}
declare const _default: SeonInterface;
export default _default;
