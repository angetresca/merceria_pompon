import { Button, Container, Input, List, ListItem } from '@mui/material';
import React, { useState, useEffect } from 'react';

function ProductList(props) {
    const [products, setProducts] = useState(props.products || [])
    const [newProductName, setNewProductName] = useState('');

    const handleAddProduct = () => {
        let newProduct = { "id": 3, "name": newProductName, "stock": 1 }
        setProducts([...products, newProduct]);
        setNewProductName('');
    };

    useEffect(() => {
        // "props" have changed
        setProducts(props.products);
    }, [props]);

    return (
        <Container>
            <List>
                {products.map(product => (
                    <ListItem key={product.id}>{product.name} - Stock: {product.stock}</ListItem>
                ))}
            </List>
            <Container>
                <Input
                    type="text"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                />
                <Button onClick={handleAddProduct}>Agregar nuevo producto</Button>
            </Container>
        </Container>
    );
}

export default ProductList;
