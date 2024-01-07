import { TcarProps } from "./types"

export class Car 
{   
    id: string
    model: string
    brandId: string
    version: string
    categoryId: string
    modelYear: number
    color: string
    price: number   

    constructor ( props: TcarProps )
    {
        Object.assign(this, props);
    }
    
}

