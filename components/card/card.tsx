import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import styles from './style.module.css'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'

type ProductType = {
    category: string
    image: string
    name: string
    price: string
    seller: string
    onClick?: () => void
}
export default function CardComponents({
    category,
    image,
    name,
    price,
    seller,
    onClick,
}: ProductType) {
    return (
        <Card onClick={onClick} className={styles.card} isPressable as={Link}>
            <CardHeader className={styles.cardHeader}>
                <div className={'basis-[70%]'}>
                    <h4 className="line-clamp-1 text-large font-bold">
                        {name ?? 'Product name'}
                    </h4>
                    <small className="text-default-500">
                        {seller ?? 'Seller name'}
                    </small>
                </div>
                <div className=" basis-[30%] rounded-full bg-warning px-2 font-normal uppercase text-gray-50">
                    <h1
                        className={
                            'line-clamp-1 text-center text-[0.5rem] font-bold'
                        }
                    >
                        {category ?? 'Category name'}
                    </h1>
                </div>
            </CardHeader>
            <CardBody className=" w-full justify-self-center overflow-visible py-2 opacity-100 dark:opacity-80">
                <Image
                    alt="Card background"
                    className="h-56 w-full justify-self-center rounded-xl object-cover  "
                    width={'100%'}
                    src={
                        image ??
                        'https://nextui.org/images/hero-card-complete.jpeg'
                    }
                />
            </CardBody>
            <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-500 bg-gray-800/60 ">
                <div>
                    <p className="text-large font-bold text-gray-200">
                        ${price ?? '11'}
                    </p>
                </div>
                <Button
                    className="text-tiny"
                    color="primary"
                    radius="full"
                    size="sm"
                >
                    Shop now
                </Button>
            </CardFooter>
        </Card>
    )
}
