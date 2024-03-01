import React from "react";
import AddIcon from '@mui/icons-material/Add';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import {styled, alpha} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import {InputBase} from "@mui/material";
import pdf from '../../../images/pdf.png'
import report from '../../../images/report.png'
import print from '../../../images/print.png'
import pic2 from "../../../images/pic2.png";
import {DataGrid} from "@mui/x-data-grid";

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

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

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
            <div className="mb-5" style={{height: 650, width: '100%'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {page: 0, pageSize: 10},
                        },
                    }}
                    checkboxSelection
                />
            </div>
        </div>
    )
}
