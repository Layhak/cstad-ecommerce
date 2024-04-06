'use client'
import '@/styles/globals.css'
import { fontKantumruy, fontMono, fontSans } from '@/config/fonts'
import { Providers } from './providers'
import clsx from 'clsx'
import Sidebar from '@/components/sidebar/sidebar'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head></head>
            <body
                className={clsx(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable,
                    fontMono.variable,
                    fontKantumruy.variable
                )}
            >
                <Providers
                    themeProps={{ attribute: 'class', defaultTheme: 'dark' }}
                >
                    <main className=" flex max-w-full flex-grow items-center justify-between gap-5">
                        <Sidebar />
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    )
}
