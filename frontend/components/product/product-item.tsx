'use client'
import React from 'react';
import {ButtonGroup, Image, Radio, RadioGroup} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {PaymentsIcon} from "@/components/icons/sidebar/payments-icon";
import {CartIcon} from "@nextui-org/shared-icons";
import NextImage from "next/image";
import SwiperThumbnail from "@/app/product/product-thumbnail";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
    return (
        <div className="flex flex-row ">
            <div className=" w-max grid md:grid-cols-2 sm:grid-cols-1">
                {/*Image*/}
                <div className="h-96 w-96">
                    {/*Big image*/}
                    <SwiperThumbnail/>
                </div>
                {/*Details*/}
                <div className="border-e-gray-50 bg-amber-400">
                    <h1 className="text-3xl">{product.name}</h1>
                    {/*Ratings*/}
                    <div>
                        <span>⭐⭐⭐⭐⭐</span>
                    </div>

                    {/*Choose attribute*/}
                    <RadioGroup orientation={"horizontal"} className="">
                        <Radio value="1">Att1</Radio>
                        <Radio value="2">Att2</Radio>
                        <Radio value="3">Att3</Radio>
                    </RadioGroup>

                    <p>
                        Free shipping for beautiful girls
                    </p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <Button startContent={<PaymentsIcon/>}>Buy now</Button>
                    <Button startContent={<CartIcon/>}>Add to cart </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;