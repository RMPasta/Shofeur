import Image from 'next/image';
import partybus from '../app/assets/party-bus.jpg';
import LocationDetails from './LocationDetails';
import OwnerDetails from './OwnerDetails';

export default function Location() {
    return (
        <div className="flex flex-col items-center px-40 mt-24 w-full">
            <div className="flex flex-col items-center gapx-5">
                <h2 className="text-2xl font-bold">Luxury Party Bus NYC</h2>
                <span className="flex gap-4">
                    <p>Star 4.5</p>
                    <p>10 reservations</p>
                    <p>New York City, New York</p>
                </span>
            </div>
            <div>
            <Image
                src={partybus}
                alt="Party Bus"
                width={600}
                height={400}
                />
            </div>
            <LocationDetails />
            <OwnerDetails />
        </div>
    )
}
