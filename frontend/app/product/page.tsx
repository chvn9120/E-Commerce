import ProductItem from "@/components/product/product-item";
import CustomButton from "@/components/product/button";
import {ArrowLeftIcon} from "@nextui-org/shared-icons";

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