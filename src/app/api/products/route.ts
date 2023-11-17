import { ProductRepository } from '@/core/aplication/repository/ProductRepository'
import { GetProducts } from '@/core/aplication/use-cases/getProducts'
import { NextRequest, NextResponse } from 'next/server'

const repository = new ProductRepository()

export async function GET(req: NextRequest) {

    const getProducts = new GetProducts(repository)
    const products = await getProducts.execute({})

    return NextResponse.json({
        products,
    })
}