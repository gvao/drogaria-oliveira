import { describe, expect, it } from "vitest";
import { ShopCart } from "./shopcart";
import { Product } from "../product/product";

function makeSut() {
	const shopCart = new ShopCart();
	return { shopCart };
}

describe("testing ShopCart", function () {
	it("should create a new ShopCart", function () {
		const { shopCart } = makeSut();

		expect(shopCart.items.length).toBe(0);
	});

	it("should add a new product to the shopCart", function () {
        const { shopCart } = makeSut()
        const product = new Product({
            title: "any_product",
            description: "any_product_description",
            price: 10,
        })

        shopCart.addProduct(product)
        expect(shopCart.items.length).toBe(1)
    });

    it("should return subTotal", function (){
        const { shopCart } = makeSut()
        const product01 = new Product({
            title: "any_product",
            description: "any_product_description",
            price: 10,
        })
        const product02 = new Product({
            title: "any_product",
            description: "any_product_description",
            price: 20,
        })

        shopCart.addProduct(product01)

        expect(shopCart.items.length).toBe(1)
        expect(shopCart.subtotal).toBe(10)
        
        shopCart.addProduct(product02)
        expect(shopCart.items.length).toBe(2)
        expect(shopCart.subtotal).toBe(30)
    })
});
