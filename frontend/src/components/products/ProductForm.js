import React, { useState } from 'react';
import { OutlinedInput, Button, Container, FormControl, InputLabel, FormHelperText } from '@mui/material';
import './ProductForm.css';

function ProductForm({ onAddProduct }) {
    const [newProduct, setNewProduct] = useState({
        name: '',
        provider: '',
        stock: '',
        unitPrice: '',
        totalPrice: ''
    });
    const [touchedFields, setTouchedFields] = useState([]);

    const handleSubmit = () => {
        let newProductKeys = Object.keys(newProduct);
        setTouchedFields(newProductKeys);
        let hasEmptyFields = Object.values(newProductKeys).some(isFieldEmpty);

        if (hasEmptyFields) {
            // TODO: show error
            return;
        }

        // TODO: add to backend and get ID
        newProduct.id = Math.random().toString(36).substr(2, 9);

        // Adds the product in parent
        onAddProduct(newProduct);

        // Cleans form
        setNewProduct({
            name: '',
            provider: '',
            stock: '',
            unitPrice: '',
            totalPrice: ''
        });
        setTouchedFields([]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Sets the property as touched
        if (!touchedFields.includes(name)) {
            setTouchedFields([...touchedFields, name])
        }

        // Saves the new value
        setNewProduct({ ...newProduct, [name]: value });
    };

    const isFieldEmpty = (fieldName) => {
        return newProduct[fieldName].trim() === '';
    };

    const shouldShowError = (fieldName) => {
        return touchedFields.includes(fieldName) && isFieldEmpty(fieldName);
    };

    return (
        <Container className='product-form'>
            <FormControl className='form-control'>
                <InputLabel htmlFor="name-input">Nombre</InputLabel>
                <OutlinedInput
                    required={true}
                    error={shouldShowError('name')}
                    className='input'
                    id="name-input"
                    name="name"
                    label="Nombre"
                    type="text"
                    aria-describedby='name-helper-text'
                    value={newProduct.name}
                    onChange={handleInputChange}
                />
                <FormHelperText
                    id="name-helper-text"
                    error={shouldShowError('name')}
                    hidden={!shouldShowError('name')} > El nombre es obligatorio.
                </FormHelperText>
            </FormControl>
            <FormControl className='form-control'>
                <InputLabel htmlFor="provider-input">Proveedor</InputLabel>
                <OutlinedInput
                    required={true}
                    error={shouldShowError('provider')}
                    className='input'
                    id="provider-input"
                    name="provider"
                    label="Proveedor"
                    type="text"
                    aria-describedby='provider-helper-text'
                    value={newProduct.provider}
                    onChange={handleInputChange}
                />
                <FormHelperText
                    id="provider-helper-text"
                    error={shouldShowError('provider')}
                    hidden={!shouldShowError('provider')} > El proveedor es obligatorio.
                </FormHelperText>
            </FormControl>
            <FormControl className='form-control'>
                <InputLabel htmlFor="stock-input">Stock</InputLabel>
                <OutlinedInput
                    required={true}
                    error={shouldShowError('stock')}
                    className='input'
                    id="stock-input"
                    name="stock"
                    label="Stock"
                    type="number"
                    aria-describedby='stock-helper-text'
                    value={newProduct.stock}
                    onChange={handleInputChange}
                />
                <FormHelperText
                    id="stock-helper-text"
                    error={shouldShowError('stock')}
                    hidden={!shouldShowError('stock')} > El stock es obligatorio.
                </FormHelperText>
            </FormControl>
            <FormControl className='form-control'>
                <InputLabel htmlFor="unit-price-input">Precio unitario</InputLabel>
                <OutlinedInput
                    required={true}
                    error={shouldShowError('unitPrice')}
                    className='input'
                    id="unit-price-input"
                    name="unitPrice"
                    label="Precio unitario"
                    type="number"
                    aria-describedby='unit-price-helper-text'
                    value={newProduct.unitPrice}
                    onChange={handleInputChange}
                />
                <FormHelperText
                    id="unit-price-helper-text"
                    error={shouldShowError('unitPrice')}
                    hidden={!shouldShowError('unitPrice')} > El precio unitario es obligatorio.
                </FormHelperText>
            </FormControl>
            <FormControl className='form-control'>
                <InputLabel htmlFor="total-price-input">Precio total</InputLabel>
                <OutlinedInput
                    required={true}
                    error={shouldShowError('totalPrice')}
                    className='input'
                    id="total-price-input"
                    name="totalPrice"
                    label="Precio total"
                    type="number"
                    aria-describedby='total-price-helper-text'
                    value={newProduct.totalPrice}
                    onChange={handleInputChange}
                />
                <FormHelperText
                    id="total-price-helper-text"
                    error={shouldShowError('totalPrice')}
                    hidden={!shouldShowError('totalPrice')} > El precio total es obligatorio.
                </FormHelperText>
            </FormControl>

            <Button onClick={handleSubmit}>Agregar</Button>
        </Container>
    );
}

export default ProductForm;
