import React from 'react'
import './navbar.css'
import Performance from './peformance'
import { Routes, Route, useNavigate} from 'react-router-dom';
import Homepage from './homepage';


function Navbar({homebold, aboutbold,current, buttontxt, className, showbutton}) {
  let classstyle = ''
  let classstylehome= ''
  if (aboutbold === true) {
    classstyle = "font-bold block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C3AAB0] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  }
  else {
    classstyle = " block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C3AAB0] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  }
  if (homebold === true) {
    classstylehome = "font-bold block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C3AAB0] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  }
  else {
    classstylehome = " block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C3AAB0] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  }
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/tutorly');
  }
    const navigateToAbout = () => {
      navigate('/tutorly/about');
  };
  return (
    <nav className = {className} >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/tutorly" class="flex items-center">
     
        <span class="self-center text-xl font-semibold whitespace-nowrap hover:text-[#C3AAB0] dark:text-white">Tutor.ly</span>
    </a>
    <div class="flex md:order-2">
    {showbutton && (
        <button onClick = {navigateToHome} type="button" class= "text-white  bg-black hover:bg-[#735972] focus:ring-2 focus:outline-none focus:ring-gray-400 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> {buttontxt} </button>  )}
        <Routes>
              <Route path="/tutorly" element={<Homepage></Homepage>} />
        </Routes>
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <a onClick={navigateToHome} className = {classstylehome} aria-current="page">{current}</a>
        </li>
        <li>
          <a onClick = {navigateToAbout} className ={classstyle}>About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C3AAB0] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C3AAB0] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  )
}

export default Navbar 