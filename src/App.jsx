import {Page} from './page.jsx';
import {MovieContext, ThemeContext} from './context/index.js';
import {useEffect, useReducer, useState} from 'react';
import {cartReducer, initialState} from './reducers/cart.reducer.js';
import {ToastContainer} from 'react-toastify';
import {cartStorage} from './utils/cart.storage.js';

export const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isCartLoaded, setIsCartLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === null ? true : savedMode === 'true';
  });

  useEffect(() => {
    const loadCartData = async () => {
      const savedCart = await cartStorage.loadCart();
      if (savedCart.length > 0) {
        dispatch({
          type: 'load_cart',
          payload: savedCart
        });
      }
      setIsCartLoaded(true);
    };
    loadCartData();
  }, []);

  useEffect(() => {
    if (isCartLoaded) {
      cartStorage.saveCart(state.cartData);
    }
  }, [state.cartData, isCartLoaded]);

  return (
    <ThemeContext value={{darkMode, setDarkMode}}>
      <MovieContext.Provider value={{state, dispatch}}>
        <Page />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          closeOnClick
          theme={darkMode ? 'dark' : 'light'}
        />
      </MovieContext.Provider>
    </ThemeContext>
  );
};