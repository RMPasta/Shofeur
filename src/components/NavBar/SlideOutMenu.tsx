'use client'

import { useState } from 'react';

export default function SlideOutMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const menuToggle = () => {
      setShowMenu(!showMenu);
  };

  const ulClassName = "w-1/5 h-screen flex flex-col justify-between bg-slate-200 text-slate-900 transition-left duration-700" + (!showMenu ? " w-1/6 absolute -left-80 top-20" : " w-1/5 absolute left-0 top-20");

  return (
    <div className='z-10'>
      <p onClick={menuToggle} className='hover:cursor-pointer' id="bars">BURGER</p>
      <div className={ulClassName}>
        <ul className='w-full'>
            <p className='flex justify-center font-bold text-xl py-4'>Hello, USER!</p>
            <li className='flex justify-center hover:bg-gray-100 w-full p-4 hover:cursor-pointer'>Add a listing</li>
            <li className='flex justify-center hover:bg-gray-100 w-full p-4 hover:cursor-pointer'>Sign Up</li>
            <li className='flex justify-center hover:bg-gray-100 w-full p-4 hover:cursor-pointer'>Log In</li>
            <li className='flex justify-center hover:bg-gray-100 w-full p-4 hover:cursor-pointer'>Add a listing</li>
        </ul>
        <ul className='w-full mb-20'>
        <p className='flex justify-center font-bold text-xl py-4'>Built by</p>
            <li className='flex justify-center hover:bg-gray-100 w-full p-4 hover:cursor-pointer'><a href="https://rmpasta.github.io/RMPortfolio/" target="_blank">Ryan Malmos</a></li>
            <li className='flex justify-center hover:bg-gray-100 w-full p-4 hover:cursor-pointer'><a href="https://www.linkedin.com/in/ryan-malmos/" target="_blank">Linkedin</a></li>
            <li className='flex justify-center hover:bg-gray-100 w-full p-4 hover:cursor-pointer'><a href="https://github.com/RMPasta/Shofeur" target="_blank">Github Repo</a></li>
            <p className='flex justify-center p-4'>rmpasta.code@gmail.com</p>
        </ul>
      </div>
    </div>
  );
}
