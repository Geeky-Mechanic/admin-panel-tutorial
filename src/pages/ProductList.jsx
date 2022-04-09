import React, { useState } from 'react'
import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from '../dummy';
import { Link } from 'react-router-dom';

const Container = styled.div`
flex: 4;
`;

const Product = styled.div`
display: flex;
align-items: center;
`;

const ProductImage = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
object-fit: cover;
margin-right: 10px;
`;

/* --->  Delete subsection  <--- */

const EditButton = styled.button`
 border: none;
 border-radius: 10px;
 padding: 5px 10px;
 background-color: #3bb077;
 color: white;
 cursor: pointer;
 margin-right: 20px;
`;

const deleteStyle = {
color: "red",
cursor: "pointer",
}

const ProductList = () => {

    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
            return (
                <Product>
                    <ProductImage
                    src={params.row.img}
                    alt={params.row.name}                    
                    />
                    {params.row.name}
                </Product>
            );
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
          },
          {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <EditButton>Edit</EditButton>
                        </Link>
                        <DeleteOutline 
                        style={deleteStyle}
                        onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            }
          },
        
      ];

  return (
    <Container>
        <DataGrid
        rows={data}
        columns={columns}
        rowsPerPageOptions={[5, 10, 15, 30, 50]}
        checkboxSelection
        disableSelectionOnClick
        />
    </Container>
  )
}

export default ProductList;