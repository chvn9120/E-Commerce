"use client";

import {Formik} from 'formik';
import {Input, Spacer, Link, Button, Divider, Checkbox} from '@nextui-org/react';
import React from "react";
import {GithubIcon, TwitterIcon} from "@/components/icons";

const defaultSignFormData = {
    username: 'Ecommerse',
    password: '',
};

export const RegisterForm: React.FC = () => {

    // @ts-ignore
    return (
        <div className=" w-96">
            <Formik
                initialValues={defaultSignFormData}
                // validate={handleSignFormValidate}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        // toast({
                        //     title: 'Welcome.',
                        //     description: 'Start your trip next. ',
                        // });
                        // router.replace('/');
                    }, 400);
                }}
            >
                {({
                      values,
                      errors,
                      handleChange,
                      isSubmitting,
                      handleSubmit,
                      handleBlur,
                  }) => (
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <Input
                            isRequired
                            size={"lg"}
                            name="username"
                            labelPlacement={"outside"}
                            placeholder="username: Arbitrary name"
                            value={values?.username}
                            label={errors?.username || 'UserName'}
                            onValueChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Spacer y={3}/>

                        {/*Phone number*/}
                        <Input
                            isRequired
                            size={"lg"}
                            name="phone"
                            labelPlacement={"outside"}
                            placeholder="phone: 1234567890"
                            // value={values?.phone}
                            // label={errors?.phone || 'Phone'}
                            onValueChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Spacer y={3}/>

                        {/*Password*/}
                        <Input
                            isRequired
                            name="password"
                            type={"password"}
                            // shadow={false}
                            size={"lg"}
                            placeholder=""
                            // labelLeft={<Password set="bold"/>}
                            value={values?.password}
                            labelPlacement={"outside"}

                            // status={errors?.password ? 'error' : undefined}
                            label={errors?.password || 'Password'}
                            onValueChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Spacer y={3}/>

                        {/*Recheck input  */}
                        <Input
                            isRequired
                            name="repassword"
                            type={"password"}
                            // shadow={false}
                            size={"lg"}
                            placeholder="re-enter password"
                            // labelLeft={<Password set="bold"/>}
                            value={values?.password}
                            labelPlacement={"outside"}

                            // status={errors?.password ? 'error' : undefined}
                            label={errors?.password || 'Re-enter Password'}
                            onValueChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Spacer y={1}/>


                        <Spacer y={1}/>
                        <Button
                            type="submit"
                            className="w-full"
                            size="lg"
                            color="primary"
                        >
                            Sign up
                        </Button>

                        {/* Dont have account */}
                        <Spacer y={1}/>
                        <div className="flex-row justify-center">
                            <span>Already have an account? </span>
                            <Link href={"/login"} color="primary">Sign in</Link>
                        </div>

                    </form>
                )}
            </Formik>

            <Spacer y={1}/>
            <Divider/>

            <Spacer y={1}/>

            <div className="flex content-center justify-center">
                <Button isIconOnly={true}>
                    <GithubIcon/>
                </Button>

                <Spacer y={1}/>
                <Button isIconOnly={true}>
                    <TwitterIcon/>
                </Button>

            </div>

            {/*<OtherSignInPlatform />*/}
        </div>
    );
};
