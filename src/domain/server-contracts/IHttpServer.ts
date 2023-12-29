export interface IHttpServer
{
    on (httpMethod: string, url: string, callback: Function): void;
    listen (port: number, callback?: () => void): void;
}
