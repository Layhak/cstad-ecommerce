import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import styles from './style.module.css'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'

export default function CardComponents() {
    return (
        <Card className={styles.card} isPressable as={Link} href={'#'}>
            <CardHeader className={styles.cardHeader}>
                <p className="text-tiny font-bold uppercase">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="text-large font-bold">Frontend Radio</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="rounded-xl object-cover"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    width={'100%'}
                />
            </CardBody>
            <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-500 bg-gray-800/60 dark:border-zinc-100/50 dark:bg-gray-50/30">
                <div>
                    <p className="text-tiny text-gray-50">Available soon.</p>
                    <p className="text-tiny text-gray-50 dark ">ស្តុកថ្មី</p>
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
