export class UserDto
{
    constructor (
        readonly id: string,
        readonly firstName: string,
        readonly lastName: string,
        readonly email: string,
        readonly password: string,
        readonly driverGroupId: string,
        readonly credits: number
    ){}
}