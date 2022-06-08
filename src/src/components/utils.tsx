export interface foodsQuery {
    name: string;
    price: number;
    image:string;
    restaurant:{
        id:number;
        name:string;
        address:string;
        location: Array<number>;
    }
}