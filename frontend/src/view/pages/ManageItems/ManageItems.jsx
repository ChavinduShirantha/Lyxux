import React from "react";
import AddIcon from '@mui/icons-material/Add';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import {styled, alpha} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import {
    Button,
    InputBase,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import pdf from '../../../images/pdf.png'
import report from '../../../images/report.png'
import print from '../../../images/print.png'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

export const ManageItems = () => {
    const Search = styled('div')(({theme}) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginLeft: 0,
        width: '40%',
    }));

    const SearchIconWrapper = styled('div')(({theme}) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({theme}) => ({
        color: 'inherit',
        width: '100%',
        border: '1px solid gray',
        borderRadius: 5,
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));


    return (
        <div className="flex flex-wrap p-5">
            <div className="flex w-full">
                <div className="float-left w-1/2">
                    <h1 className="font-bold text-xl">Product List</h1>
                    <h4 className="text-md">Manage Your Products</h4>
                </div>
                <div className="float-right w-1/2 text-right">
                    <button className="pl-4 pr-4 pt-2 pb-2 mr-5 bg-orange-300 text-white font-bold rounded">
                        <AddIcon/> Add New Product
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap w-full p-5 mt-6 h-fit bg-white">
                <div className="flex flex-wrap w-1/2 float-left ">
                    <div className="bg-orange-400 p-2 mr-5 h-10 w-10 rounded">
                        <FilterAltOutlinedIcon
                            className="text-2xl font-bold text-white"/>
                    </div>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>
                </div>
                <div className="flex flex-wrap w-1/2 float-right justify-end pr-10 gap-3">
                    <img className="h-8 mt-1" src={pdf} alt=""/>
                    <img className="h-8 mt-1" src={report} alt=""/>
                    <img className="h-8 mt-1" src={print} alt=""/>
                </div>
            </div>
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
                            <TableCell component="th" scope="row" align="center"></TableCell>
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
        </div>
    )
}
