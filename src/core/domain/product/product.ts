interface Entity {
	id: string;
}

export default interface ProductInterface extends Entity {
	title: string;
	description: string;
	price: number;
	// createdAt: Date;
}

export class Product implements ProductInterface {
    id: string;
    title: string;
    description: string;
    price: number;
    createdAt: Date;

    constructor({ id, price, title, description }: Props){
        this.title = title;
        this.description = description
        this.price = price
        this.id = id || crypto.randomUUID()
        this.createdAt = new Date();
    }
}

type Props = {
    id?: string
    price: number
    title: string
    description: string
}