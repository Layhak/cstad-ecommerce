import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'
import { fontKantumruy, fontMono, fontSans } from '@/config/fonts'
import { Providers } from './providers'
import { Navbar } from '@/components/navbar/navbar'
import clsx from 'clsx'
import Footer from '@/components/footer/footer'

export const metadata: Metadata = {
    title: 'Ecommerce Web',
    description: 'Ecommerce Website is the web application for selling product',
    openGraph: {
        title: 'Ecommerce Web',
        description:
            'Ecommerce Website is the web application for selling product',
        images: 'https://store.istad.co/media/brand_images/image.png',
    },
}
export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
}

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
                    <div className="relative flex h-screen flex-col">
                        <Navbar />
                        <main className="container mx-auto max-w-7xl flex-grow px-6 pt-5">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    )
}
