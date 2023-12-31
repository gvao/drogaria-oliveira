import { Subtitle, Title } from "@/components/typografy";
import { Button } from "@/components/basics/button";
import { HiSearch } from "react-icons/hi";
import { DetailedHTMLProps, FormHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Logotipo } from "@/components/patterns";
import { GetProducts } from "@/core/aplication/use-cases/getProducts";
import { ProductRepository } from "@/core/aplication/repository/ProductRepository";

interface ProductProps {
	title: string;
	price: number;
	description?: string;
	src?: string;
}

export default function Home() {
	return (
		<main className="container bg-cyan-50 py-10">
			<Header />

			<ProductsSection />
		</main>
	);
}

const Header = () => (
	<header className="flex items-center flex-col gap-4">
		<Logotipo className="w-32" />

		<Title>Drogaria Oliveira</Title>

		<Subtitle>O cuidado que sua saúde merece!</Subtitle>
	</header>
);

const ProductsSection = async () => {
	const repository = new ProductRepository();

	const getProducts = new GetProducts(repository);
	const products = await getProducts.execute({});

	return (
		<section className="container py-10 px-4 space-y-3">
			<Subtitle>Produtos</Subtitle>

			<FormSearch />

			<ul className="grid grid-cols-2 gap-2">
				{products.map((product, i) => (
					<ProductComponent
						key={i}
						price={product.price}
						title={product.title}
						description={product.description}
						// src={product.src}
					/>
				))}
			</ul>
		</section>
	);
};

const ProductComponent = ({ title, price, description, src }: ProductProps) => (
	<li className="flex flex-col justify-between items-stretch rounded overflow-hidden bg-cyan-100 shadow-md ">
		{/* <li className="flex flex-col justify-between items-stretch rounded overflow-hidden bg-cyan-100 shadow-md "> */}

		<img src={src} alt="produto" />

		<div
			id="infos"
			className="flex flex-col px-2 pb-4 h-full justify-between gap-2 py-3"
		>
			<div className="relative">
				<span className="text-lg text-cyan-100 bg-cyan-800 shadow-2xl rounded p-1 font-semibold absolute z-10 -top-0 right-1 -translate-y-full ">
					R$ {price}
				</span>
				<h3 className="font-semibold">{title}</h3>
				<p>{description}</p>
			</div>

			<Button>Adicionar</Button>
		</div>
	</li>
);

const FormSearch = ({
	className,
}: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>) => (
	<form className={twMerge("flex gap-2 px-2 py-2", className)}>
		<input
			type="search"
			name="searchProduct"
			id="searchProduct"
			placeholder="Encontre seu produto"
			className="w-full px-4 py-2 shadow rounded"
		/>

		<Button className="shadow w-16 ">
			<HiSearch className="w-full h-full" />
		</Button>
	</form>
);
