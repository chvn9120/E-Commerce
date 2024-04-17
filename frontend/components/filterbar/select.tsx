'use client'; // <===== REQUIRED

import React from "react";
import {Select, SelectItem} from "@nextui-org/react";

interface SelectProps {
    children: React.ReactElement[] | React.ReactElement;
}

let prices = [
    "Dưới 1 triệu",
    "1 triệu - 2 triệu",
    "2 triệu - 3 triệu",
]

const MySelect: React.FC<SelectProps> = ({children}) => {
    // @ts-ignore
    return (
        <Select
            label="Giá"
            className="max-w-xs">
            {/*Selection Items Maps*/}
            {prices.map((price, index) => (
                <SelectItem key={index} value={price}>
                    {price}
                </SelectItem>
            ))}
        </Select>
    );
}

export default MySelect;