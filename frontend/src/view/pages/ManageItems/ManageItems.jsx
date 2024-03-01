import React from "react";

export const ManageItems = () => {
    return (
        <div className="flex flex-wrap p-5">
            <div className="flex w-full">
                <div className="float-left w-1/2">
                    <h1 className="font-bold text-xl">Product List</h1>
                    <h4 className="text-md">Manage Your Products</h4>
                </div>
                <div className="float-right w-1/2 text-right">
                    <button className="pl-4 pr-4 pt-2 pb-2 mr-5 bg-orange-300 text-white font-bold rounded">+ Add New Product</button>
                </div>
            </div>
            <div className="flex w-full p-5 mt-6 h-fit bg-white">

            </div>
        </div>
    )
}
