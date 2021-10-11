import React, { CSSProperties, useState, useContext } from 'react';
import { Cart } from './Cart';
import { Footer } from './Footer';
import { ProductList } from './ProductList';
import { Search } from './Search';
import Switch from '@mui/material/Switch';
import { FormControlLabel, FormGroup } from '@mui/material';
import { AppTheme, AppThemeContext } from './context';
import { AppThemeContextProvider } from './context/AppThemeProvider';

function App() {
  const productListCSS: CSSProperties = {
    minHeight: '79vh',
  }

  const theme = useContext(AppThemeContext);
  const [color, setColor] = useState<string>(theme.theme);

  const onThemeChanged = (_: any, isLight: boolean) => {
    
    console.log('called from App.tsx.', isLight);
    if (theme.setTheme) {
      setColor(isLight ? 'light' : 'dark');
    }
  }

  return (
    <div className="app">
      <AppThemeContextProvider theme={color}>
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
                <FormControlLabel onChange={onThemeChanged} control={<Switch defaultChecked />} label={theme.theme} />
              </FormGroup>
            </div>
          </div>
        </div>
        <div style={productListCSS} className="mt-20 p-3">
          <ProductList />
        </div>
        <Footer></Footer>
      </AppThemeContextProvider>
    </div>
  );
}

export default App;
