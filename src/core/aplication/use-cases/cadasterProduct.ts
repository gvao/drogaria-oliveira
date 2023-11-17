import { Product } from "../../domain/product/product";
import { Repository } from "../repository/interface";

export class CadasterProduct {
	constructor(readonly repository: Repository) {}

	async cadaster(product: Product) {
		await this.repository.saveItem(product);
	}
}
