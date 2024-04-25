import {Chip, Tooltip} from "@nextui-org/react";
import React from "react";
import {DeleteIcon} from "../icons/table/delete-icon";
import {EditIcon} from "../icons/table/edit-icon";
import {EyeIcon} from "../icons/table/eye-icon";
import {products} from "./data";

interface Props {
    product: (typeof products)[number];
    columnKey: string | React.Key;
}

export const RenderCellProduct = ({product, columnKey}: Props) => {
    // @ts-ignore
    const cellValue = product[columnKey];
    switch (columnKey) {
        case "name":
            return (
                <p>
                    {cellValue}
                </p>
            );

        case "status":
            return (
                <Chip
                    size="sm"
                    variant="flat"
                    color={
                        cellValue === "active"
                            ? "success"
                            : cellValue === "paused"
                                ? "danger"
                                : "warning"
                    }
                >
                    <span className="capitalize text-xs">{cellValue}</span>
                </Chip>
            );

        case "actions":
            return (
                <div className="flex items-center gap-4 ">
                    <div>
                        <Tooltip content="Details">
                            <button onClick={() => console.log("View product", product.id)}>
                                <EyeIcon size={20} fill="#979797"/>
                            </button>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip content="Edit product" color="secondary">
                            <button onClick={() => console.log("Edit product", product.id)}>
                                <EditIcon size={20} fill="#979797"/>
                            </button>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip
                            content="Delete product"
                            color="danger"
                            onClick={() => console.log("Delete product", product.id)}
                        >
                            <button>
                                <DeleteIcon size={20} fill="#FF0080"/>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            );
        // Brand
        case "brand":
            return <span>{cellValue}</span>;

        // Size
        case "size":
            return <span>{cellValue}</span>;

        // Color
        case "color":
            return <span>{cellValue}</span>;

        // Price
        case "price":
            return <span>{cellValue}</span>;
        //Description
        case "description":
            return <div className={"w-20"}>
                <p className={"truncate hover:text-clip"}>
                    {cellValue}
                </p>
            </div>;

        default:
            return cellValue;
    }
};
