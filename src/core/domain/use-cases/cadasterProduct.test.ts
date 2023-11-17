import { describe, expect, it } from "vitest";
import { Product } from "../product/product";
import { Repository } from "../repository/interface";
import { CadasterProduct } from "./cadasterProduct";

class ProductsRepository {
	items: Product[] = [];

	async saveItem(product: Product) {
		await this.items.push(product);
	}
}

describe("testing cadaster product", function () {
	it("should cadaster a new product", async () => {
		const repository = new ProductsRepository();
		const cadasterProduct = new CadasterProduct(repository);
		const product = new Product();

		await cadasterProduct.cadaster(product);

		expect(repository.items.length).toBe(1);
	});
});
