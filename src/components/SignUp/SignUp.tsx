'use client'

import { useThemeContext } from '../../app/context/theme';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function SignUp(): JSX.Element {
    const { showSignUp, setShowSignUp}:any = useThemeContext();

    const signUpClassName = (!showSignUp ? "hidden" : "fixed top-16 left-0 z-50 flex flex-col items-center h-screen w-full bg-gray-900 bg-opacity-90");

    return (
    <div className={signUpClassName}>
        <div className='relative t-0 flex justify-end w-full self-end cursor-pointer' onClick={() => setShowSignUp(!showSignUp)}>
            <FontAwesomeIcon
                icon={faXmark}
                className="text-gray-200 text-3xl p-6"
            />
        </div>
        <form className='flex flex-col gap-4 mt-10 md:mt-20 bg-gray-900 p-14 rounded'>
            <input type="text" placeholder="First Name" className="p-2 rounded" required />
            <input type="text" placeholder="Last Name" className="p-2 rounded" required />
            <input type="text" placeholder="Email" className="p-2 rounded" required />
            <input type="text" placeholder="Username" className="p-2 rounded" required />
            <input type="password" placeholder="Password" className="p-2 rounded" required />
            <input type="password" placeholder="Confirm Password" className="p-2 rounded" required />
            <button className="transition-colors duration-700 rounded p-2 bg-amber-500 text-gray-100 hover:bg-amber-600">Sign Up</button>
            <p className='text-gray-200 text-xs self-center'>This button is for demo purposes only.</p>
        </form>
    </div>
    );
  }
