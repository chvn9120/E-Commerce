'use client'; // <===== REQUIRED

import React from "react";
import {Card, CardBody} from "@nextui-org/react";

interface CardProps {
    children: React.ReactNode;

}

const MyCard: React.FC<CardProps> = ({children}) => {
    return (
        <Card
            style={{ width: '1200px' }}
        >
            <CardBody>

                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    {children}
                </div>
            </CardBody>
        </Card>
    );
};

export default MyCard;