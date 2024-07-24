import {Input} from "@nextui-org/input";
import {Radio, RadioGroup} from "@nextui-org/react";
import React from "react";
import PaymentMethod from "@/components/payment-method/payment-method";

export default function PurchaseForm() {
    return (
        <div className="flex items-center dark h-auto text-center mx-auto">
            <div className="flex w-full max-w-2xl py-8">
                <form className="flex flex-col gap-5 py-8">
                    {/*Email*/}
                    <div
                        className="group flex flex-col w-full group relative justify-end">
                        <Input
                            labelPlacement="outside"
                            label="Email address"
                            placeholder="Enter your email address"
                            required>
                        </Input>
                    </div>

                    {/*Name*/}
                    <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                        {/*First Name*/}
                        <div
                            className="group flex flex-col w-full group relative justify-end">
                            <Input
                                labelPlacement="outside"
                                isRequired={true}
                                label="First Name"
                                placeholder="Enter your first name"
                                required>
                            </Input>
                        </div>


                        {/*Last Name*/}
                        <div
                            className="group flex flex-col w-full group relative justify-end">
                            <Input
                                labelPlacement="outside"

                                label="Last Name"
                                placeholder="Enter your last name"
                                required>
                            </Input>
                        </div>
                    </div>

                    {/*Address*/}
                    <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                        {/*Address*/}
                        <div
                            className="group flex flex-col w-full group relative justify-end">
                            <Input
                                labelPlacement="outside"

                                label="Address"
                                placeholder="Le Van Luong, District 7, HCMC, Vietnam"
                                required>
                            </Input>
                        </div>

                        {/*Specific address*/}
                        <div
                            className="group flex flex-col w-full group relative justify-end">
                            <Input
                                labelPlacement="outside"

                                label="Specific address"
                                placeholder="RMIT Univercity"
                                isRequired>
                            </Input>
                        </div>
                    </div>

                    {/*City and Country*/}
                    <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                        {/*City*/}
                        <div
                            className="group flex flex-col w-full group relative justify-end">
                            <Input
                                labelPlacement="outside"

                                label="City"
                                placeholder="Ho Chi Minh City"
                                isRequired>
                            </Input>
                        </div>

                        {/*Country*/}
                        <div
                            className="group flex flex-col w-full group relative justify-end">
                            <Input
                                labelPlacement="outside"

                                label="Country"
                                placeholder="Vietnam"
                                required>
                            </Input>
                        </div>
                    </div>

                    {/*Postcode and Phone number*/}
                    <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                        {/*Postcode*/}
                        <div
                            className="group flex flex-col w-full group relative justify-end">
                            <Input
                                labelPlacement="outside"

                                label="Postcode"
                                placeholder="700000"
                                required>
                            </Input>
                        </div>

                        {/*Phone number*/}
                        <div
                            className="group flex flex-col w-full group relative justify-end">
                            <Input
                                labelPlacement="outside"

                                label="Phone number"
                                placeholder="0901234567"
                                required>
                            </Input>
                        </div>
                    </div>

                    {/*Address Type*/}
                    <div className="relative flex flex-col gap-2 ml-1 mt-6">
                                                        <span
                                                            className="relative text-foreground-500">Address type</span>
                        <RadioGroup orientation={"horizontal"} className="">
                            <Radio value="1">Home</Radio>
                            <Radio value="2">Work</Radio>
                            <Radio value="3">Other </Radio>
                        </RadioGroup>
                    </div>

                    {/*Payment method*/}
                    {/*<div className="relative flex flex-col gap-2 ml-1 mt-3">*/}
                    {/*                                    <span*/}
                    {/*                                        className="relative text-foreground-500">Payment method</span>*/}
                    {/*    <RadioGroup orientation={"horizontal"} className="">*/}
                    {/*        <Radio value="1">Credit Card</Radio>*/}
                    {/*        <Radio value="2">Paypal</Radio>*/}
                    {/*        <Radio value="3">Other </Radio>*/}
                    {/*    </RadioGroup>*/}
                    {/*</div>*/}
                    <PaymentMethod className="w-[420px]"/>

                    {/*Card number*/}
                    <div
                        className="group flex flex-col w-full group relative justify-end">
                        <Input
                            labelPlacement={"outside"}
                            label="Card number"
                            placeholder="XXXX-XXXX-XXXX-XXXX"
                            isRequired>
                        </Input>
                    </div>

                    {/*Cardholder Name*/}
                    <div
                        className="group flex flex-col w-full group relative justify-end">
                        <Input
                            labelPlacement={"outside"}
                            label="Cardholder Name"
                            placeholder="Enter your cardholder name"
                            required>
                        </Input>
                    </div>


                </form>
            </div>
        </div>
    )
}