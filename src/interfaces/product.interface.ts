 // interface : solo se modela y define la estructura de datos y sus tipos (solo eso)
 export interface Product {
    name: string;
    productId: number;
    price: number;
    description : string;
    category: string;
    stock: number;
    porciones:number;
    image: string;
    userId: number;
    deliveryDate: Date
}