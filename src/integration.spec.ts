import axios from "axios";
import { test, expect, describe } from "vitest";


describe("Integration Tests", () => 
{
    const uri = "http://localhost:2345";

    test("Should return a car", async () => 
    {
        const testCar = {
            id:  "54652fr344"
        };
        const response: any = await axios.post(`${uri}/cars`, testCar)
        .catch(error => console.log(error.response));

        const cars = response.data;    
            
        expect(cars[0].id).toBe(testCar.id);
        expect(cars[0].model).toBe("supra");
        
    });

    test("Test error status code of view cars feature, with 2 different cars", async () => 
    {
        let statusCode;
        const testCar = {
            id:  "this id not exist"
        };
        const response: any = await axios.post(`${uri}/cars`, testCar)
        .catch(error => 
        {
            console.log(error.response);
            statusCode = error.response.status;
        });

        expect(statusCode).toBe(404);
        
    });
})

