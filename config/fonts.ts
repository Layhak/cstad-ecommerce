import {
    Fira_Code as FontMono,
    Inter as FontSans,
    Kantumruy_Pro as Kantumruy,
} from 'next/font/google'

export const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export const fontMono = FontMono({
    subsets: ['latin'],
    variable: '--font-mono',
})

export const fontKantumruy = Kantumruy({
    subsets: ['khmer'],
    variable: '--font-kantumruy',
})
