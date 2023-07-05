import Image from 'next/image';
import partybus from '../app/assets/party-bus.jpg';

export default function LocationDetails() {
    return (
        <div className="flex flex-col items-center px-40 mt-24 w-full">
            <div className="flex flex-col items-center gapx-5">
                <h2 className="text-2xl">Luxury Party Bus NYC</h2>
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
            <div className="flex gap-10 justify-between items-center">
                <a>Add a Listing</a>
                <a>Sign Up</a>
                <a>Log In</a>
            </div>
        </div>
    )
}
