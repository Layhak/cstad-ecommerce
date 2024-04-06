'use client'
import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button } from '@nextui-org/button'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import { Image } from '@nextui-org/image'

const validationSchema = Yup.object().shape({
    category: Yup.object().shape({
        name: Yup.string().required('Required'),
    }),
    name: Yup.string().required('Required'),
    price: Yup.string().required('Required'),
    image: Yup.string().required('Required'),
    quantity: Yup.string().required('Required'),
    desc: Yup.string().required('Required'),
})
type FormDataUpdate = {
    readonly id: number
    category: { name: any }
    name: string
    desc: string
    image?: string
    price: string
    quantity: string
    seller: string
    fileProduct: any
}
export default function UpdateForm({
    category,
    name,
    price,
    image,
    quantity,
    desc,
    seller,
    id,
}: FormDataUpdate) {
    const initialValues: FormDataUpdate = {
        id: id,
        category: { name: category },
        name: name,
        price: price,
        image: image,
        quantity: quantity,
        desc: desc,
        seller: seller,
        fileProduct: null,
    }
    const router = useRouter()

    const handleUpload = async (file: any, name: any, typeFile: 'product') => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('image', file)

        const rest = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}api/file/${typeFile}/`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
                },
                body: formData,
            }
        )

        const data = await rest.json()
        return data.image
    }

    const handleSubmitProduct = async (productPost: FormDataUpdate) => {
        try {
            // If a new image file is provided, upload it and get the new image URL
            if (productPost.fileProduct) {
                const newImageUrl = await handleUpload(
                    productPost.fileProduct,
                    productPost.name,
                    'product'
                )
                productPost.image = newImageUrl
            }
            console.log('productPost', productPost)
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}api/products/${productPost.id}/`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
                    },
                    body: JSON.stringify(productPost),
                }
            )
            if (response.ok) {
                router.push('/dashboard')
            } else {
                // Handle error
                console.error('Error during product update:', response)
            }
        } catch (error) {
            console.error('Error during product update:', error)
        }
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmitProduct}
        >
            {({ setFieldValue }) => (
                <Form>
                    <div className={'mb-4'}></div>
                    <div className={'mb-4'}>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            name
                        </label>
                        <Field
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter the name"
                            className={
                                'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                            }
                        />
                        <ErrorMessage
                            className={
                                'mt-2 text-sm text-red-600 dark:text-red-500'
                            }
                            name={'name'}
                            component={'div'}
                        />
                    </div>
                    <div className={'mb-4'}>
                        <label
                            htmlFor="price"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            price
                        </label>
                        <Field
                            id="price"
                            name="price"
                            type="number"
                            placeholder="Enter the price"
                            className={
                                'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                            }
                        />
                        <ErrorMessage
                            className={
                                'mt-2 text-sm text-red-600 dark:text-red-500'
                            }
                            name={'price'}
                            component={'div'}
                        />
                    </div>
                    <div className={'mb-4'}>
                        <label
                            htmlFor="category"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            category
                        </label>
                        <Field
                            id="category"
                            name="category.name"
                            type="text"
                            placeholder="Enter the category"
                            className={
                                'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                            }
                        />
                        <ErrorMessage
                            className={
                                'mt-2 text-sm text-red-600 dark:text-red-500'
                            }
                            name={'category.name'}
                            component={'div'}
                        />
                    </div>
                    <div className={'mb-4'}>
                        <label
                            htmlFor="quantity"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            quantity
                        </label>
                        <Field
                            id="quantity"
                            name="quantity"
                            type="number"
                            placeholder="Enter the quantity"
                            className={
                                'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                            }
                        />
                        <ErrorMessage
                            className={
                                'mt-2 text-sm text-red-600 dark:text-red-500'
                            }
                            name={'quantity'}
                            component={'div'}
                        />
                    </div>

                    <div className={'mb-4'}>
                        <label
                            htmlFor="image"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Image Url
                        </label>
                        <Field
                            id="image"
                            name="fileProduct"
                            setFieldValue={setFieldValue}
                            component={CustomInput}
                        />
                        <ErrorMessage
                            className={
                                'mt-2 text-sm text-red-600 dark:text-red-500'
                            }
                            name={'fileProduct'}
                            component={'div'}
                        />
                    </div>
                    <div className={'mb-4'}>
                        <label
                            htmlFor="desc"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Description
                        </label>
                        <Field
                            id="desc"
                            name={'desc'}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            type="text"
                            component={'textarea'}
                        />
                    </div>
                    <div className={'flex justify-between'}>
                        <Button
                            type="submit"
                            color="primary"
                            // onPress={onClose}
                        >
                            Add
                        </Button>
                        <Button
                            color="danger"
                            variant="flat"
                            onClick={() => router.push('/dashboard')}
                        >
                            Cancel
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
const CustomInput = ({ field, form, setFieldValue }: any) => {
    const [imagePreview, setImagePreview] = useState('')

    const handleUploadeFile = (e: any) => {
        const file = e.target.files[0]
        const localUrl = URL.createObjectURL(file)
        console.log(localUrl)
        setImagePreview(localUrl)

        setFieldValue(field.name, file)
    }
    return (
        <div>
            <input onChange={(e) => handleUploadeFile(e)} type="file" />
            {imagePreview && (
                <Image
                    src={imagePreview}
                    alt="preview"
                    width={100}
                    height={100}
                />
            )}
        </div>
    )
}
