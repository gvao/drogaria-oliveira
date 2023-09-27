export type Product = {
    src: string,
    price: string,
    title: string,
    description?: string,
}

export const products: Product[] = [
    { src: 'products/giovanna.png', price: "25,00", title: "Giovanna Baby Desodorante aerosol pac c/2", description: "Desodorante incrivel da Giovanna Baby" },
    { src: 'products/giovanna.png', price: "14,00", title: "Giovanna Baby Desodorante" },
    { src: 'products/giovanna.png', price: "7,50", title: "Giovanna Baby Desodorante" },
]
