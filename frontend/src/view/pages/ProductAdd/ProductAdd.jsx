import React, {useState} from "react";
import {Button, InputLabel} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {styled} from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import {Link} from "react-router-dom";
import axios from "axios";

const baseURL = 'http://localhost:8080/backend_war/manageItem';
export const ProductAdd = () => {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const [data, setData] = useState([]);
    const [skuInput, setSkuInput] = useState('');
    const [productNameInput, setProductNameInput] = useState('');
    const [categoryInput, setCategoryInput] = useState('');
    const [subCategoryInput, setSubCategoryInput] = useState('');
    const [brandInput, setBrandInput] = useState('');
    const [unitInput, setUnitInput] = useState('');
    const [minQtyInput, setMinQtyInput] = useState('');
    const [qtyInput, setQtyInput] = useState('');
    const [descInput, setDescInput] = useState('');
    const [priceInput, setPriceInput] = useState('');
    const [imageInput, setImageInput] = useState('');

    const addProduct = async () => postData('/save', {
        sku: skuInput,
        productName: productNameInput,
        category:categoryInput,
        sub_category:subCategoryInput,
        brand:brandInput,
        unit:unitInput,
        minimum_qty:minQtyInput,
        qty:qtyInput,
        description:descInput,
        price:priceInput,
        product_image:imageInput,
    });

    const postData = async (endpoint, payload) => {
        try {
            const response = await axios.post(baseURL + endpoint, payload);
            console.log(response.data);
        } catch (error) {
            alert(`Error: ${error.response?.data?.error || error.message}`);
        }
    };

    return (
        <div className="flex flex-wrap p-5">
            <div className="flex w-full">
                <div className="float-left w-1/2">
                    <h1 className="font-bold text-xl">Product Add</h1>
                    <h4 className="text-md">Create New Product</h4>
                </div>

            </div>
            <div className="flex flex-wrap w-full p-5 mt-6 h-fit bg-white">
                <div className="flex flex-wrap w-1/4 pr-5 mb-5">
                    <InputLabel htmlFor="productName">Product Name </InputLabel>
                    <input type="text" value={productNameInput} onChange={(e) => setProductNameInput(e.target.value)}
                           className="block w-full px-4 py-2 mt-2 border
                                   rounded"/>
                </div>
                <div className="flex flex-wrap w-1/4 pr-5 mb-5">
                    <InputLabel htmlFor="category">Category </InputLabel>
                    <input type="text" value={categoryInput} onChange={(e) => setCategoryInput(e.target.value)}
                           className="block w-full px-4 py-2 mt-2 border
                                   rounded"/>
                </div>
                <div className="flex flex-wrap w-1/4 pr-5 mb-5">
                    <InputLabel htmlFor="subCategory">Sub Category </InputLabel>
                    <input type="text" value={subCategoryInput} onChange={(e) => setSubCategoryInput(e.target.value)}
                           className="block w-full px-4 py-2 mt-2 border
                                   rounded"/>
                </div>
                <div className="flex flex-wrap w-1/4 mb-5">
                    <InputLabel htmlFor="brand">Brand </InputLabel>
                    <input type="text" value={brandInput} onChange={(e) => setBrandInput(e.target.value)}
                           className="block w-full px-4 py-2 mt-2 border
                                   rounded"/>
                </div>
                <div className="flex flex-wrap w-1/4 pr-5 mb-5">
                    <InputLabel htmlFor="unit">Unit </InputLabel>
                    <input type="text" value={unitInput} onChange={(e) => setUnitInput(e.target.value)}
                           className="block w-full px-4 py-2 mt-2 border
                                   rounded"/>
                </div>
                <div className="flex flex-wrap w-1/4 pr-5 mb-5">
                    <InputLabel htmlFor="sku">SKU </InputLabel>
                    <input type="text"  value={skuInput} onChange={(e) => setSkuInput(e.target.value)}
                           className="block w-full px-4 py-2 mt-2 border
                                   rounded"/>
                </div>
                <div className="flex flex-wrap w-1/4 pr-5 mb-5">
                    <InputLabel htmlFor="minQty">Minimum Qty </InputLabel>
                    <input type="text" value={minQtyInput} onChange={(e) => setMinQtyInput(e.target.value)}
                           className="block w-full px-4 py-2 mt-2 border
                                   rounded"/>
                </div>
                <div className="flex flex-wrap w-1/4 mb-5">
                    <InputLabel htmlFor="qty">Quantity </InputLabel>
                    <input type="text" value={qtyInput} onChange={(e) => setQtyInput(e.target.value)}
                           className="block w-full px-4 py-2 mt-2 border
                                   rounded"/>
                </div>
                <div className="flex flex-wrap w-full mb-5">
                    <InputLabel htmlFor="description">Description </InputLabel>
                    <textarea
                        className="block h-24 w-full px-4 py-2 mt-2 border
                                rounded resize-none" value={descInput} onChange={(e) => setDescInput(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap w-1/4 mb-5">
                    <InputLabel htmlFor="price">Price </InputLabel>
                    <input type="text" value={priceInput} onChange={(e) => setPriceInput(e.target.value)}
                           className="block w-full px-4 py-2 mt-2 border
                                   rounded" />
                </div>
                <div className="flex flex-wrap w-full mb-5 mx-auto">
                    <InputLabel htmlFor="productImage">Product Image </InputLabel>
                    <div className="border w-full p-5">
                        <Button
                            component="label"
                            role={undefined}
                            variant="text"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon className="text-orange-400"/>}
                            className="w-full"
                            value={imageInput} onChange={(e) => setImageInput(e.target.value)}
                        >
                            Upload file
                            <VisuallyHiddenInput type="file"/>
                        </Button>
                    </div>
                </div>
                <Link to="/items">
                    <button onClick={addProduct} className="pl-8 pr-8 pt-2 pb-2 mr-5 bg-orange-400 text-white font-bold rounded ">
                        Submit
                    </button>
                </Link>
                <button className="pl-8 pr-8 pt-2 pb-2 mr-5 bg-gray-500 text-white font-bold rounded">
                    Cancel
                </button>
            </div>
        </div>
    )
}
