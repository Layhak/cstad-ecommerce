'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ThemeSwitch } from '@/components/theme/theme-switch'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { Menus } from '@/lib/primitives'

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const { theme, setTheme } = useTheme()
    const router = useRouter()

    return (
        <div
            className={` ${
                open ? 'w-72' : 'w-20 '
            } bg-dark-purple relative h-screen  border-r-2  pt-8 duration-300`}
        >
            {/*     <img*/}
            {/*         src="https://istad.co/resources/img/CSTAD_120.png"*/}
            {/*         className={`border-dark-purple absolute -right-3 top-9 w-7 cursor-pointer*/}
            {/*rounded-full border-2  ${!open && 'rotate-180'}`}*/}
            {/*         onClick={() => setOpen(!open)}*/}
            {/*     />*/}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                onClick={() => setOpen(!open)}
                className={` absolute -right-3 top-9 w-10 cursor-pointer rounded-full  ${!open && 'rotate-180'}`}
            >
                <path
                    fill="currentColor"
                    d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-8-5l-5 5l5 5z"
                />
            </svg>
            <div className="flex items-center gap-x-4">
                <Image
                    width={40}
                    height={40}
                    alt={'logo'}
                    src="https://istad.co/resources/img/CSTAD_120.png"
                    className={`w-[40px] cursor-pointer duration-500 ${
                        open && 'rotate-[360deg]'
                    }`}
                />
                <h1
                    className={`origin-left text-xl  font-semibold text-gray-800 duration-500 dark:text-gray-50 ${
                        !open && 'scale-0'
                    }`}
                >
                    Product Dashboard
                </h1>
            </div>
            <ul className="pt-6">
                {Menus.map((Menu, index) => (
                    <li
                        key={index}
                        className={`hover:bg-light-white  } flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm  text-gray-800 duration-200 dark:text-gray-50`}
                        onClick={() => router.push(`${Menu.link}`)}
                    >
                        {/*<img src={`./src/assets/${Menu.src}.png`} />*/}
                        {Menu.src}
                        <span
                            className={`${!open && 'hidden'} origin-left duration-200`}
                        >
                            {Menu.title}
                        </span>
                    </li>
                ))}
                <li className={'fixed bottom-5'}>
                    <div className={'flex items-center gap-5'}>
                        <ThemeSwitch className={' duration-500'} />
                        <span
                            onClick={
                                theme === 'light'
                                    ? () => setTheme('dark')
                                    : () => setTheme('light')
                            }
                            className={`${!open && 'hidden'}  origin-left cursor-pointer duration-200`}
                        >
                            Theme
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar
