'use client'; // This is a comment

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownSection,
    DropdownTrigger,
    NavbarItem, Popover, PopoverContent, PopoverTrigger,
} from "@nextui-org/react";
import React from "react";
import { NotificationIcon } from "../icons/navbar/notificationicon";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import NotificationCard from "@/components/notification-card/notification-card";

export const NotificationsDropdown = () => {
  return (
      <Popover placement="bottom" showArrow offset={10}>
          <PopoverTrigger>
              <NavbarItem>
                    <NotificationIcon/>
              </NavbarItem>
          </PopoverTrigger>
          <PopoverContent>
              <NotificationCard/>
          </PopoverContent>
      </Popover>
  );
};
