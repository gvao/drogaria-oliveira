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
    createdAt: Date;
    description: string;
    id: string;
    price: number;
    title: string;

    constructor({ price, title, description }: Props){
        this.title = title;
        this.description = description
        this.price = price
        this.id = crypto.randomUUID()
        this.createdAt = new Date();
    }
}

type Props = {
    price: number
    title: string
    description: string
}