import Image from 'next/image';
import partybus from '../../app/assets/party-bus.jpg';
import nyc1 from '../../app/assets/nyc-1.jpg';
import nyc2 from '../../app/assets/nyc-2.jpg';
import nyc3 from '../../app/assets/nyc-3.jpg';
import nyc4 from '../../app/assets/nyc-4.jpg';
import LocationDetails from './LocationDetails';
import OwnerDetails from './OwnerDetails';
import LocationPolicies from './LocationPolicies';

export default function Location() {
  return (
    <div className="flex flex-col px-40 py-4 mt-24 w-full">
      <div className="flex flex-col gap-5 p-6">
        <h2 className="text-3xl font-bold">Luxury Party Bus NYC</h2>
        <span className="flex gap-4">
          <p>Star 4.5</p>
          <p>10 reservations</p>
          <p>New York City, New York</p>
        </span>
      </div>
      <div className="w-400 self-center flex overflow-x-scroll scroll-smooth snap-x snap-mandatory">
        <div className="flex-shrink-0 w-100 h-100 snap-center snap-always">
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
