import { Product } from "@/core/domain/product/product";
import { Repository } from "./interface";

export class ProductRepository implements Repository<Product> {
	items: Product[] = [];

	async getById(id: string): Promise<Product> {
        
		if (typeof id !== "string") throw new Error("Invalid parameter");

		const product = this.items.find((item) => item.id === id);

		if (!product) throw new Error(`Product ${id} not found`);
		return product;
	}

	async saveItem(item: Product): Promise<void> {
		this.items.push(item);
	}

	async removeById(id: string) {
		this.items = this.items.filter((item) => item.id !== id);
	}
}
