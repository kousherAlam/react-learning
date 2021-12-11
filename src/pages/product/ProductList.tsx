import React, { useState } from 'react';
import { Product } from './Product';

export const ProductList = () => {
    const [product, setProduct] = useState<any[]>([1, 2, 3, 4, 5, 6, 7, 8]);
    return <div className="product-list grid gap-2 grid-cols-3">
        <div className='product-add col-span-3 h-40 bg-gray-400 flex align-center justify-center'>
            <h1 className="font-medium">This section is for add.</h1>
        </div>
        {product.map(p => {
            return <div className="single-product mb-3">
                <Product />
            </div>
        })}
    </div>
}

