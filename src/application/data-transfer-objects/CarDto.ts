

export class CarDto 
{       
    model: string
    brandID: string
    version: string
    category: string
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
    brandID: string
    version: string
    category: string
    modelYear: number
    color: string
    price: number       
    id?: string
}

