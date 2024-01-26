// MenuItem.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import { deleteDish}from '../redux/cartSlice'
import { useDispatch } from 'react-redux';
import {removeFromCart} from "../redux/cartSlice"

interface MenuItemProps {
    item: any;
}

function MenuItem(props: MenuItemProps) {
    const { item } = props;
    
    const dispatch = useDispatch();
    

    const remoweContact = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const remoweContactId = e.currentTarget;
        console.log(item.id)
        dispatch(removeFromCart(item.id));
    };

    


return (
        <Box sx={{ p: 3, border: '1px solid #ccc', marginBottom: 2 }}>
            <Typography variant="h6">{item.name}</Typography>
            <Typography>{item.description}</Typography>
            <Typography variant="body1">Price: {item.price}</Typography>
            <Typography variant="body1">Portion Size: {item.portionSize}</Typography>
            <Typography variant="body1">Availability: {item.availability}</Typography>
            {item.isPromo && (
                <Typography variant="body1">Promo Price: {item.promoPrice}</Typography>
            )}
            <img src={item.photo} alt={item.name} style={{ maxWidth: '100%', marginTop: '10px' }} />
        <button  type='button' onClick={remoweContact} >удалить</button>
        </Box>
    );
}

export default MenuItem;
