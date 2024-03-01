import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping, faCircleDollarToSlot} from "@fortawesome/free-solid-svg-icons";
import money from '../../../images/pic.jpg'
import pic2 from '../../../images/pic2.png'
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import React from "react";

export const Dashboard = () => {
    return (
        <>
            <div className="flex flex-wrap  w-full  p-10">
                <div className="flex flex-row  w-full gap-32 p-20">
                    <div className="basis-1/2  w-full h-auto">
                        <div className="h-36 p-4 bg-white border rounded-lg">
                            <div className="flex">
                                <div className="bg-gray-200 w-24 h-24 justify-center items-center"
                                     style={{borderRadius: '100%'}}>
                                    <img className="h-8 mx-auto my-auto  mt-8" src={money}
                                         alt=""/>
                                </div>
                                <div className="flex flex-wrap">
                                    <h1 className="text-[20px] text-center  font-bold w-full">$4385</h1>
                                    <h1 className="text-[20px] text-center w-full font-bold font-serif">Total Inventory
                                        value</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2  w-full h-auto">
                        <div className="h-36 p-4 bg-white border rounded-lg">
                            <div className="flex">
                                <div className="bg-gray-200 w-24 h-24 justify-center items-center"
                                     style={{borderRadius: '100%'}}>
                                    <img className="h-8 mx-auto my-auto  mt-8" src={pic2}
                                         alt=""/>
                                </div>
                                <div className="flex flex-wrap">
                                    <h1 className="text-[20px] text-center  font-bold w-full">$385656.5</h1>
                                    <h1 className="text-[20px] text-center w-full font-bold font-serif">Number of Units
                                        Available</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <TableContainer sx={{maxWidth: 1000}} className="justify-center mx-auto" component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Sno</TableCell>
                                <TableCell align="center">Product Name</TableCell>
                                <TableCell align="center">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </>
    )
}

