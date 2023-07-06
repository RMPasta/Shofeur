'use client'

import { useThemeContext } from '../../app/context/theme';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Login(): JSX.Element {
    const { showLogin, setShowLogin}:any = useThemeContext();

    const loginClassName = (!showLogin ? "hidden" : "absolute mt-16 flex flex-col items-center h-full w-full bg-gray-900 bg-opacity-90");

    return (
    <div className={loginClassName}>
        <div className='relative t-0 flex justify-end w-full self-end cursor-pointer' onClick={() => setShowLogin(!showLogin)}>
            <FontAwesomeIcon
                icon={faXmark}
                className="text-gray-200 text-3xl p-6"
            />
        </div>
        <form className='flex flex-col gap-4 mt-60 bg-gray-900 p-14 rounded'>
            <input type="text" placeholder="Username or Email" className="p-2 rounded" required />
            <input type="text" placeholder="Password" className="p-2 rounded" required />
            <button className="transition-colors duration-700 rounded p-2 bg-amber-500 text-gray-100 hover:bg-amber-600">Log In</button>
            <p className='text-gray-200 text-xs self-center'>Submit disabled for demo</p>
        </form>
    </div>
    );
  }
