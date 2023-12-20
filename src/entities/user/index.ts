export class Users 
{
    constructor(
        private id: number,
        private firstName: string,
        private lastName: string,
        private groupId: number,
        private credits: number,
        private token: string,
        private refreshToken: string
    ){}

    createProfile()
    {

    }

    readProfile()
    {

    }

    updateProfile()
    {

    }

    deleteProfile()
    {

    }

    login()
    {

    }

    getNewToken()
    {

    }

    buyCar()
    {
        //GROUP COMUM - APENAS CARROS COMUNS DE RUA
        //GROUP RACER - TODOS OS CARROS, INCLUSIVE OS DE CORRIDA
    }

    viewCar()
    {
        //GROUP COMUM - APENAS CARROS COMUNS DE RUA
        //GROUP RACER - TODOS OS CARROS, INCLUSIVE OS DE CORRIDA
    }
}