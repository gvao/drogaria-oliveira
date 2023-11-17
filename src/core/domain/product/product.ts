interface Entity {
	id: string;
}

export default interface ProductInterface extends Entity {
	title: string;
	describe: string;
	price: number;
	// createdAt: Date;
}

export class Product implements ProductInterface {
    createdAt: Date;
    describe: string;
    id: string;
    price: number;
    title: string;

    constructor(){
        this.title = "Product";
        this.describe = "Product"
        this.id = crypto.randomUUID()
        this.price = 20
        this.createdAt = new Date();
    }

}