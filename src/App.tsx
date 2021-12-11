import React, { useState } from 'react';
import { Cart } from './Cart';
import { Footer } from './Footer';
import { ProductList } from './pages/product/ProductList';
import { Search } from './Search';
import Switch from '@mui/material/Switch';
import { FormControlLabel, FormGroup } from '@mui/material';
import { Theme, ThemeContext } from './context';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";

function App() {

  const [theme, setTheme] = useState<Theme>(Theme.Light);


  const onThemeChanged = (_: any, isLight: boolean) => {
    setTheme(isLight ? Theme.Light : Theme.Dark);
  }

  return (
    <Router>
      <div className="app">
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className="fixed z-10 top-0 left-0 w-full p-3 bg-indigo-900 shadow-lg">
            <div className="container m-auto">
              <div className="grid grid-cols-6 gap-2">
                <div className="text-left">
                  <h1 className="text-lg text-white font-bold">Test App</h1>
                </div>
                <div className="menus col-span-2">
                  <Search />
                </div>
                <div className="menus col-span-2 text-right">
                  <Link to="/">
                    <button className='px-3 py-1 text-white hover:text-blue-300'>Home</button>
                  </Link>
                  <Link to="/products">
                    <button className='px-3 py-1 text-white hover:text-blue-300'>Products</button>
                  </Link>
                  <Link to="/profile">
                    <button className='px-3 py-1 text-white hover:text-blue-300'>Profile</button>
                  </Link>
                </div>
                <div className="text-right px-3 grid grid-cols-2">
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
            </div>
          </div>
          <main className='container ml-auto mr-auto mt-20'>
            <Routes>
              <Route path="/products" element={<ProductList />} />
              <Route path="/home" element={<ProductList />} />
              <Route path="/" element={<Navigate to="/home" />}  />
            </Routes>
          </main>
        </ThemeContext.Provider>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
