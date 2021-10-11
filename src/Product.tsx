import React from 'react';
import { ButtonClass } from './configs/app.style.config';
import bookImage from  './images/book1.jpg';
import Button from '@mui/material/Button';


export const Product = () => {
    return <div className="product hover:bg-gray-100 hover:shadow-lg bg-white shadow-md p-3 rounded-xl border border-gray-100">
        <div className="flex">
            <div className="picture w-5/12">
                <img src={bookImage} className="p-3 border border-gray-200" alt="Book" />
            </div>
            <div className="name-price p-3 w-7/12">
                <h3 className="text-xl">Product Name</h3>
                <p>
                    <span className="text-green-600 font-bold mr-2">10$</span> 
                    <span className="stroke-2 line-through text-gray-300">11$</span>
                </p>
                <p className="my-2"><span>Author: </span><span className="font-bold">Paolo Koyelo</span></p>
                <p className="my-2"><span>Published: </span><span className="font-bold">10 Oct 2021</span></p>
                <div className="mt-3">
                    <Button className="mr-2">Buy</Button>
                    <Button>Cart(+)</Button>
                </div>
            </div>
        </div>
    </div>
}

