import { describe, expect, it } from "vitest";
import { Product } from "../../../domain/product/product";
import { ShopCart } from "./shopCart";

type ProductProps = {
	title?: string;
	description?: string;
	price?: number;
};

function makeSut() {
	const shopCart = new ShopCart();
	return { shopCart };
}

function makeFakeProduct({
	title = "any_product",
	description = "any_product_description",
	price = 10,
}: ProductProps) {
	return new Product({ title, description, price });
}

describe("testing ShopCart", function () {
	it("should create a new ShopCart", function () {
		const { shopCart } = makeSut();

		expect(shopCart.items.length).toBe(0);
	});

	it("should add a new product to the shopCart", function () {
		const { shopCart } = makeSut();
		const product = makeFakeProduct({})

		shopCart.addProduct(product);
		expect(shopCart.items.length).toBe(1);
	});

	it("should return subTotal", function () {
		const { shopCart } = makeSut();
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

		shopCart.addProduct(product01);

		expect(shopCart.items.length).toBe(1);
		expect(shopCart.subtotal).toBe(10);

		shopCart.addProduct(product02);
		expect(shopCart.items.length).toBe(2);
		expect(shopCart.subtotal).toBe(30);
	});

	it("should remove a product from the cart", () => {
		const { shopCart } = makeSut();
        
        const product01 = makeFakeProduct({})
        const product02 = makeFakeProduct({ price: 20})

        shopCart.addProduct(product01)
        shopCart.addProduct(product02)

        shopCart.removeProductById(product01.id)

        expect(shopCart.items.length).toBe(1)
	});
});
