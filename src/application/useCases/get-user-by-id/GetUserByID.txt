import { expect, test } from "vitest";
import { UserDto } from "../../data-transfer-objects/UserDto";
import { CreateUserUseCase } from "../create-user/CreateUserUseCase";
import { UsersRepository } from "../../../infra/repositories/implementations/postgreSQLRepositories";
import GetUserByIDUseCase from "./GetUserByIDUseCase";

const usersRepository = new UsersRepository();

test("Should create a valid user", async () => 
{
    const newUserDto = new UserDto(
        "48ghf8gfghggv",
        "David",
        "de Deus Mesquita",
        "daviddeus@live.com",
        "zzzzzzz",
        "le mans",
        145000
    );

    const newUserDto2 = new UserDto(
        "48ghf8gf9900",
        "Dario",
        "de Deus Mesquita",
        "dariodedeus@live.com",
        "465788",
        "le mans",
        148700
    );

    const createUserUseCase = new CreateUserUseCase(usersRepository);
    await createUserUseCase.execute(newUserDto);
    await createUserUseCase.execute(newUserDto2);

    const getUserByIDUseCase = new GetUserByIDUseCase(usersRepository);
    const user = await getUserByIDUseCase.execute(newUserDto.id) as UserDto;
    const user2 = await getUserByIDUseCase.execute(newUserDto2.id) as UserDto;

    expect(user.id).toBe(newUserDto.id);
    expect(user.password).toBe(newUserDto.password + "_encrypted");
    expect(user.firstName).toBe(newUserDto.firstName);

    expect(user2.id).toBe(newUserDto2.id);
    expect(user2.password).toBe(newUserDto2.password + "_encrypted");
    expect(user2.firstName).toBe(newUserDto2.firstName);

})