import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar
} from "@fortawesome/free-solid-svg-icons";

export default function LocationDetails() {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 px-10 mt-24 w-full">
            <div className="flex flex-col gap-1 w-full md:w-3/5">
                <h3 className='flex items-center gap-1 text-2xl'><strong>Hosted by</strong> Ryan Malmos</h3>
                <p>10 Guests</p>
                <p>This luxury party bus will take your group anywhere in NYC in style! You're sure to start your night with a bang when you ride with us. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Vehicula ipsum a arcu cursus vitae congue. Viverra aliquet eget sit amet.</p>
            </div>
            <div className='flex flex-col items-center w-3/5 lg:w-2/5 border-2 border-gray-100 rounded shadow-lg py-8'>
                <span className='flex justify-around w-full text-xl mb-6'>
                    <p>$120/hr</p>
                    <p><FontAwesomeIcon
                    icon={faStar}
                    className="text-yellow-500 text-xl"
                />   4.5</p>
                </span>
                <button className='transition-colors duration-700 rounded w-4/5 h-10 bg-amber-500 text-gray-100 hover:bg-amber-600'>RESERVE</button>
            </div>
        </div>
    )
}
