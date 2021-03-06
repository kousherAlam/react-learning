import React, { useState } from 'react';
import { Product } from './Product';

export const ProductList = () => {
    const [product] = useState<any[]>([1, 2, 3, 4, 5, 6, 7, 8]);
    return <div className="product-list grid gap-2 grid-cols-3">
        <div className='product-add col-span-3 h-40 bg-blue-100 flex items-center justify-center'>
            <h1 className="text-4xl text-blue-800 font-bold">This section is for add.</h1>
        </div>
        {product.map((p, i) => {
            return <div key={i} className="single-product mb-3">
                <Product />
            </div>
        })}
    </div>
}

