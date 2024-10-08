'use client'; // <===== REQUIRED

import React from "react";

import {Image} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {CartIcon} from "@nextui-org/shared-icons";
import {InfoIcon} from "@/components/icons/accounts/info-icon";
import NextImage from "next/image";
import Link from "next/link";

interface CardProps {
    children: React.ReactNode;
    // router: NextRouter;
}

const CardItem: React.FC<CardProps> = ({
                                           children,
                                           // router
                                       }) => {

    // const handleCartClick = (e: any) => {
    //     e.preventDefault()
    //     router.push('/cart').then(r => r);
    // }
    //
    // const handleInfoClick = (e: any) => {
    //     e.preventDefault()
    //     router.push('/product').then(r => r);
    // }

    return (
        <div className="overflow-visible">
            {/*<CardHeader>Card Header</CardHeader>*/}

            <div className="relative shadow-black/5 shadow-none rounded-large">
                <div
                >
                    <Image
                        as={NextImage}
                        className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none object-cover transform transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large aspect-square w-full hover:scale-110"
                        src={'/src/1.jpeg'}
                        isBlurred
                        isZoomed
                        quality={75}
                        alt={'Image'}
                        layout={'responsive'}
                        width={300}
                        height={300}
                    >
                    </Image>

                </div>

                <div
                    className={"mt-1 flex flex-col gap-2 px-1"}
                >
                    <div className="mt-1 flex flex-col gap-2 px-1">
                        <div className="flex items-start justify-between gap-1"><h3
                            className="text-small font-medium text-default-700">Ponta do Sol, Portugal</h3>
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     aria-hidden="true" role="img" className="text-default-500 iconify iconify--solar"
                                     width="16" height="16" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                          d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182z"></path>
                                </svg>
                                <span className="text-small text-default-500">4.5</span></div>
                        </div>
                        <p className="text-small text-default-500">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.</p>
                        <p className="text-small font-medium text-default-500">$49.99

                        </p>

                        <div
                            className={"space-x-4 flex content-center justify-end"}>
                            <Button
                                // onClick={handleCartClick}
                                isIconOnly>
                                <CartIcon/>
                            </Button>

                            <Link
                                href={'/product'}>
                                <Button
                                    // onClick={handleInfoClick}
                                    isIconOnly={true} startContent={<InfoIcon/>}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardItem;