import { tv } from 'tailwind-variants'

export const title = tv({
    base: 'tracking-tight inline font-semibold',
    variants: {
        color: {
            violet: 'from-[#FF1CF7] to-[#b249f8]',
            yellow: 'from-[#FF705B] to-[#FFB457]',
            blue: 'from-[#5EA2EF] to-[#0072F5]',
            cyan: 'from-[#00b7fa] to-[#01cfea]',
            green: 'from-[#6FEE8D] to-[#17c964]',
            pink: 'from-[#FF72E1] to-[#F54C7A]',
            foreground: 'dark:from-[#FFFFFF] dark:to-[#4B4B4B]',
        },
        size: {
            sm: 'text-3xl lg:text-4xl',
            md: 'text-[2.3rem] lg:text-5xl leading-9',
            lg: 'text-4xl lg:text-6xl',
        },
        fullWidth: {
            true: 'w-full block',
        },
    },
    defaultVariants: {
        size: 'md',
    },
    compoundVariants: [
        {
            color: [
                'violet',
                'yellow',
                'blue',
                'cyan',
                'green',
                'pink',
                'foreground',
            ],
            class: 'bg-clip-text text-transparent bg-gradient-to-b',
        },
    ],
})

export const subtitle = tv({
    base: 'w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full',
    variants: {
        fullWidth: {
            true: '!w-full',
        },
    },
    defaultVariants: {
        fullWidth: true,
    },
})
export const Menus = [
    {
        title: 'Table',
        src: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M4 3h16a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 4v3h4V7zm6 0v3h4V7zm10 3V7h-4v3zM4 12v3h4v-3zm0 8h4v-3H4zm6-8v3h4v-3zm0 8h4v-3h-4zm10 0v-3h-4v3zm0-8h-4v3h4z"
                />
            </svg>
        ),
        link: '/dashboard',
    },
    {
        title: 'Go Back',
        src: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M10 18l-6-6l6-6v12zM19 6v12h2V6h-2z"
                />
            </svg>
        ),
        link: '/',
    },
]
