'use client'
import React from 'react';
import {
    Accordion,
    AccordionItem,
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure
} from "@nextui-org/react";
import {PaymentsIcon} from "@/components/icons/sidebar/payments-icon";
import {CartIcon} from "@nextui-org/shared-icons";
import SwiperThumbnail from "@/components/sidebar/product-thumbnail";
import PurchaseForm from "@/components/form/purchase-form";
import ColorRadio from "@/components/radio/color-radio";
import SizeRadio from "@/components/radio/size-radio";

// import RadioCustom from "@/components/radio/color-radio";

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
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div className="">
            <div className="relative flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                {/*Image*/}
                <div className="relative h-full w-full flex-none">
                    {/*Big image*/}
                    <SwiperThumbnail/>
                </div>
                {/*Details*/}
                <div
                    className="flex flex-col">
                    <h1 className="inline bg-gradient-to-br from-foreground-800 to-foreground-500 bg-clip-text text-6xl font-semibold tracking-tight text-transparent dark:to-foreground-200">{product.name}</h1>
                    {/*Price*/}
                    <p className="text-xl font-medium text-default-800 tracking-tight">{product.price} $</p>


                    {/*Ratings*/}
                    <div className="class=my-2 flex items-center gap-2">
                        <span>⭐⭐⭐⭐⭐</span>
                        <span className="text-default-600">5 reviews</span>
                    </div>


                    {/*Choose attribute*/}
                    <div className="relative flex flex-col gap-2 ml-1 mt-6">
                        <ColorRadio/>
                    </div>


                    <p className="line-clamp-3 text-medium text-default-500">{product.description}</p>


                    <div className="mt-6 flex flex-col gap-1">
                        <div className="mb-4 flex items-center gap-2 text-default-700">
                            <div className={"flex flex-row gap-2"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                     viewBox="0 0 32 32">
                                    <path fill="currentColor"
                                          d="M0 6v2h19v15h-6.156c-.446-1.719-1.992-3-3.844-3c-1.852 0-3.398 1.281-3.844 3H4v-5H2v7h3.156c.446 1.719 1.992 3 3.844 3c1.852 0 3.398-1.281 3.844-3h8.312c.446 1.719 1.992 3 3.844 3c1.852 0 3.398-1.281 3.844-3H32v-8.156l-.063-.157l-2-6L29.72 10H21V6zm1 4v2h9v-2zm20 2h7.281L30 17.125V23h-1.156c-.446-1.719-1.992-3-3.844-3c-1.852 0-3.398 1.281-3.844 3H21zM2 14v2h6v-2zm7 8c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m16 0c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2"></path>
                                </svg>
                                <p>
                                    Free shipping for beautiful girls
                                </p>
                            </div>
                        </div>


                        <div
                            className="relative flex flex-col gap-1"
                        >
                            <SizeRadio/>
                        </div>
                    </div>

                    <div className="px-2 w-full -mx-1 mt-2">
                        <Accordion variant="light">
                            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                                {/*    List has dot in start*/}
                                <ul className="list-disc list-inside">
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                                <ul className="list-disc list-inside">
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                                <ul className="list-disc list-inside">
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="mt-2 flex gap-2">
                        <Button onPress={
                            onOpen
                        } className="basis-3/4 bg-primary" startContent={<PaymentsIcon/>}>Buy now</Button>
                        <Button className="basis-2/5 bg-secondary" startContent={<CartIcon/>}>Add to cart </Button>
                    </div>

                    <Modal
                        size={"xl"}
                        placement={"bottom-center"}
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                        scrollBehavior={"inside"}
                        backdrop={"blur"}
                        isDismissable={false}
                        isKeyboardDismissDisabled={true}
                        classNames={{
                            body: "",
                            backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                            base: "text-center border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
                            header: "border-b-[1px] border-[#292f46]",
                            footer: "border-t-[1px] border-[#292f46]",
                            closeButton: "hover:bg-white/5 active:bg-white/10",
                        }}
                    >
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader>Purcharge</ModalHeader>
                                    <ModalBody>
                                        <PurchaseForm/>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Cancel
                                        </Button>
                                        <Button color="primary" onPress={onClose}>
                                            Purchase
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>


                </div>
            </div>
        </div>
    );
};

export default ProductItem;