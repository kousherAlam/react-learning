import React from 'react';
import { ButtonClass } from './configs/app.style.config';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon  from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';

export const Cart = () => {
    return <div className="cart">
        <Badge badgeContent={0} color="primary">
            <IconButton color="warning" aria-label="upload picture" component="span">
            <AddShoppingCartIcon />
            </IconButton>
        </Badge>
    </div>
}

