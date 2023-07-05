import Image from 'next/image';
import partybus from '../app/assets/party-bus.jpg';
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
            <div className='self-center'>
            <Image
                src={partybus}
                alt="Party Bus"
                width={800}
                height={400}
                />
            </div>
            <LocationDetails />
            <OwnerDetails />
            <LocationPolicies />
        </div>
    )
}
