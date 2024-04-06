'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import CardComponents from '@/components/product/productCard'
import { Pagination } from '@nextui-org/pagination'
import ReviewPage from '@/components/review/review'

export default function App() {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const itemsPerPage = 10
    const [errored, setErrored] = useState(false)

    const fetchProducts = useCallback(async () => {
        setIsLoading(true)
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}api/products/?page=${currentPage}`,
                {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                }
            )

            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }

            const data = await response.json()
            setProducts(data.results)

            const totalPages = Math.ceil(data.total / itemsPerPage)
            setTotalPages(totalPages)
        } catch (error) {
            setErrored(true)
            console.error('Error fetching products:', error)
            setProducts([])
        } finally {
            setIsLoading(false)
        }
    }, [currentPage])

    useEffect(() => {
        fetchProducts().then((r) => [])
    }, [fetchProducts])

    if (isLoading) {
        // Loading UI
        return (
            <div className={'grid min-h-screen place-content-center'}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                >
                    <g>
                        <circle cx="12" cy="3" r="1" fill="currentColor">
                            <animate
                                id="svgSpinners12DotsScaleRotate0"
                                attributeName="r"
                                begin="0;svgSpinners12DotsScaleRotate2.end-0.5s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                            />
                        </circle>
                        <circle cx="16.5" cy="4.21" r="1" fill="currentColor">
                            <animate
                                id="svgSpinners12DotsScaleRotate1"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate0.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                            />
                        </circle>
                        <circle cx="7.5" cy="4.21" r="1" fill="currentColor">
                            <animate
                                id="svgSpinners12DotsScaleRotate2"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate4.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                            />
                        </circle>
                        <circle cx="19.79" cy="7.5" r="1" fill="currentColor">
                            <animate
                                id="svgSpinners12DotsScaleRotate3"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate1.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                            />
                        </circle>
                        <circle cx="4.21" cy="7.5" r="1" fill="currentColor">
                            <animate
                                id="svgSpinners12DotsScaleRotate4"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate6.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                            />
                        </circle>
                        <circle cx="21" cy="12" r="1" fill="currentColor">
                            <animate
                                id="svgSpinners12DotsScaleRotate5"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate3.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                            />
                        </circle>
                        <circle cx="3" cy="12" r="1" fill="currentColor">
                            <animate
                                id="svgSpinners12DotsScaleRotate6"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate8.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                            />
                        </circle>
                        <circle cx="19.79" cy="16.5" r="1" fill="currentColor">
                            <animate
                                id="svgSpinners12DotsScaleRotate7"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate5.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                            />
                        </circle>
                        <circle cx="4.21" cy="16.5" r="1" fill="currentColor">
                            <animate
                                id="svgSpinners12DotsScaleRotate8"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotatea.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                            />
                        </circle>
                        <circle cx="16.5" cy="19.79" r="1" fill="currentColor">
                            <animate
                                id="svgSpinners12DotsScaleRotate9"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate7.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                            />
                        </circle>
                        <circle cx="7.5" cy="19.79" r="1" fill="currentColor">
                            <animate
                                id="svgSpinners12DotsScaleRotatea"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotateb.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                            />
                        </circle>
                        <circle cx="12" cy="21" r="1" fill="currentColor">
                            <animate
                                id="svgSpinners12DotsScaleRotateb"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate9.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                            />
                        </circle>
                        <animateTransform
                            attributeName="transform"
                            dur="6s"
                            repeatCount="indefinite"
                            type="rotate"
                            values="360 12 12;0 12 12"
                        />
                    </g>
                </svg>
            </div>
        )
    }

    if (errored) {
        // No products available UI
        return (
            <div className={'place-content-centern grid '}>
                <h1 className={'text-center text-3xl'}>
                    No products available.
                </h1>
                <ReviewPage />
            </div>
        )
    }
    return (
        <div>
            <h1 className={'text-center text-5xl font-bold'}>Our Product </h1>
            <section className="my-5 grid min-h-screen grid-cols-1 gap-x-5 gap-y-2.5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product: any) => (
                    <CardComponents
                        key={product.id}
                        onClick={() => router.push(`/product/${product.id}`)}
                        price={product.price}
                        name={product.name}
                        image={product.image}
                        seller={product.seller}
                        category={product.category}
                    />
                ))}
            </section>
            {totalPages > 1 && (
                <div className={'flex justify-end'}>
                    <Pagination
                        total={totalPages}
                        initialPage={1}
                        page={currentPage}
                        onChange={(page) => setCurrentPage(page)}
                        loop
                        showControls
                    />
                </div>
            )}
            <ReviewPage />
        </div>
    )
}
