import { Product } from "../../domain/product/product";
import { afterEach, beforeAll, beforeEach, expect, test } from "vitest";
import { ProductRepository } from "../repository/ProductRepository";
import { CadasterProduct } from "./cadasterProduct";
import { GetProducts } from "./getProducts";

const repository = new ProductRepository();

let sut: GetProducts;
let cadasterProduct: CadasterProduct;

const fakeProducts = [
	new Product({ price: 10, description: "", title: "pasta de dente" }),
	new Product({ price: 2.4, description: "", title: "chocolate lollo" }),
];

beforeAll(() => {
	sut = new GetProducts(repository);
	cadasterProduct = new CadasterProduct(repository);
});

beforeEach(async () => {
	const cadasterProducts = fakeProducts.map((fakeProduct) =>
		cadasterProduct.cadaster(fakeProduct)
	);

	await Promise.all(cadasterProducts);

	expect(repository.items.length).toBe(2);
});

afterEach(async () => {
	const products = repository.items;

	const productsRemoved = products.map((product) =>
		repository.removeById(product.id)
	);

	await Promise.all(productsRemoved);
});

test("should return products", async () => {
	const products = await sut.execute({});

	expect(products[0]).toBeInstanceOf(Product);
	expect(products.length).toBe(2);
});

test("should return quantity items", async () => {
	const products = await sut.execute({ limit: 1 });

	expect(products.length).toBe(1);
});

test("should return products per pagination", async () => {
	const quantity = 20;
	const productsList = Array(quantity).fill(
		new Product({
			price: 10,
			title: "any_title",
			description: "any_description",
		})
	);

	for (const product of productsList) {
		await cadasterProduct.cadaster(product);
	}

	expect(repository.items.length).toBe(22);

	const item01 = repository.items[2];
	const item02 = repository.items[3];

	expect((await sut.execute({})).length).toBe(15);
    
	const products = await sut.execute({ limit: 2, pagination: 2 });
	expect(products).toEqual([item01, item02]);
});
