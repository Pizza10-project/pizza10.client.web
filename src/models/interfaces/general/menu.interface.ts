export interface PizzaInterface {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: string
}

export interface MenuInterface {
    pizzas: PizzaInterface[]
}