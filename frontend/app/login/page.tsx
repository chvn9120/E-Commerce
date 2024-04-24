// import { Container, Grid, Text, Spacer, Row } from "@nextui-org/react";
// import { LoginForm } from "./form";
// import { HomeDescription } from "./description";
// import { Brand } from "layout/navbar/brand";
// import { SwitchTheme } from "./switch";
// import { FlexBox } from "@/components";

import {HomeDescription} from "@/components/login/home-description";
import {LoginForm} from "@/components/login/login-form";
import {Spacer} from "@nextui-org/react";

export default function LoginPage() {
    return (
        <div className="flex h-dvh	">
            <div className="flex-row w-1/2 bg-primary-50">
                <div
                className=" justify-center text-center"
                >
                    <Spacer y={20}/>
                    <HomeDescription/>
                </div>
            </div>

            <div className="flex-col w-1/2 ">
                <div className="flex-col justify-center text-center">
                    <Spacer y={40}/>

                    <h2>Hi, Welcome Back! 😺 </h2>
                    <Spacer/>
                </div>

                <div className="flex justify-center text-center">
                    <LoginForm/>
                </div>
            </div>
        </div>

    );
};

