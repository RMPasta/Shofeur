'use client'

import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from '../../app/context/theme';

export default function SlideOutMenu(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);
  const [showX, setShowX] = useState(false);
  const { showLogin, setShowLogin}:any = useThemeContext();
  const { showSignUp, setShowSignUp}:any = useThemeContext();

  const menuToggle = () => {
      setShowX(!showX)
      setShowMenu(!showMenu);
  };


  const ulClassName = "w-3/5 md:w-1/5 h-screen flex flex-col justify-between bg-gray-950 bg-opacity-90 text-gray-200 transition-left duration-700" +
  (!showMenu ? " w-1/6 absolute -left-full top-16" : " w-2/5 md:w-1/3 lg:w-1/5 absolute left-0 top-16");

  return (
    <div className='z-10'>
      <p onClick={menuToggle} className='hover:cursor-pointer'>
        {(showX ?
        <FontAwesomeIcon
        icon={faXmark}
        className="text-gray-200 text-3xl"
      /> :
        <FontAwesomeIcon
        icon={faBars}
        className="text-gray-200 text-2xl pr-0.5"
      />
        )}
      </p>

      <div className={ulClassName}>
        <ul className='w-full'>
            <p className='flex justify-center font-bold text-xl py-4'>Hello, USER!</p>
            <li className='flex justify-center transition-colors duration-700 hover:bg-gray-700 w-full p-4 hover:cursor-pointer'>Add a listing</li>
            <li className='flex justify-center transition-colors duration-700 hover:bg-gray-700 w-full p-4 hover:cursor-pointer' onClick={() => {
            setShowSignUp(!showSignUp)
            setShowLogin(false)
            menuToggle()
          }}>Sign Up</li>
            <li className='flex justify-center transition-colors duration-700 hover:bg-gray-700 w-full p-4 hover:cursor-pointer' onClick={() => {
              setShowLogin(!showLogin)
              setShowSignUp(false)
              menuToggle()
          }}>Log In</li>
            <li className='flex justify-center transition-colors duration-700 hover:bg-gray-700 w-full p-4 hover:cursor-pointer'>Add a listing</li>
        </ul>
        <ul className='w-full mb-20'>
            <p className='flex justify-center font-bold text-xl py-4'>Built by</p>
            <li className='flex justify-center transition-colors duration-700 hover:bg-gray-700 w-full p-4 hover:cursor-pointer'><a href="https://rmpasta.github.io/RMPortfolio/" target="_blank">Ryan Malmos</a></li>
            <li className='flex justify-center transition-colors duration-700 hover:bg-gray-700 w-full p-4 hover:cursor-pointer'><a href="https://www.linkedin.com/in/ryan-malmos/" target="_blank">Linkedin</a></li>
            <li className='flex justify-center transition-colors duration-700 hover:bg-gray-700 w-full p-4 hover:cursor-pointer'><a href="https://github.com/RMPasta/Shofeur" target="_blank">Github Repo</a></li>
            <p className='flex justify-center'>rmpasta.code@gmail.com</p>
        </ul>
      </div>
    </div>
  );
}
