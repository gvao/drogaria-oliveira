import { Product } from "@/core/domain/product/product";
import { Repository } from "../../repository/interface";

type Item = {
    quantity: number
    productId: string
}

export class ShopCart {
	items: Item[] = [];

    constructor(readonly repository: Repository<Product>) {}

    async getSubtotal () {
        let subtotal: number = 0

        for(const item of this.items) {
            const product = await this.repository.getById(item.productId)
            if(!product) throw new Error(`Product ${item.productId} not found`)
            subtotal += product.price * item.quantity
        }
        return subtotal;
    }

	async addProduct({ productId, quantity }: Item) {
        const product = await this.repository.getById(productId)

        if(!product) throw new Error(`Product ${productId} not found`)

		this.items.push({
            productId,
            quantity
        });
	}

    async removeProductById(id: string) {
        this.items = this.items.filter(item => item.productId !== id)
    }
}
