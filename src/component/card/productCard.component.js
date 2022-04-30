import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import { Product_Images, Product_Logo } from './card.constant';

export default function ProductCard({ productDetail, handleDelete }) {

    return (
        <Card sx={{ minWidth: 300 }} className="card">
            <CardHeader
                className="title"
                avatar={
                    <Avatar sx={{ bgcolor: (theme) => theme.palette.primary.profile }} aria-label="recipe">
                        {Product_Logo[productDetail.product] ? Product_Logo[productDetail.product] : <FreeBreakfastIcon />}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <DeleteIcon sx={{ fill: 'red' }} onClick={() => handleDelete(productDetail.id)} />
                    </IconButton>
                }
                title={productDetail.product}
            />
            <div className="subCardContainer">
                <div className="subCard">
                    <div className="subCardImage">
                        <CardMedia
                            component="img"
                            style={{
                                float: 'left',
                                width: '70px',
                                height: '70px',
                                objectFit: 'cover',
                            }}
                            image={Product_Images[productDetail.product]
                                ? Product_Images[productDetail.product] :
                                Product_Images['coffee']}
                            alt="Product Image"
                        />
                    </div>

                    <CardContent className="priceContainer">
                        <div className='type'>
                            {productDetail.type}
                        </div>
                        <div className='priceDetail'>
                            <div className='quantity'>
                                {productDetail.quantity}
                            </div>
                            <div className='price'>
                                {productDetail.unitPrice} AED
                            </div>
                        </div>

                    </CardContent>
                </div>
            </div>
        </Card>
    );
}
