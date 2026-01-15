import {useState, useEffect, useRef, useContext} from 'react';
import {MovieContext, ThemeContext} from '../context/index.js';
import Logo from '../assets/logo.svg'
import Ring from '../assets/ring.svg'
import ShoppingCart from '../assets/shopping-cart.svg'
import Sun from '../assets/icons/sun.svg'
import Moon from '../assets/icons/moon.svg'
import {CartDetails} from './cart.details.jsx';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(MovieContext);
  const { darkMode, setDarkMode} = useContext(ThemeContext);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
        setIsVisible(true)
      }
      else if(currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, {passive: true})
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);
  
  const handleCartShow = () => state.cartData.length > 0 ? setShowCart(true) : setShowCart(false)

  return (
    <>
      {
        showCart &&
        <CartDetails
          onClose={() => setShowCart(false)}
          className="z-999!"
        />
      }
      <header
        className={`fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-[#12141D]/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300 ease-in-out ${
          isVisible
            ? 'translate-y-0'
            : '-translate-y-full'
        }`}
      >
        <nav className="container flex items-center justify-between space-x-10 py-1 md:py-2">
          <a href="index.html" className="flex items-center gap-2 group">
            <img
              src={Logo}
              width="139"
              height="26"
              alt="CineRental Logo"
              className="mx-10 transition-transform group-hover:scale-105"
            />
          </a>

          <ul className="flex items-center gap-3 md:gap-4">
            <li>
              <a
                className="relative bg-linear-to-br from-primary/20 to-pink-500/10 dark:from-primary/10 dark:to-pink-500/5 hover:from-primary/30 hover:to-pink-500/20 dark:hover:from-primary/20 dark:hover:to-pink-500/10 rounded-xl backdrop-blur-md p-2.5 inline-block transition-all duration-300 hover:scale-110 hover:shadow-lg border border-primary/20 dark:border-primary/10"
                href="#"
              >
                <img
                  src={Ring}
                  width="24"
                  height="24"
                  alt="Notifications"
                  className="transition-transform hover:rotate-12"
                />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white dark:border-[#12141D]"></span>
              </a>
            </li>
            <li>
              <button
                className="bg-linear-to-br from-primary/20 to-pink-500/10 dark:from-primary/10 dark:to-pink-500/5 hover:from-primary/30 hover:to-pink-500/20 dark:hover:from-primary/20 dark:hover:to-pink-500/10 rounded-xl backdrop-blur-md p-2.5 inline-block transition-all duration-300 hover:scale-110 hover:shadow-lg border border-primary/20 dark:border-primary/10"
                onClick={() => setDarkMode(darkMode => !darkMode)}
                aria-label="Toggle theme"
              >
                <img
                  src={darkMode ? Sun : Moon}
                  width="24"
                  height="24"
                  alt="Toggle theme"
                  className="transition-transform hover:rotate-180 duration-500"
                />
              </button>
            </li>
            <li>
              <button
                className="relative bg-linear-to-br from-primary/20 to-pink-500/10 dark:from-primary/10 dark:to-pink-500/5 hover:from-primary/30 hover:to-pink-500/20 dark:hover:from-primary/20 dark:hover:to-pink-500/10 rounded-xl backdrop-blur-md p-2.5 inline-block transition-all duration-300 hover:scale-110 hover:shadow-lg border border-primary/20 dark:border-primary/10"
                onClick={handleCartShow}
                aria-label="Shopping cart"
              >
                <img
                  src={ShoppingCart}
                  width="24"
                  height="24"
                  alt="Shopping cart"
                  className="transition-transform hover:scale-110"
                />
                {state.cartData.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-linear-to-br from-primary to-[#12CF6F] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-bounce border-2 border-white dark:border-[#12141D]">
                    {state.cartData.length}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};