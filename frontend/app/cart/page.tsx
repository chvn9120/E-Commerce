"use client";

// import CustomButton from "@/components/product/button";
import PurchaseForm from "@/components/form/purchase-form";
import {Divider, Image, Spacer} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {CloseIcon} from "@nextui-org/shared-icons";

let product = {
    // id: string;
    // name: string;
    // description: string;
    // price: number;
    // imageUrl: string;
    id: "1",
    name: "Product 1",
    price: 100,
    imageUrl: "/src/img_1.png",
    description: "The Nike Air Max 270 delivers an even more adaptive fit than before. Stretch material in the upper moves with your foot, while the tri-star outsole pattern adjusts to your every step for a ride that delivers support and flexibility where you need it.",
};


export default function CartPage() {
    return (
        //returning button
        <div className="flex items-center dark h-screen justify-center p-4">
            <div className="flex w-full max-w-5xl flex-col lg:flex-row lg:gap-8">
                {/*Ship and purchase*/}
                <div className="w-full">
                    <PurchaseForm/>
                </div>

                {/*Review and modify*/}
                <div
                    className="w-full mt-6 rounded-medium bg-content2 px-2 py-4 dark:bg-content1 md:px-6 md:py-8 lg:w-[340px] lg:flex-none">
                    <div className={"flex flex-col"}>
                        <h2 className="text-2xl font-semibold text-default-900">Review and modify</h2>
                        <Spacer y={2}/>

                        {/*List Cart*/}
                        <ul>
                            <li>
                                <div className={"flex items-center gap-x-4 border-divider py-4"}>
                                    <div className={"flex h-20 w-20 flex-shrink-0 items-center justify-center"}>
                                        <Image
                                            src={product.imageUrl}
                                            alt={"product"}
                                            width={80}
                                            height={80}
                                        />
                                    </div>
                                    <div className={"flex flex-1 flex-col"}>
                                        <h4 className="text-small"><a
                                            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium hover:underline hover:opacity-80 active:opacity-disabled transition-opacity underline-offset-4 font-medium text-foreground"
                                            role="link" href="#">Training shoes</a></h4>
                                        <div className="flex items-center gap-3"><p><span
                                            className="text-small text-default-500">Color: </span><span
                                            className="text-small font-medium capitalize text-default-700">black</span>
                                        </p><p><span className="text-small text-default-500">Size: </span><span
                                            className="text-small font-medium text-default-700">42</span></p></div>
                                        <div className="mt-2 flex items-center gap-2"><span
                                            className="text-small font-semibold text-default-700">$49.99</span><span
                                            className="text-small text-default-500">x 1</span></div>
                                    </div>

                                    <Button
                                        className={"z-0 bg-transparent hover:bg-secondary active:bg-primary-50 focus:bg-default-200"}
                                        isIconOnly={true}
                                        startContent={<CloseIcon/>} size={"sm"}>
                                    </Button>
                                </div>
                            </li>
                        </ul>

                        {/*Apply coupon*/}
                        <Spacer y={4}/>
                        <div className="mb-4 mt-6 flex items-end gap-2">
                            <Input size={"sm"}
                                   labelPlacement={"outside"}
                                   label={"Coupon code"}
                                   placeholder={"Enter coupon code"}

                            >
                                Coupon code
                            </Input>
                            <Button size={"sm"} color={"primary"}>Apply</Button>
                        </div>

                        <div className={"flex flex-col gap-4 py-4"}>
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="text-default-800">$300</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span className="text-default-800">$0</span>
                            </div>


                            <Divider/>
                            <div className="flex justify-between">
                                <span>Total</span>
                                <span className="text-default-800">$300</span>
                            </div>
                        </div>

                        <Spacer y={2}/>
                        <Button className={"w-auto"} color={"primary"}>Proceed to checkout</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}