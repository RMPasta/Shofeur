'use client'

import Image from 'next/image';
import partybus from '../../app/assets/party-bus.jpg';
import nyc1 from '../../app/assets/nyc-1.jpg';
import nyc2 from '../../app/assets/nyc-2.png';
import nyc3 from '../../app/assets/nyc-3.jpg';
import nyc4 from '../../app/assets/nyc-4.jpg';
import LocationDetails from './LocationDetails';
import OwnerDetails from './OwnerDetails';
import LocationPolicies from './LocationPolicies';
import { useThemeContext } from '../../app/context/theme';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Location(): JSX.Element {
  const { showLogin, setShowLogin }:any = useThemeContext();
  const { showSignUp, setShowSignUp}:any = useThemeContext();

  useEffect(() => {
    if (!showLogin && !showSignUp) {
        document.title = "Shofeur Challenge";
    }
}, [showLogin, showSignUp]);

  return (
    <div className="flex flex-col md:px-10 lg:px-40 py-4 mt-20 w-full self-center ">
      <div className="flex flex-col gap-5 p-6">
        <h2 className="text-3xl font-bold">Luxury Party Bus NYC</h2>
        <span className="flex flex-col md:flex-row gap-4">
          <p><FontAwesomeIcon
        icon={faStar}
        className="text-yellow-500 text-xl"
      />  4.5</p>
          <p>30 reservations</p>
          <p>New York City, New York</p>
        </span>
      </div>
      <div className="w-full md:w-3/5 self-center flex gap-2 overflow-x-scroll scroll-smooth snap-x snap-mandatory mt-8">
        <div className="flex-shrink-0 snap-center snap-always">
          <Image src={partybus} alt="Party Bus" width={600} height={400} loading="eager" />
        </div>
        <div className="flex-shrink-0 w-100 h-100 snap-center snap-always">
          <Image src={nyc1} alt="NYC 1" width={600} height={400} loading="eager" />
        </div>
        <div className="flex-shrink-0 w-100 h-100 snap-center snap-always">
          <Image src={nyc2} alt="NYC 2" width={600} height={400} loading="eager" />
        </div>
        <div className="flex-shrink-0 w-100 h-100 snap-center snap-always">
          <Image src={nyc3} alt="NYC 3" width={600} height={400} loading="eager" />
        </div>
        <div className="flex-shrink-0 w-100 h-100 snap-center snap-always">
          <Image src={nyc4} alt="NYC 4" width={600} height={400} loading="eager" />
        </div>
      </div>
      <LocationDetails />
      <OwnerDetails />
      <LocationPolicies />
    </div>
  );
}
