import { describe, expect, it } from "vitest";
import { Product } from "../../domain/product/product";
import { Repository } from "../repository/interface";
import { CadasterProduct } from "./cadasterProduct";

class ProductsRepository {
	items: Product[] = [];

	async saveItem(product: Product) {
		await this.items.push(product);
	}
}

const makeProductFake = () => {
	const fakeProduct = {
		description: "description",
		price: 10,
		title: 'product 01'
	}
	const product = new Product(fakeProduct);

	return product
}

describe("testing cadaster product", function () {
	it("should cadaster a new product", async () => {
		const repository = new ProductsRepository();
		const cadasterProduct = new CadasterProduct(repository);
		const product = makeProductFake()
		await cadasterProduct.cadaster(product);

		expect(repository.items.length).toBe(1);
	});
});
