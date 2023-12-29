import { expect, test, describe } from "vitest";
import { CarRepository, PermissionsRepository, SalesRepository, UsersRepository } from "../../../infra/repositories/implementations/postgreSQLRepositories";
import { TCar } from "../../../domain/entities/cars";

import { ViewCarByIDUseCase } from "../view-car-by-id/ViewCarByIDUseCase";
import { BuyCarUseCase } from "../buy-car/BuyCarUseCase";
import { ViewGarageCarsUseCase } from "../view-cars-garage/ViewGarageCarsUseCase";
import { ViewCarsUseCase } from "../view-cars/ViewCarsUseCase";



const carsRepository = new CarRepository();
const usersRepository = new UsersRepository();
const permissionsRepository = new PermissionsRepository();
const salesRepository = new SalesRepository();

const david = {
    id: "4565gbghgh44t44tc",
    firstName: "David",
    lastName: "de Deus Mesquita",
    groupID: "racer",
    credits: 156000,
    refreshToken: "3877fhdvchv",
    token: "f74hv9jnvnb983ujf37243"
}

test("Test #1: view, buycar and show car in garage", async () => 
{

    const supra1 = {
        id: "34fdgfgfg34343",
        model: "supra",
        brandID: "fgfgf4584htg",
        version: "sport",
        category: "sport",
        modelYear: 2023,
        color: "red",
        price: 123000,   
    }

    const viewCarByIDUseCase = new ViewCarByIDUseCase(carsRepository);
    const car = await viewCarByIDUseCase.execute(supra1.id);

    const oldQtd = car.unitsAvailable;

    expect(car.id).toBe(supra1.id);
    expect(car.price).toBe(supra1.price);

    const buyCarUseCase = new BuyCarUseCase(
        carsRepository,
        salesRepository,
        permissionsRepository,
        usersRepository
    );

    await buyCarUseCase.execute(car.id, david.id);

    expect(car.id).toBe(supra1.id);
    expect(car.price).toBe(supra1.price);
    expect(car.unitsAvailable).toBeLessThan(oldQtd);

    const viewGarageCarsUseCase = new ViewGarageCarsUseCase(carsRepository);
    const userCar = await viewGarageCarsUseCase.execute(david.id);

    expect(userCar[0].id).toBe(car.id);
});

test("Test #2: view cars, get first car, buycar and show car in garage", async () => 
{

    const carAttributesInput = {
        id: "34fdgfgfg34343",
        model: "supra",
        brandID: "fgfgf4584htg",
        version: "sport",
        category: "sport",
        modelYear: 2023,
        color: "red",
        price: 123000,   
    }

    const viewCarsUseCase = new ViewCarsUseCase(carsRepository);
    const cars = await viewCarsUseCase.execute(carAttributesInput);
    const car = cars[0];

    const oldQtd = car.unitsAvailable;

    expect(car.id).toBe(carAttributesInput.id);
    expect(car.price).toBe(carAttributesInput.price);

    const buyCarUseCase = new BuyCarUseCase(
        carsRepository,
        salesRepository,
        permissionsRepository,
        usersRepository
    );

    await buyCarUseCase.execute(car.id, david.id);

    expect(car.id).toBe(carAttributesInput.id);
    expect(car.price).toBe(carAttributesInput.price);
    expect(car.unitsAvailable).toBeLessThan(oldQtd);

    const viewGarageCarsUseCase = new ViewGarageCarsUseCase(carsRepository);
    const userCar = await viewGarageCarsUseCase.execute(david.id);

    expect(userCar[0].id).toBe(car.id);
});

    
test("Test #3: testing inputs in viewcars", async () => 
{

    const carInput = {
        
        category: "sport",
          
    }

    const viewCarsUseCase = new ViewCarsUseCase(carsRepository);
    const cars = await viewCarsUseCase.execute(carInput);
    const car = cars[1];

    const oldQtd = car.unitsAvailable;

    expect(car.category).toBe(carInput.category);
    

    const buyCarUseCase = new BuyCarUseCase(
        carsRepository,
        salesRepository,
        permissionsRepository,
        usersRepository
    );

    await buyCarUseCase.execute(car.id, david.id);    
    
    expect(car.unitsAvailable).toBeLessThan(oldQtd);

    const viewGarageCarsUseCase = new ViewGarageCarsUseCase(carsRepository);
    const userCar = await viewGarageCarsUseCase.execute(david.id);

    expect(userCar[0].category).toBe(car.category);   
    expect(userCar[0].category).toBe(carInput.category); 
});