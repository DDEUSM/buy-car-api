import { TcarProps } from "./types"

export class Car 
{   
    id: string
    model: string
    brandID: string
    version: string
    category: string
    modelYear: number
    color: string
    price: number   

    constructor ( props: TcarProps )
    {
        Object.assign(this, props);
    }
    
}

