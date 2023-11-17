import { Product } from "../product/product";

export class ShopCart {
	items: Product[] = [];
	// private subtotal = 0;

	addProduct(product: Product) {
		this.items.push(product);
	}

	get subtotal(): number {
        let subtotal: number = 0
        for(const product of this.items) {
            subtotal += product.price
        }
		return subtotal;
	}
}
