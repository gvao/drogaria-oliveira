import { Subtitle, Title } from "@/components/typografy"
import { Product, data } from "../page"
import { Button } from "@/components/basics/button"


export default function ShopCartPage() {


    return (
        <main className="container mt-10 px-4 space-y-5">

            <Title>Carrinho</Title>

            <CartItems data={data} />

            <CartResume />

        </main>
    )
}

interface CartItemProps {
    title: string
    src: string
    price: string
    description?: string
}

const CartResume = () => (
    <section>
        <Subtitle>Resumo</Subtitle>

        <table className="flex flex-col justify-between" > 
            <thead>
                <tr>
                    <th>Subtotal</th>
                    <th>Desconto</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>R$ 75,00</td>
                    <td>R$ 15,00</td>
                    <td>R$ 100,00</td>
                </tr>
            </tbody>
        </table>
    </section>
)

const CartItems = ({ data }: { data: Product[] }) => (
    <section>
        <Subtitle >Items</Subtitle>

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