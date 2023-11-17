import { Product } from "../../domain/product/product";
import { Repository } from "../repository/interface";

type Props = { 
    limit?: number,
    pagination?: number,
}

export class GetProducts {
	constructor(readonly repository: Repository<Product>) {}

	async execute({ limit = 15, pagination = 0 }: Props): Promise<Product[]> {
		const products = await this.repository.getAll();
		const splice = products.splice(limit * pagination, limit);
		return splice;
	}
}
