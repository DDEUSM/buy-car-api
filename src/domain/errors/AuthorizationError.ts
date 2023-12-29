export class AuthorizationError implements Error
{
    message: string;
    name: string;
    stack?: string | undefined;
    statusCode: number;

    constructor(message: string, statusCode: number)
    {
        this.message = message;
        this.statusCode = statusCode;
    }
}