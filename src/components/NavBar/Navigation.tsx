'use client'

import SlideOutMenu from "./SlideOutMenu";
import { useThemeContext } from '../../app/context/theme';

export default function Navigation(): JSX.Element {
    const { showLogin, setShowLogin}:any = useThemeContext();
    const { showSignUp, setShowSignUp}:any = useThemeContext();
    return (
      <div className="flex justify-between gap-10 items-center fixed top-0 px-4 lg:px-40 w-full h-16 bg-gray-950 bg-opacity-90 text-gray-200">
        <div className="flex justify-between items-center gap-10">
          <SlideOutMenu />
          <h1 className="text-3xl">Shofeur</h1>
        </div>
        <div className="hidden md:flex h-full w-1/5">
          <div className="transition-colors duration-700 hover:bg-slate-700 w-2/3 h-full flex items-center justify-center hover:cursor-pointer" onClick={() => {
            setShowSignUp(!showSignUp)
            setShowLogin(false)
          }}>Sign Up</div>
          <div className="transition-colors duration-700 hover:bg-slate-700 w-2/3 h-full flex items-center justify-center hover:cursor-pointer" onClick={() => {
            setShowLogin(!showLogin)
            setShowSignUp(false)
          }}>Log In</div>
        </div>
      </div>
    );
  }
