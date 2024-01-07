
export class CarDto 
{       
    model: string
    brandId: string
    version: string
    categoryId: string
    modelYear: number
    color: string
    price: number       
    id?: string

    constructor (                        
        props : TProps    
    ){
        Object.assign(this, props);
    }    
}

type TProps = {
    model: string
    brandId: string
    version: string
    categoryId: string
    modelYear: number
    color: string
    price: number       
    id?: string
}

