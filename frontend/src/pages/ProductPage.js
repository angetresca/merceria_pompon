import React, { useState, useEffect } from 'react';
import ProductList from '../components/products/ProductList';
import { Container } from '@mui/material';
import '../assets/css/ProductPage.css';

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from API and set state
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/products');
                if (!response.ok) {
                    throw new Error('Getting products - Response not ok. ', response);
                }
                const data = await response.json().catch(error => { throw new Error('Getting products - json not readable. ', error) });
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();

    }, []);

    const handleDelete = async (productId) => {
        // Delete product from API and update state
        await fetch(`/api/products/${productId}`, { method: 'DELETE' });
        setProducts(products.filter((product) => product.id !== productId));
    };

    return (
        <Container className='ProductPage'>
            <h1>Productos</h1>
            <ProductList products={products} onDelete={handleDelete} />
        </Container>
    );
};

export default ProductPage;
