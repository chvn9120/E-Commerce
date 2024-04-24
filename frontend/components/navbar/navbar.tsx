'use client'; // This is a comment

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/react";

import {Input, Link} from "@nextui-org/react";
import React from "react";
import {NotificationsDropdown} from "./notifications-dropdown";
import {UserDropdown} from "./user-dropdown";
import NextLink from "next/link";
import {Logo} from "@/components/icons";
import {siteConfig} from "@/config/site";
import clsx from "clsx";
import {link as linkStyles} from "@nextui-org/theme";
import {Kbd} from "@nextui-org/kbd";

import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
    HeartFilledIcon,
    SearchIcon,
} from "@/components/icons";
import {CartDropdown} from "./cart";


interface Props {
    children?: React.ReactNode;
}

export const NavbarWrapper = ({children}: Props) => {
    const searchInput = (
        <Input
            aria-label="Search"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",

            }}
            endContent={
                <Kbd className="hidden lg:inline-block" keys={["command"]}>
                    F
                </Kbd>
            }
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0"/>
            }
            type="search"
        />
    );

    return (
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Navbar
                isBordered
                className="w-full"
                classNames={{
                    wrapper: "w-full max-w-full",
                }}
            >
                <NavbarContent className="max-md:hidden">
                    <NavbarBrand as="li" className="gap-3 max-w-fit">
                        <NextLink className="flex justify-start items-center gap-1" href="/">
                            <Logo/>
                            <p className="font-bold text-inherit">Ecommerse</p>
                        </NextLink>
                    </NavbarBrand>
                    <ul className="hidden lg:flex gap-4 justify-start ml-2">
                        {siteConfig.navItems.map((item) => (
                            <NavbarItem key={item.href}>
                                <NextLink
                                    className={clsx(
                                        linkStyles({color: "foreground"}),
                                        "data-[active=true]:text-primary data-[active=true]:font-medium"
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

                {/*<NavbarContent className="flex">*/}
                {/*    <NavbarBrand as="li" className="gap-3 max-w-fit">*/}
                {/*        <NextLink className="flex justify-start items-center gap-1" href="/">*/}
                {/*            <Logo/>*/}
                {/*            <p className="font-bold text-inherit">Ecommerse</p>*/}
                {/*        </NextLink>*/}
                {/*    </NavbarBrand>*/}

                {/*    <p>123</p>*/}
                {/*</NavbarContent>*/}
                <NavbarContent
                    justify="end"
                    className="w-fit data-[justify=end]:flex-grow-0"
                >
                    {/*Cart item*/}
                    <CartDropdown/>


                    {/*Notification*/}
                    <NotificationsDropdown/>

                    <Link
                        href="https://github.com/chvn9120/E-Commerce"
                        target={"_blank"}
                    >
                        <GithubIcon/>
                    </Link>

                    {/*User button & Dropdown */}
                    <UserDropdown/>
                </NavbarContent>
            </Navbar>
            {children}
        </div>
    );
};
