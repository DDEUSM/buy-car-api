export class User 
{    

    constructor (
        readonly id: string,
        readonly firstName: string,
        readonly lastName: string,
        readonly email: string,
        readonly passwordHash: string,
        readonly driverGroupID: string,
        readonly credits: number
    ) {        
        // Encriptar a senha para salvar apenas o hash.
        this.passwordHash = this.passwordHash + "_encrypted";   
        console.log(passwordHash);
    };
    
}