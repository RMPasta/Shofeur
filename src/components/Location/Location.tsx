import Image from 'next/image';
import partybus from '../../app/assets/party-bus.jpg';
import nyc1 from '../../app/assets/nyc-1.jpg';
import nyc2 from '../../app/assets/nyc-2.png';
import nyc3 from '../../app/assets/nyc-3.jpg';
import nyc4 from '../../app/assets/nyc-4.jpg';
import LocationDetails from './LocationDetails';
import OwnerDetails from './OwnerDetails';
import LocationPolicies from './LocationPolicies';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar
} from "@fortawesome/free-solid-svg-icons";

export default function Location(): JSX.Element {
  return (
    <div className="flex flex-col md:px-10 lg:px-40 py-4 mt-24 w-full self-center ">
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
      <div className="w-4/5 self-center flex gap-2 overflow-x-scroll scroll-smooth snap-x snap-mandatory">
        <div className="flex-shrink-0 git adw-100 h-100 snap-center snap-always">
          <Image src={partybus} alt="Party Bus" width={800} height={400} />
        </div>
        <div className="flex-shrink-0 w-100 h-100 snap-center snap-always">
          <Image src={nyc1} alt="NYC 1" width={800} height={400} />
        </div>
        <div className="flex-shrink-0 w-100 h-100 snap-center snap-always">
          <Image src={nyc2} alt="NYC 2" width={800} height={400} />
        </div>
        <div className="flex-shrink-0 w-100 h-100 snap-center snap-always">
          <Image src={nyc3} alt="NYC 3" width={800} height={400} />
        </div>
        <div className="flex-shrink-0 w-100 h-100 snap-center snap-always">
          <Image src={nyc4} alt="NYC 4" width={800} height={400} />
        </div>
      </div>
      <LocationDetails />
      <OwnerDetails />
      <LocationPolicies />
    </div>
  );
}
