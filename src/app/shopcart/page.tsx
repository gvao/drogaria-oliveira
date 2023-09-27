import { Subtitle, Title } from "@/components/typografy"
import { Button } from "@/components/basics/button"
import { Product, products } from "@/store/products"
import PopupCard from "@/components/patterns/popup"

interface CartItemProps {
    title: string
    src: string
    price: string
    description?: string
}

export default function ShopCartPage() {

    return (
        <main className="container mt-10 px-4 space-y-6">

            <Title>Carrinho</Title>

            <CartItems data={products} />

            <CartResume />

            <div id="actions" className="w-full flex justify-center">
                <Button className="shadow-lg bg-cyan-600 px-6 py-4" >
                    Enviar Pedido
                </Button>
            </div>

            <PopupCard.Root>
                <PopupCard.PopupCard>
                    confirmar
                </PopupCard.PopupCard>
            </PopupCard.Root>

        </main>
    )
}

const CartResume = () => (
    <section>
        <Subtitle>Resumo</Subtitle>

        <ul className="flex flex-col py-4 gap-2">
            <li className="w-full flex justify-between border-b-2 py-1" >
                <span>Subtotal</span>
                <span>R$ 75,00</span>
            </li>
            <li className="w-full flex justify-between border-b-2" >
                <span>Desconto</span>
                <span>R$ 100,00</span>
            </li>
            <li className="w-full flex justify-between border-b-2" >

                <span>Total</span>
                <span>R$ 15,00</span>
            </li>
        </ul>
    </section>
)

const CartItems = ({ data }: { data: Product[] }) => (
    <section className="space-y-4" >
        <Subtitle >Itens</Subtitle>

        <ul className="flex flex-col gap-2">
            {data
                .map(({ title, src, price, description }, i) => (
                    <CartItem
                        key={i}
                        title={title}
                        src={src}
                        price={price}
                        description={description}
                    />

                ))
            }
        </ul>
    </section>

)

const CartItem = ({ title, src, price, description }: CartItemProps) => (
    <li className="px-2 py-1 w-full rounded overflow-hidden bg-cyan-200 shadow-md flex items-center justify-between gap-2">
        <div id="image" className="rounded overflow-hidden bg-cyan-800 text-cyan-100">

            <img src={src} alt="" className="h-auto w-20 rounded" />
            <p className=" w-full text-center whitespace-nowrap" >R$ {price}</p>

        </div>

        <div id="description" className="basis-2/5 grow">

            <h2>{title}</h2>
            {/* <p>{description}</p> */}
        </div>

        <div id="actions" className="flex items-center gap-1 justify-center">

            <Button className="bg-red-500 text-cyan-100 shadow" >-</Button>

            <div id="info" className="justify-center flex flex-col items-center">
                <p className="whitespace-nowrap font-bold" >R$ 10,00</p>
                <span>2 und</span>
            </div>

            <Button className="bg-lime-700 text-cyan-100 shadow" >+</Button>

        </div>

    </li>
)

