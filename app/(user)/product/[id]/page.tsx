import React from 'react'
import { BASE_URL } from '@/lib/constants'

// type ProductType = {
//     seller: 'Tripple K'
//     category: 'Banh nek na smos jaol oy os hahaha'
//     name: 'The K Assassion 003'
//     desc: 'The word assassin originates from the Arabic term ḥashshāshīn, which referred to a medieval Islamic sect known for carrying out assassinations against political and religious adversaries.'
//     image: 'https://store.istad.co/media/brand_images/kat_killer.jpg'
//     price: '991.68'
//     quantity: 1
// }
type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

const getData = async (id: string) => {
    const res = await fetch(`${BASE_URL}api/product${id}`)
    const data = await res.json()
    console.log(data)
    return data
}

export default function ProductDetail(props: Props) {
    return <div>Product Detail</div>
}
