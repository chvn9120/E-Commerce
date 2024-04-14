'use client'; // <===== REQUIRED

import React from "react";

import {ButtonGroup, Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {SearchIcon} from "@/components/icons";
import {CartIcon} from "@nextui-org/shared-icons";
import {ProductsIcon} from "@/components/icons/sidebar/products-icon";
import {InfoIcon} from "@/components/icons/accounts/info-icon";

interface CardProps {
    children: React.ReactNode;

}

const CardItem: React.FC<CardProps> = ({children}) => {
    return (
        <Card
            style={{}}
        >
            {/*<CardHeader>Card Header</CardHeader>*/}

            <CardBody>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Image src={'/src/img.png'}
                           style={{width: '200px', height: '200px'}}
                           isBlurred
                           isZoomed
                    >

                    </Image>

                </div>
                <div>
                    {children}
                </div>
            </CardBody>

            <CardFooter className={"space-x-4"}>

            <Button isIconOnly>
                    <CartIcon/>
                </Button>
                <Button isIconOnly>
                    <InfoIcon/>
                </Button>
            </CardFooter>


        </Card>
    );
};

export default CardItem;