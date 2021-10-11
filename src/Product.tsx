import React, { useContext, useEffect, useState } from 'react';
import bookImage from './images/book1.jpg';
import Button from '@mui/material/Button';
import { AppTheme, AppThemeContext } from './context';
import Switch from '@mui/material/Switch';
import { FormControlLabel, FormGroup } from '@mui/material';


export const Product = () => {
    const context = useContext(AppThemeContext);
    const lightCardClass = `product hover:bg-gray-100 hover:shadow-lg bg-white shadow-md p-3 rounded-xl border border-gray-100`;
    const darkCardClass = `product text-white hover:bg-gray-600 hover:shadow-lg bg-gray-700 shadow-md p-3 rounded-xl border border-gray-100`;
    const [cardClass, setCardClass] = useState<string>(lightCardClass);

    useEffect(() => {
        if (context.theme === 'light') {
            setCardClass(lightCardClass);
        } else {
            setCardClass(darkCardClass);
        }
    }, [context]);



    const onThemeChanged = (_: any, isLight: boolean) => {
        console.log('top one caleld.', isLight);
        if(isLight){
            context.theme = 'light';
        } else {
            context.theme = 'dark';
        }
    }


    return <div className={cardClass}>
        <div className="flex">
            <div className="picture w-5/12">
                <img src={bookImage} className="p-3 border border-gray-200" alt="Book" />
            </div>
            <div className="name-price p-1 w-7/12">
                <h3 className="text-xl">Product Name {context.theme}</h3>
                <p>{context.theme} | {context.fontSize}</p>
                <div className={`${context.theme === 'light' ? 'text-black' : 'text-white' } text-right`}>
                    <FormGroup>
                        <FormControlLabel onChange={onThemeChanged} control={<Switch checked={context.theme === 'light'} />} label={context.theme} />
                    </FormGroup>
                </div>
                <p>
                    <span className="text-green-600 font-bold mr-2">10$</span>
                    <span className="stroke-2 line-through text-gray-300">11$</span>
                </p>
                <p className="my-2"><span>Author: </span><span className="font-bold">Paolo Koyelo</span></p>
                <p className="my-2"><span>Published: </span><span className="font-bold">10 Oct 2021</span></p>
                <div className="mt-3">
                    <Button color="primary" style={{ marginRight: '10px' }} variant="contained">Buy</Button>
                    <Button color="primary" variant="contained">Cart(+)</Button>
                </div>
            </div>
        </div>
    </div>
}

