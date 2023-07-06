'use client'

import { useThemeContext } from '../../app/context/theme';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Login(): JSX.Element {
    const { showLogin, setShowLogin }: any = useThemeContext();

    const loginClassName = (!showLogin ? "hidden" : "fixed top-16 left-0 z-50 flex flex-col items-center h-screen w-full bg-gray-900 bg-opacity-90");

    useEffect(() => {
        if (showLogin) {
            document.title = "Login | Shofeur";
        }
    }, [showLogin]);


    return (
        <div className={loginClassName}>
            <div className='relative t-0 flex justify-end w-full self-end cursor-pointer' onClick={() => setShowLogin(!showLogin)}>
                <FontAwesomeIcon
                    icon={faXmark}
                    className="text-gray-200 text-3xl p-6"
                />
            </div>
            <form className='flex flex-col gap-4 mt-20 md:mt-60 bg-gray-900 p-14 rounded'>
                <input type="text" placeholder="Username or Email" className="p-2 rounded" required />
                <input type="password" placeholder="Password" className="p-2 rounded" required />
                <button className="transition-colors duration-700 rounded p-2 bg-amber-500 text-gray-100 hover:bg-amber-600">Log In</button>
                <p className='text-gray-200 text-xs self-center'>This button is for demo purposes only.</p>
            </form>
        </div>
    );
}
