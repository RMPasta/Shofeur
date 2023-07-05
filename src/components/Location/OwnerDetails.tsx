export default function OwnerDetails() {
    return (
        <div className="flex justify-between gap-5 px-10 mt-24 w-full">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1 w-full border-2 border-gray-100 rounded shadow-lg shadow-lg p-10">
                    <p>Chauffeur Always Included</p>
                    <p>Every reservation includes a chauffeur to drive the vehicle.</p>
                </div>
                <div className="flex flex-col gap-1 w-full border-2 border-gray-100 rounded shadow-lg shadow-lg p-10">
                    <p className="font-bold text-lg">About Ryan Malmos</p>
                    <p className="text-gray-500">Driven Software Engineer</p>
                    <p className="text-gray-500">Python</p>
                    <p className="text-gray-500">Javascript</p>
                    <p className="text-gray-500">React</p>
                    <p className="text-gray-500">Flask</p>
                    <p className="text-gray-500">Express</p>
                    <p className="text-gray-500">SQL</p>
                </div>
            </div>
            <div className="flex flex-col gap-1 w-1/2 mb-10 border-2 border-gray-100 rounded shadow-lg shadow-lg p-4">
                <span className="flex justify-between p-5">
                    <p>No Smoking</p>
                    <p>No Minimum</p>
                </span>
                <span className="flex flex-col px-5 py-10">
                    <p className="font-bold text-xl">Amenities</p>
                    <ul>
                        <li className="text-gray-500">Air Conditioning</li>
                        <li className="text-gray-500">Sun Roof</li>
                        <li className="text-gray-500">Mini Bar</li>
                        <li className="text-gray-500">Music</li>
                    </ul>
                </span>
            </div>
        </div>
    )
}