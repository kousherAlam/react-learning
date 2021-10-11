import React, { CSSProperties } from 'react';
import { Cart } from './Cart';
import { Footer } from './Footer';
import { ProductList } from './ProductList';
import { Search } from './Search';

function App() {
  const productListCSS: CSSProperties = {
    minHeight: '79vh',
  }

  return (
    <div className="app">
      <div className="navbar fixed top-0 left-0 w-full p-3 bg-indigo-900 flex shadow-lg">
        <div className="text-left w-2/12">
          <h1 className="text-lg text-white font-bold">Test App</h1>
        </div>
        <div className="menus w-8/12">
          <Search />
        </div>
        <div className="text-right w-2/12 px-3">
          <Cart />
        </div>
      </div>
      <div style={productListCSS} className="mt-20 p-3">
        <ProductList />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
