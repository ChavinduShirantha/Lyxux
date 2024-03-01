import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import React from "react";

export const ProductTable = ({ data }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Product Name</TableCell>
                        <TableCell align="center">SKU</TableCell>
                        <TableCell align="center">Category</TableCell>
                        <TableCell align="center">Brand</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Unit</TableCell>
                        <TableCell align="center">Qty</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                        <TableCell component="th" scope="row" align="center">
                        </TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">
                            <Button startIcon={<BorderColorOutlinedIcon className="text-black"/>}></Button>
                            <Button startIcon={<DeleteForeverOutlinedIcon className="text-red-600"/>}></Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
