import { describe, expect, it } from "vitest";
import { Product } from "../../../domain/product/product";
import { ShopCart } from "./shopCart";
import { ProductRepository } from "../../repository/ProductRepository";

type ProductProps = {
	title?: string;
	description?: string;
	price?: number;
};

function makeFakeProduct({
	title = "any_product",
	description = "any_product_description",
	price = 10,
}: ProductProps) {
	return new Product({ title, description, price });
}

function makeSut() {
	const repository = new ProductRepository();
	const product01 = makeFakeProduct({
		title: "any_product",
		description: "any_product_description",
		price: 10,
	});
	const product02 = makeFakeProduct({
		title: "any_product",
		description: "any_product_description",
		price: 20,
	});

	repository.saveItem(product01);
	repository.saveItem(product02);

	const shopCart = new ShopCart(repository);

	return {
		shopCart,
		items: [productAdapter(product01, 1), productAdapter(product02, 2)],
	};
}

function productAdapter(product: Product, quantity = 1) {
	return { productId: product.id, quantity };
}

describe("testing ShopCart", function () {
	it("should create a new ShopCart", function () {
		const { shopCart } = makeSut();

		expect(shopCart.items.length).toBe(0);
	});

	it("should add a new product to the shopCart", async function () {
		const {
			shopCart,
			items: [item],
		} = makeSut();

		await shopCart.addProduct(item);
		expect(shopCart.items.length).toBe(1);
	});

	it("should return subTotal", async function () {
		const {
			shopCart,
			items: [item01, item02],
		} = makeSut();

		await shopCart.addProduct(item01);

		expect(shopCart.items.length).toBe(1);
		expect(await shopCart.getSubtotal()).toBe(10);

		await shopCart.addProduct(item02);
		expect(shopCart.items.length).toBe(2);
		expect(await shopCart.getSubtotal()).toBe(50);
	});

	it("should remove a product from the cart", async () => {
		const { shopCart, items: [ item01, item02 ] } = makeSut();

		await shopCart.addProduct(item01);
		await shopCart.addProduct(item02);
		await shopCart.removeProductById(item01.productId);

		expect(shopCart.items.length).toBe(1);
		expect(await shopCart.getSubtotal()).toBe(40);
	});
});
