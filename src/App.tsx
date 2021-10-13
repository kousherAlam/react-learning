import React, { CSSProperties, useContext, useEffect, useState } from 'react';
import { Cart } from './Cart';
import { Footer } from './Footer';
import { ProductList } from './ProductList';
import { Search } from './Search';
import Switch from '@mui/material/Switch';
import { FormControlLabel, FormGroup } from '@mui/material';
import { Theme, ThemeContext } from './context';

function App() {
  const productListCSS: CSSProperties = {
    minHeight: '79vh',
  }

  const [theme, setTheme] = useState<Theme>(Theme.Light);


  const onThemeChanged = (_: any, isLight: boolean) => {
    setTheme(isLight ? Theme.Light : Theme.Dark);
  }

  return (
    <div className="app">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="navbar fixed z-10 top-0 left-0 w-full p-3 bg-indigo-900 flex shadow-lg">
          <div className="text-left w-2/12">
            <h1 className="text-lg text-white font-bold">Test App</h1>
          </div>
          <div className="menus w-7/12">
            <Search />
          </div>
          <div className="text-right w-3/12 px-3 grid grid-cols-2">
            <div className="cart mr-2">
              <Cart />
            </div>
            <div className="text-white text-right">
              <FormGroup>
                <FormControlLabel onChange={onThemeChanged} control={<Switch checked={theme === Theme.Light} />} label={theme} />
              </FormGroup>
            </div>
          </div>
        </div>
        <div style={productListCSS} className="mt-20 p-3">
          <ProductList />
        </div>
        <Footer></Footer>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
