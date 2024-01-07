import { expect, test } from "vitest";
import { Car } from "../../../domain/entities/cars";
import { CarRepository } from "../../../infra/repositories/implementations/postgreSQLRepositories";
import { PostgreSQLAdapter } from "../../../infra/repositories/database/PostgreSQLAdapter";
import { ViewCarsUseCase } from "./ViewCarsUseCase";

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

    const viewCarsUseCase = new ViewCarsUseCase(carsRepository);
    const cars1: any = await viewCarsUseCase.execute(inputCar1);
    const cars2: any = await viewCarsUseCase.execute(inputCar2);
    
    expect(cars1[0].id).toBe(inputCar1.id);
    expect(cars1[0].model).toBe(inputCar1.model);
    expect(cars1[0].price).toBe(inputCar1.price);
    
    expect(cars2[0].id).toBe(inputCar2.id);
    expect(cars2[0].model).toBe(inputCar2.model);
    expect(cars2[0].price).toBe(inputCar2.price);
});