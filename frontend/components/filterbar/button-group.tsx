'use strict';

import React from "react";
import {Button, ButtonGroup} from "@nextui-org/react";

export default function App() {
    return (
        <ButtonGroup isDisabled>
            <Button color={"primary"} variant="solid">Phổ biến</Button>
            <Button>Mới nhất</Button>
            <Button>Bán chạy</Button>
        </ButtonGroup>
    );
}
