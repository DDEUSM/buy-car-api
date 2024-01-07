import { expect, test } from "vitest";
import { Car } from "../../../domain/entities/cars";
import { CarRepository } from "../../../infra/repositories/implementations/postgreSQLRepositories";
import { PostgreSQLAdapter } from "../../../infra/repositories/database/PostgreSQLAdapter";
import { ViewCarByIDUseCase } from "./ViewCarByIDUseCase";

test("Test view cars feature, with 2 different cars", async () => 
{
    const postgresConnection = new PostgreSQLAdapter();
    const carsRepository = new CarRepository(postgresConnection);
    
    const inputCar1 = new Car({
        id: "54652fr344",
        brandId: "14fg4po009",
        categoryId: "899trfgh",
        color: "red",
        model: "supra",
        modelYear: 2023,
        price: 130000,
        version: "z"
    });

    const inputCar2 = new Car({
        id: "898rgyrgdd",
        brandId: "900jukli0",
        categoryId: "rally1234",
        color: "blue",
        model: "Impreza",
        modelYear: 1999,
        price:  280000,
        version: "wrc"
    });

    const viewCarByIDUseCase = new ViewCarByIDUseCase(carsRepository);
    const car1: any = await viewCarByIDUseCase.execute(inputCar1.id);
    const car2: any = await viewCarByIDUseCase.execute(inputCar2.id);
    
    expect(car1.id).toBe(inputCar1.id);
    expect(car1.model).toBe(inputCar1.model);
    expect(car1.price).toBe(inputCar1.price);
    
    expect(car2.id).toBe(inputCar2.id);
    expect(car2.model).toBe(inputCar2.model);
    expect(car2.price).toBe(inputCar2.price);
});

