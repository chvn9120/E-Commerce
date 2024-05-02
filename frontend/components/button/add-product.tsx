import {
    Autocomplete,
    AutocompleteItem,
    Button,
    Chip,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Select,
    SelectItem,
    Textarea,
    useDisclosure,
} from "@nextui-org/react";
import React from "react";
import {Upload} from "react-iconly";
// @ts-ignore
import Files from 'react-files'

//function Open input file

const handleChange = (files: any) => {
    console.log(files)
}

const handleError = (error: { code: string; message: string; }, file: any) => {
    console.log('error code ' + error.code + ': ' + error.message)
}

const brands = [
    {label: 'Adidas', value: 'adidas'},
    {label: 'Nike', value: 'nike'},
    {label: 'Puma', value: 'puma'},
    {label: 'Reebok', value: 'reebok'},
    {label: 'Under Armour', value: 'underArmour'},
];

let sizeValue = [
    {label: 'S', value: 's'},
    {label: 'M', value: 'm'},
    {label: 'L', value: 'l'},
    {label: 'XL', value: 'xl'},
    {label: 'XXL', value: 'xxl'},
    {label: 'XXXL', value: 'xxxl'},
]
//tailwindcss colors
let colorValue = [
    {label: 'Red', value: '#C20E4D'},
    {label: 'Green', value: '#10B981'},
    {label: 'Blue', value: '#3B82F6'},
    {label: 'Yellow', value: '#F59E0B'},
    {label: 'Gray', value: '#6B7280'},
    {label: 'Black', value: '#111827'},
]


export const AddProduct = () => {
    let initialSize: string[] = [
        // "S",
        // "M",
        // "L",
        // "XL",
        // "XXL",
        // "XXXL",
    ]

    let initialColor: string[] = [
        // "Red",
        // "Green",
        // "Blue",
        // "Yellow",
        // "Gray",
        // "Black",
    ]
    const [sizes, setSizes] = React.useState(new Set(initialSize));
    const [colors, setColors] = React.useState(new Set(initialColor));

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div>
            <>
                <Button onPress={onOpen} color="primary">
                    Add Product
                </Button>
                <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement="top-center"
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">
                                    Add Product
                                </ModalHeader>
                                <ModalBody>
                                    {/*Add Product Image*/}
                                    <div
                                        className={"flex flex-col w-full rounded-lg p-10 border-2 border-gray-200/20 border-dashed bg-transparent"}>


                                        {/*Upload files*/}
                                        <Files
                                            className='files-dropzone'
                                            onChange={handleChange}
                                            onError={handleError}
                                            accepts={['image/png', '.pdf', 'audio/*']}
                                            multiple
                                            maxFileSize={10000000}
                                            minFileSize={0}
                                            clickable>
                                            <div className={"content-center"}>
                                                <Upload primaryColor="currentColor"/>
                                            </div>

                                            <div className={"flex flex-col gap-1"}>
                                            <span className={"text-sm text-gray-500"}>
                                                Drag and drop an image here or click to upload
                                            </span>
                                                <span className={"text-sm text-gray-500"}>
                                                Image should be at least 400x400px
                                            </span>

                                                <input
                                                    type="file"
                                                    style={{display: 'none'}}
                                                    // ref={fileInputRef}
                                                    // onChange={handleFileChange}
                                                />

                                            </div>
                                        </Files>
                                    </div>


                                    {/*Product name*/}
                                    <Input
                                        name={"product-name"}
                                        label={"Product Name"}
                                        labelPlacement={"outside"}
                                        className={"max-w-xs w-full"}
                                        placeholder="Enter product name"
                                    />
                                    {/* Brand */}
                                    <Autocomplete
                                        label="Brand"
                                        placeholder="Select a brand"
                                        className="max-w-xs"
                                        defaultItems={brands}
                                    >
                                        {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                                    </Autocomplete>

                                    {/*Size*/}
                                    <Select
                                        label="Select Size"
                                        selectionMode="multiple"
                                        placeholder="Select Size"
                                        selectedKeys={sizes}
                                        className="max-w-xs"
                                        // @ts-ignore
                                        onSelectionChange={
                                            (keys: any) => {
                                                setSizes(new Set(keys as string[]));
                                            }
                                        }
                                    >
                                        {sizeValue.map((size) => (
                                            <SelectItem key={size.value} value={size.value}>
                                                {size.label}
                                            </SelectItem>
                                        ))}
                                    </Select>

                                    <div className={"flex-row space-x-2"}>
                                        {Array.from(sizes).map((size, index) => (
                                            <Chip key={index}
                                                  onClose={() => {
                                                      //TODO: Remove size from sizes
                                                  }}
                                                  variant="flat">
                                                {sizeValue.find((s) => s.value === size)?.label || size}
                                            </Chip>
                                        ))}
                                    </div>

                                    {/* Color */}
                                    <Select
                                        label="Select Color"
                                        selectionMode="multiple"
                                        placeholder="Select Color"
                                        selectedKeys={colors}
                                        className="max-w-xs"
                                        onSelectionChange={
                                            (keys: any): any => {
                                                setColors(new Set(keys as string[]));
                                            }
                                        }
                                    >
                                        {colorValue.map((color) => (
                                            <SelectItem key={color.value} value={color.value}>
                                                {color.label}
                                            </SelectItem>
                                        ))}

                                    </Select>

                                    <div className={"flex-row space-x-2"}>
                                        {Array.from(colors).map((color, index) => (
                                            <Chip key={index}
                                                  onClose={() => {
                                                  }}
                                                  variant="flat"
                                                  style={{backgroundColor: color}}
                                            >
                                                {colorValue.find((c) => c.value === color)?.label || color}
                                            </Chip>
                                        ))}
                                    </div>


                                    {/*Description*/}
                                    <Textarea
                                        label={"Description"}
                                        labelPlacement={"outside"}
                                        placeholder={"Enter description"}
                                    >

                                    </Textarea>

                                    {/*Price*/}
                                    <Input
                                        name={"price"}
                                        type={"number"}
                                        labelPlacement={"outside"}
                                        label={"Price"}
                                        placeholder="Price"
                                    />


                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="flat" onClick={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        Add Product
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </>
        </div>
    );
};
