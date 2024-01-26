import React, { useState } from 'react';
import { Modal, Typography, Button, Grid, Container } from '@mui/material';

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: { name: string; price: number }[];
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems }) => {
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <Modal open={isOpen} onClose={onClose}>
            <Container sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <Grid container spacing={2} sx={{ p: 4, bgcolor: 'background.paper', boxShadow: 24 }}>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom>
                            Shopping Cart
                        </Typography>
                    </Grid>
                    {cartItems.map((item, index) => (
                        <Grid key={index} item xs={12}>
                            <Typography>{item.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price: ${item.price.toFixed(2)}
                            </Typography>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            Total: ${getTotalPrice().toFixed(2)}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={onClose}>
                            Close
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Modal>
    );
};

export default CartModal;
