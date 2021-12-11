import React, { useState } from 'react';
import { Product } from './Product';

export const ProductList = () => {
    const [product, setProduct] = useState<any[]>([1, 2, 3, 4, 5, 6, 7, 8]);
    return <div className="product-list grid gap-2 grid-cols-3">
        {product.map(p => {
            return <div className="single-product mb-3">
                <Product />
            </div>
        })}
    </div>
}

