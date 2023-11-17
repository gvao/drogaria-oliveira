interface Entity {
	id: string;
}

export default interface ProductInterface extends Entity {
	title: string;
	describe: string;
	price: number;
	// createdAt: Date;
}

export default class Product implements ProductInterface {
    createdAt: Date;
    describe: string;
    id: string;
    price: number;
    title: string;

    constructor(){
        this.title = "Product";
        this.describe = "Product"
        this.id = "product_id"
        this.price = 20
        this.createdAt = new Date();
    }

}