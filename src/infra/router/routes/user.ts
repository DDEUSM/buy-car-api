import { IHttpServer } from "../../../domain/server-contracts/IHttpServer";
import { CreateUserUseCase } from "../../../application/useCases/create-user/CreateUserUseCase";
import { IUsersRepository } from "../../repository-contracts/IUsersRepository";
import { UserDto } from "../../../application/data-transfer-objects/UserDto";
import GetUserByIDUseCase from "../../../application/useCases/get-user-by-id/GetUserByIDUseCase";

export default class UserRoutes
{
    private usersRepository: IUsersRepository;

    constructor (
        private server: IHttpServer,
        repositories: any
    ){
        this.usersRepository = repositories.usersRepository;
    }

    async setRoutes()
    {
        this.server.on("post", "/user", async (params: any, body: any) => 
        {
            const newUserDto = new UserDto(
                body.id,
                body.firstName,
                body.lastName,
                body.email,
                body.password,
                body.driverGroupId,
                body.credits
            );
            const createUserUseCase = new CreateUserUseCase(this.usersRepository);
            await createUserUseCase.execute(newUserDto);
            return {
                statusCode: 201,
                body: {}
            };
        })

        this.server.on("get", "/user/:id", async (params: any, body: any) => 
        {
            const getUserByIDUseCase = new GetUserByIDUseCase(this.usersRepository);
            const user = await getUserByIDUseCase.execute(params.id);
            return {
                statusCode: 200,
                body: user
            };
        })
    }
}