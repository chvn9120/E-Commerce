'use client'; // This is a comment

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/react";
import React from "react";
import {NavbarItem} from "@nextui-org/react";
import MyCartIcon from "@/components/icons/cart-icon";
import {CartIcon} from "@nextui-org/shared-icons";
import {Button} from "@nextui-org/button";


//Props
interface CartDropdownProps {
    children: React.ReactNode;
}

export const CartDropdown = () => {
    return (
        <Dropdown>
            <NavbarItem>
                <DropdownTrigger>
                    <Button isIconOnly={true} className="bg-black">
                        <MyCartIcon/>
                    </Button>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
                aria-label="User menu actions"
                onAction={(actionKey) => console.log({actionKey})}
            >
                <DropdownItem>
                    <p>Cart</p>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};
