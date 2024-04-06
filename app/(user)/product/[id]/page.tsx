import React from 'react'
import { Button } from '@nextui-org/button'
import CardDetail from '@/components/product/productDetailCard'
import { Link } from '@nextui-org/link'
import { substr } from 'stylis'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id

    // fetch data
    const product = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/products/${id}`
    ).then((res) => res.json())

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || [];

    return {
        title: product.title,
        description: product.description,
        openGraph: {
            images: product.image,
        },
    }
}
const getData = async (id: string) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/products/${id}/`
    )
    const data = await res.json()
    console.log(data)
    return data
}
export default async function ProductDetail(props: Props) {
    let data = await getData(props.params.id)

    return (
        <section className={'mt-10 min-h-screen'}>
            <Link href={'/'}>Go back</Link>
            <div className={'grid grid-cols-1 gap-5 lg:grid-cols-3'}>
                <div>
                    <h1 className={'pb-5 pt-20 text-4xl font-bold'}>
                        Product Detail
                        <span className={'block pt-2 text-medium font-normal'}>
                            created by: {data.seller ?? 'Layhak'}
                        </span>
                        <span className={'block pt-2 text-medium font-normal'}>
                            on: {substr(data.created_at, 0, 10) ?? 'Layhak'}
                        </span>
                    </h1>
                    <CardDetail image={data.image} />
                </div>
                <div className={'col-span-2 py-20 '}>
                    <h1 className={'px-5 pb-5 pt-2 text-3xl font-bold'}>
                        {data.name}
                    </h1>
                    <h3
                        className={
                            'min-w-1/4 mx-5 my-5 max-w-[300px] rounded-full bg-amber-400 p-2 text-center text-medium font-bold text-gray-800 '
                        }
                    >
                        {data.category}
                    </h3>
                    <div className={'min-h-[200px]'}>
                        <p
                            className={
                                'p-5 text-lg text-gray-800 dark:text-gray-400 '
                            }
                        >
                            {data.desc}
                        </p>
                    </div>
                    <div className={'flex items-end justify-between  gap-5'}>
                        <div>
                            <p className={'my-5 px-5 pt-5 text-2xl font-bold'}>
                                ${data.price}
                            </p>
                            <Button
                                className={'mx-5 bg-primary text-gray-100'}
                                variant="solid"
                            >
                                Add to cart
                            </Button>
                        </div>
                        <h1
                            className={
                                'me-5 text-xl font-bold md:text-2xl lg:text-3xl'
                            }
                        >
                            In-Stock: {data?.quantity}
                        </h1>
                    </div>
                </div>
            </div>
            <div></div>
        </section>
    )
}
