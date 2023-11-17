import { expect, test, beforeEach, describe, it } from "vitest";
import { ProductRepository } from "./ProductRepository";
import { Product } from "../../domain/product/product";

let sut: ProductRepository;
const productsFakes = [
	new Product({
		title: "any_product_01",
		description: "any_description",
		price: 10,
	}),
	new Product({
		title: "any_product_02",
		description: "any_description",
		price: 20,
	}),
];

beforeEach(() => {
	sut = new ProductRepository();
});

beforeEach(async () => {
	for (const product of productsFakes) {
		await sut.saveItem(product);
	}
	expect(sut.items.length).toBe(2);
});

describe("happy path", function () {
	test("should instance product repository", () => {
		expect(sut).toBeInstanceOf(ProductRepository);
		expect(sut.items.length).toBe(2);
	});

	test("should get product by id", async () => {
		const [productFake] = productsFakes;
		const product = await sut.getById(productFake.id);

		expect(product).toEqual(productFake);
	});

	it("should remove product in repository", async () => {
		const [productFake] = productsFakes;

		expect(sut.items.length).toBe(2);
		sut.removeById(productFake.id);
		expect(sut.items.length).toBe(1);
	});

	it("should o repository empty", async () => {
		for (const product of sut.items) {
            await sut.removeById(product.id)
		}
        expect(sut.items.length).toBe(0);
	});
});

describe("unhappy path", function () {
	it("should return error if received id is not valid", async () => {
        const parameters = [
            undefined,
            null,
            {},
        ]

        for (const parameter of parameters) {
            await expect(() => sut.getById(parameter as string)).rejects.toThrow('Invalid parameter')
        }
    });

    it('should return error when send id not found', async () => {
        await expect(() => sut.getById('any_id')).rejects.toThrow(`Product any_id not found`)
    })
});
