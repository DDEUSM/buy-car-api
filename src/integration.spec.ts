import axios from "axios";
import { test, expect } from "vitest";



const uri = "http://localhost:2345";

test("Should return a car", () => 
{
    const testCar = {

    };
    const car = axios.get(`${uri}/cars/${testCar.id}`);
    expect(car.id).toBe(testCar.id);
});