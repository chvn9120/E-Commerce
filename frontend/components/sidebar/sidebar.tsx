"use client";

import {Image, Listbox, ListboxItem, ListboxSection, Spacer} from "@nextui-org/react";
import clsx from "clsx";
import NextLink from "next/link";
import React from "react";
import {AccountsIcon} from "@/components/icons/sidebar/accounts-icon";
import {ProductsIcon} from "@/components/icons/sidebar/products-icon";

// icon, title, isActive, href =
let icon = <AccountsIcon/>;
let title = "Accounts";
let isActive = true;
let href = "/accounts";


export default function Sidebar() {
    return (
        <div
            className="relative flex h-full w-72 max-w-[288px] flex-1 flex-col !border-r-small border-divider p-6 transition-[transform,opacity,margin] duration-250 ease-in-out">
            <Image
                className={"rounded-full w-8 h-8 bg-default text-default-foreground ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-default"}
                src={"https://i.pravatar.cc/150?u=a04258114e29026708c"}
                alt={"avatar"}
                width={32}
                height={32}
            >

            </Image>


            <div className="flex flex-col"><p className="text-small font-medium text-default-600">
                Nam Tong
            </p>
                <p
                    className="text-tiny text-default-400">ADMIN </p>
            </div>


            <Spacer y={3}/>


            <div>
                <Listbox variant="flat" aria-label="Listbox menu with sections">
                    <ListboxSection title="Main">
                        <ListboxItem
                            key={"Home"}
                        >
                            <NextLink href="/" className="text-default-900 active:bg-none max-w-full">
                                <div
                                    className="flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]">
                                    <span className="text-default-900">Home</span>
                                </div>
                            </NextLink>
                        </ListboxItem>
                        {/* Dashboard */}
                        <ListboxItem
                            key={"Dashboard"}
                            className="hover:bg-default-100"
                        >
                            <NextLink href="/dashboard" className="text-default-900 active:bg-none max-w-full">
                                <div
                                    className="flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]">
                                    <span className="text-default-900">Dashboard</span>
                                </div>
                            </NextLink>
                        </ListboxItem>

                    </ListboxSection>


                    {/*Admin*/}
                    <ListboxSection
                        className={""}
                        title="Admin managerment" showDivider>
                        {/*Account*/}
                        <ListboxItem
                            className={clsx(
                                isActive
                                    ? "bg-transparent [&_svg_path]:fill-primary-500"
                                    : "hover:bg-default-100",
                                "flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]"
                            )}
                            // className="hover:bg-default-100"
                            key="view"
                            startContent={icon}
                        >
                            <NextLink
                                href={href}
                                className="text-default-900 active:bg-none max-w-full"
                            >
                                <div

                                >
                                    <span className="text-default-900">{title}</span>
                                </div>
                            </NextLink>
                        </ListboxItem>

                        {/*Product*/}
                        <ListboxItem
                            key="view"
                            className="hover:bg-default-100"
                            startContent={<ProductsIcon/>}
                            // startContent={<ViewIcon className={cn(iconClasses, "text-default-500")} />}
                        >
                            <NextLink href="/products" className="text-default-900 active:bg-none max-w-full">
                                <div
                                    className="flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]">
                                    {/*<ViewIcon className="text-default-500"/>*/}
                                    <span className="text-default-900">Products</span>
                                </div>
                            </NextLink>
                        </ListboxItem>
                    </ListboxSection>
                    <ListboxSection title="Danger zone">
                        <ListboxItem
                            key="delete"
                            className="text-danger"
                            color="danger"
                            description="Permanently delete the file"
                            // startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
                        >
                            Delete file
                        </ListboxItem>
                    </ListboxSection>
                </Listbox>
            </div>
        </div>
    )
}