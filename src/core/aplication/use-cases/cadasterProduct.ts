import { Product } from "../../domain/product/product";
import { Repository } from "../repository/interface";

export class CadasterProduct {
	constructor(private repository: Repository<Product>) {}

	async cadaster(product: Product) {
		await this.repository.saveItem(product);
	}
}
