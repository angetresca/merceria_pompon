import React, { useState, useEffect } from 'react';
import { Container, Input, Button, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ProductForm from './ProductForm';
import './ProductList.css';

function ProductList(props) {
    const [products, setProducts] = useState(props.products || [])
    const [isAddingProduct, setIsAddingProduct] = useState(false);
    const columns = [
        { field: 'id', headerName: 'ID', hidden: true },
        {
            field: 'name',
            headerName: 'Name',
            editable: true,
            flex: 1,
        },
        {
            field: 'provider',
            headerName: 'Proveedor',
            editable: true,
            flex: 1,
        },
        {
            field: 'stock',
            headerName: 'Stock',
            type: 'number',
            editable: true,
        },
        {
            field: 'unitPrice',
            headerName: 'Precio Unitario',
            type: 'number',
            editable: true,
        },
        {
            field: 'totalPrice',
            headerName: 'Precio Total',
            type: 'number',
            editable: true,
        },
    ];

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
        setIsAddingProduct(false);
    };

    useEffect(() => {
        // "props" have changed
        setProducts(props.products);
    }, [props]);

    return (
        <Container>

            {isAddingProduct ? (
                <ProductForm onAddProduct={handleAddProduct} />
            ) : (
                <Button onClick={() => setIsAddingProduct(true)}>Agregar nuevo producto</Button>
            )}

            <Box className='products-table-box'>
                <DataGrid
                    rows={products}
                    columns={columns}
                    initialState={{
                        columns: {
                            columnVisibilityModel: {
                                id: false,  // Hides id column
                            }
                        },
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </Container>
    );
}

export default ProductList;
