import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'

import { link as linkStyles } from '@nextui-org/theme'

import { siteConfig } from '@/config/site'
import NextLink from 'next/link'
import clsx from 'clsx'

import { ThemeSwitch } from '@/components/theme-switch'
import { Logo, NewIcon, UserIcon } from '@/components/icons'

export const Navbar = () => {
    return (
        <NextUINavbar
            maxWidth="xl"
            position="sticky"
            isBlurred={true}
            className={'opacity-90'}
        >
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="max-w-fit gap-3">
                    <NextLink
                        className="flex items-center justify-start gap-1"
                        href="/"
                    >
                        <Logo />
                        <p className="font-bold text-inherit">ACME</p>
                    </NextLink>
                </NavbarBrand>
                <ul className="ml-2 hidden justify-start gap-4 lg:flex">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                className={clsx(
                                    linkStyles({ color: 'foreground' }),
                                    'data-[active=true]:font-medium data-[active=true]:text-primary'
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarContent
                className="hidden basis-1/5 sm:flex sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden gap-2 sm:flex">
                    <ThemeSwitch />
                </NavbarItem>
                <NavbarItem className="hidden gap-5 md:flex">
                    <Button
                        isExternal
                        as={Link}
                        className="bg-primary text-sm font-normal dark:bg-primary"
                        href={'#'}
                        startContent={<UserIcon />}
                        variant="solid"
                    >
                        Login
                    </Button>
                    <Button
                        isExternal
                        as={Link}
                        className="bg-success text-sm font-normal dark:bg-success"
                        href={'#'}
                        startContent={<NewIcon />}
                        variant="solid"
                    >
                        Register
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2
                                        ? 'primary'
                                        : index ===
                                            siteConfig.navItems.length - 1
                                          ? 'danger'
                                          : 'foreground'
                                }
                                href="#"
                                size="lg"
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    )
}
