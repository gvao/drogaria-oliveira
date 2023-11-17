import { describe, expect, it } from "vitest";
import { Product } from "./product";

describe('tenting product entity"', () => {
    
    it('should be defined', () => {
        const product = new Product({
            price: 10,
            description: 'any_description',
            title: 'any_title',
        })
        expect(product).toBeDefined()
        expect(product).toBeInstanceOf(Product)
    })
    
});
