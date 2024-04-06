'use client'
import React, { useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import { useRouter } from 'next/navigation' // Ensure this is 'next/router'
import { Image } from '@nextui-org/image'
import { Tooltip } from '@nextui-org/tooltip'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
    EyeIcon,
    PencilIcon,
    PlusIcon,
    TrashIcon,
} from '@/components/icon/icons'
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    useDisclosure,
} from '@nextui-org/modal'
import { Button } from '@nextui-org/button'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

type CatageoryType = {
    name: string
    icon: string
}

type ProductPostType = {
    id: number
    category: CatageoryType
    seller: string
    name: string
    desc: string
    image: string
    price: number
    quantity: number
}

const initialValues = {
    categoryName: '',
    categoryIcon: '',
    name: '',
    desc: '',
    image: '',
    price: 0,
    quantity: 0,
    fileIcon: null,
    fileProduct: null,
}

const FILE_SIZE = 1024 * 1024 * 2 // 2MB
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif']

const validationSchema = Yup.object().shape({
    categoryName: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    desc: Yup.string().nullable(),
    price: Yup.number().required('Required'),
    quantity: Yup.number().required('Required'),
    fileIcon: Yup.mixed()
        .test('fileFormat', 'Unsupported Format', (value: any) => {
            if (!value) {
                return true
            }
            return SUPPORTED_FORMATS.includes(value.type)
        })
        .test('fileSize', 'File Size is too large', (value: any) => {
            if (!value) {
                true
            }
            return value.size <= FILE_SIZE
        })

        .required('Required'),
    fileProduct: Yup.mixed()
        .test('fileFormat', 'Unsupported Format', (value: any) => {
            if (!value) {
                return true
            }
            return SUPPORTED_FORMATS.includes(value.type)
        })
        .test('fileSize', 'File Size is too large', (value: any) => {
            if (!value) {
                true
            }
            return value.size <= FILE_SIZE
        })

        .required('Required'),
})

