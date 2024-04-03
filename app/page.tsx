'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BASE_URL } from '@/lib/constants'
import CardComponents from '@/components/card/card'

export default function Home() {
    const [products, setProducts] = useState([])
    const router = useRouter()
    useEffect(() => {
        fetch(`${BASE_URL}api/products/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Replace 'Your_Authorization_Key' with your actual authorization key
                Authorization:
                    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0MjI0Nzc4LCJpYXQiOjE3MTIwNjQ3NzgsImp0aSI6IjE4ZjA3OWUyMTc0YjRlNGNhN2EzMjNlNjdlMTExZjJjIiwidXNlcl9pZCI6OH0.39yi-CSGferjFGHDs2F2aeIYexf4uboOI7-cVjI-YlE',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                console.log(data.results)
                // setProducts(data)
            })
    }, [])
    return (
        <section>
            <CardComponents />
            {/*{products.map((product: any, index) => (*/}
            {/*    <h1>Hello</h1>*/}
            {/*))}*/}
        </section>
    )
}
