import { Product } from "../../../domain/product/product";

export class ShopCart {
	items: Product[] = [];

    get subtotal(): number {
        let subtotal: number = 0
        for(const product of this.items) {
            subtotal += product.price
        }
        return subtotal;
    }

	addProduct(product: Product) {
		this.items.push(product);
	}

    removeProductById(id: string) {
        this.items = this.items.filter(item => item.id !== id)
    }
}