// Updated fetchProducts function to accept page and perPage parameters
const fetchProducts = async (page: number) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}api/products/?page=${page}`
        )
        if (!res.ok) {
            throw new Error('Failed to fetch products')
        }
        const data = await res.json()
        return { data: data.results, totalRows: data.total } // Assuming your API returns a total count
    } catch (error) {
        console.error(error)
        return { data: [], totalRows: 0 }
    }
}

export default function Products() {
    const [products, setProducts] = useState<ProductPostType[]>([])
    const [totalRows, setTotalRows] = useState(0)
    const [perPage, setPerPage] = useState(10) // Set default items per page
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const CreateModal = useDisclosure()
    const DeleteModal = useDisclosure()
    const [selectedProduct, setSelectedProduct] =
        useState<ProductPostType | null>(null)

    const fetchPage = async (page: number, perPage: number) => {
        const { data, totalRows } = await fetchProducts(page)
        setProducts(data)
        console.log(data)
        setTotalRows(totalRows)
    }
    const handleDeleteProduct = async (productId: number) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}api/products/${productId}/`,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
                    },
                }
            )

            if (!response.ok) {
                // If the server response is not ok, throw an error
                throw new Error('Failed to delete the product')
            }

            // Provide user feedback
            console.log('Product deleted successfully!')
            toast.success('Product deleted successfully!')
            // Optionally: refresh the product list to reflect the deletion
            // You might want to call a function that fetches the updated product list here
        } catch (error) {
            console.error('Error deleting product:', error)
            toast.error('Error deleting product. Please try again.')
        }
    }

    // Fetch initial data
    useEffect(() => {
        fetchPage(1, perPage)
    }, [])

    // Handle page change
    const handlePageChange = (page: number) => {
        fetchPage(page, perPage)
    }

    // Handle per page change, if necessary
    const handlePerRowsChange = async (newPerPage: number, page: number) => {
        setPerPage(newPerPage)
        const { data, totalRows } = await fetchProducts(page)

        setProducts(data)
        setTotalRows(totalRows)
    }
    const handleUpdateProduct = (product: ProductPostType) => {
        setSelectedProduct(product)
        router.push(`/update/${product.id}`)
    }

    const columns: TableColumn<ProductPostType>[] = [
        {
            name: 'Name',
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: 'Price',
            selector: (row) => row.price,
            sortable: true,
        },
        {
            name: 'Seller',
            selector: (row) => row.seller,
        },
        {
            name: 'Category',
            selector: (row: any) => row.category,
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: (row) => row.quantity,
            sortable: true,
        },
        {
            name: 'image',
            cell: (row) => (
                <Image
                    src={
                        row.image ??
                        'https://nextui.org/images/hero-card-complete.jpeg'
                    }
                    width={50}
                    height={50}
                    alt={row.name ?? 'Hello'}
                />
            ),
        },
        {
            name: 'Actions',
            button: true,
            cell: (row) =>
                row.seller === 'Heng Layhak' ? (
                    <div className={'me-5 flex gap-2'}>
                        <Tooltip content="view">
                            <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                                <EyeIcon
                                    onClick={() =>
                                        router.push(`product/${row.id}`)
                                    }
                                />
                            </span>
                        </Tooltip>
                        <Tooltip content="edit">
                            <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                                <PencilIcon
                                    onClick={() => handleUpdateProduct(row)}
                                />
                            </span>
                        </Tooltip>
                        <Tooltip className={'text-red-500'} content="delete">
                            <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                                <TrashIcon
                                    color={'red'}
                                    onClick={DeleteModal.onOpen}
                                />
                            </span>
                        </Tooltip>
                        <Modal
                            isOpen={DeleteModal.isOpen}
                            onOpenChange={DeleteModal.onOpenChange}
                            placement="top-center"
                            isDismissable={false}
                        >
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1 ">
                                            Are you sure you want to delete?
                                        </ModalHeader>
                                        <ModalBody>
                                            <div
                                                className={
                                                    'flex justify-between'
                                                }
                                            >
                                                <Button
                                                    color="primary"
                                                    onPress={() => {
                                                        handleDeleteProduct(
                                                            row.id
                                                        )
                                                        onClose()
                                                    }}
                                                >
                                                    Yes
                                                </Button>
                                                <Button
                                                    color="danger"
                                                    variant="flat"
                                                    onPress={onClose}
                                                >
                                                    No
                                                </Button>
                                            </div>
                                        </ModalBody>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </div>
                ) : (
                    <div className={'me-5'}>
                        <Tooltip content="view">
                            <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                                <EyeIcon
                                    onClick={() =>
                                        router.push(`product/${row.id}`)
                                    }
                                />
                            </span>
                        </Tooltip>
                    </div>
                ),
        },
    ]
    const handleUploadIcon = async (
        file: any,
        name: any,
        typeFile: 'category' | 'product'
    ) => {
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

    const handleSubmitProduct = async (value: ProductPostType) => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}api/products/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
                },
                body: JSON.stringify(value),
            }
        )

        const data = await res.json()

        console.log('product uploade: ', data)
    }

    return (
        <div className="container mx-auto mt-6">
            <ToastContainer />
            <div className={'flex justify-between'}>
                <h1 className="mb-4 text-3xl font-bold">Products</h1>
                <Button
                    className="rounded-md bg-primary px-3 py-1 text-white "
                    onClick={CreateModal.onOpen}
                    startContent={<PlusIcon />}
                >
                    Add Product
                </Button>
                <Modal
                    isOpen={CreateModal.isOpen}
                    onOpenChange={CreateModal.onOpenChange}
                    placement="top-center"
                    isDismissable={false}
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1 ">
                                    Create the product
                                </ModalHeader>
                                <ModalBody>
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={async (
                                            values: any,
                                            actions
                                        ) => {
                                            // upload file icon
                                            const fileIcon = values.fileIcon
                                            const categoryIcon =
                                                await handleUploadIcon(
                                                    fileIcon,
                                                    values.categoryName,
                                                    'category'
                                                )

                                            // upload file product
                                            const fileProduct =
                                                values.fileProduct
                                            const productImage =
                                                await handleUploadIcon(
                                                    fileProduct,
                                                    values.name,
                                                    'product'
                                                )

                                            // create product post
                                            const productPost: ProductPostType =
                                                {
                                                    id: values.id,
                                                    seller: 'Heng Layhak',
                                                    category: {
                                                        name: values.categoryName,
                                                        icon: categoryIcon,
                                                    },
                                                    name: values.name,
                                                    desc: values.desc,
                                                    image: productImage,
                                                    price: values.price,
                                                    quantity: values.quantity,
                                                }

                                            // post product
                                            handleSubmitProduct(productPost)
                                            toast.success(
                                                'Product have been create successfully'
                                            )
                                            onClose()
                                        }}
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
                                                        htmlFor="categoryName"
                                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        categoryName
                                                    </label>
                                                    <Field
                                                        id="categoryName"
                                                        name="categoryName"
                                                        type="text"
                                                        placeholder="Enter the categoryName"
                                                        className={
                                                            'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                                                        }
                                                    />
                                                    <ErrorMessage
                                                        className={
                                                            'mt-2 text-sm text-red-600 dark:text-red-500'
                                                        }
                                                        name={'categoryName'}
                                                        component={'div'}
                                                    />
                                                </div>

                                                <div className={'mb-4'}>
                                                    <label
                                                        htmlFor="fileIcon"
                                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        File Icon
                                                    </label>
                                                    <Field
                                                        id="fileIcon"
                                                        name="fileIcon"
                                                        type="file"
                                                        setFieldValue={
                                                            setFieldValue
                                                        }
                                                        component={CustomInput}
                                                        className={
                                                            'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                                                        }
                                                    />
                                                    <ErrorMessage
                                                        className={
                                                            'mt-2 text-sm text-red-600 dark:text-red-500'
                                                        }
                                                        name={'fileIcon'}
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
                                                        id="fileProduct"
                                                        name="fileProduct"
                                                        type="file"
                                                        component={CustomInput}
                                                        setFieldValue={
                                                            setFieldValue
                                                        }
                                                        placeholder="Enter the image url"
                                                        className={
                                                            'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                                                        }
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
                                                        Your message
                                                    </label>
                                                    <Field
                                                        id="desc"
                                                        name={'desc'}
                                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                                        type="text"
                                                        component={'textarea'}
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        'flex justify-between'
                                                    }
                                                >
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
                                                        onPress={onClose}
                                                    >
                                                        Close
                                                    </Button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
            <DataTable
                className={'h-full'}
                columns={columns}
                data={products}
                pagination
                paginationServer
                paginationTotalRows={totalRows}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handlePerRowsChange}
                highlightOnHover
            />
        </div>
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
