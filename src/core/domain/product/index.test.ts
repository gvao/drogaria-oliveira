import { describe, expect, it } from "vitest";
import Product from ".";

describe('tenting product entity"', () => {
    
    it('should be defined', () => {
        const product = new Product()
        expect(product).toBeDefined()
        expect(product).toBeInstanceOf(Product)
    })
    
});
