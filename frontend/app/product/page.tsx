import {title} from "@/components/primitives";
import ProductItem from "@/components/product/product-item";
import CustomButton from "@/components/product/button";
import {ArrowLeftIcon, CheckIcon} from "@nextui-org/shared-icons";

let product = {
    // id: string;
    // name: string;
    // description: string;
    // price: number;
    // imageUrl: string;
    id: "1",
    name: "Product",
    price: 100,
    imageUrl: "/src/img_1.png",
    description: "This is a product description",
};


export default function ProductPage() {
    return (
        //returning button
        <div>
            <CustomButton className={"left-5 bg-blue-900 fixed"}>
                <ArrowLeftIcon/>
            </CustomButton>

            <ProductItem product={product}/>

        </div>

    )
}