import React, {useContext, useEffect} from 'react'
import {Header} from './components/header.jsx';
import {Sidebar} from './components/sidebar.jsx';
import {MovieList} from './components/movie.list.jsx';
import {Footer} from './components/footer.jsx';
import {ThemeContext} from './context/index.js';

export const Page = () => {
  const { darkMode } = useContext(ThemeContext)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode','true')
    }
    else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode','false')
    }
  }, [darkMode]);
  return (
    <div className="min-h-screen max-w-8xl mx-auto bg-white dark:bg-black">
      {/* Centered content area */}
      <div className=" px-4 py-6">
        {/* Optional decorative background pattern */}
        <Header />
        <div className="rounded-2xl p-4 sm:p-6 shadow-lg my-10">
          <div className="mt-6 flex gap-6 ">
            <Sidebar />
            <MovieList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
