export default function OwnerDetails() {
    return (
        <div className="flex justify-between items-center gap-5 px-10 mt-24 w-full">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1 w-full border-2 border-slate-100 rounded shadow-lg shadow-lg p-10">
                    <p>Chauffeur Always Included</p>
                    <p>Every reservation includes a chauffeur to drive the vehicle.</p>
                </div>
                <div className="flex flex-col gap-1 w-full border-2 border-slate-100 rounded shadow-lg shadow-lg p-10">
                    <p className="font-bold text-lg">About Ryan Malmos</p>
                    <p className="text-slate-600">Driven Software Engineer</p>
                    <p className="text-slate-600">Python</p>
                    <p className="text-slate-600">Javascript</p>
                    <p className="text-slate-600">React</p>
                    <p className="text-slate-600">Flask</p>
                    <p className="text-slate-600">Express</p>
                    <p className="text-slate-600">SQL</p>
                </div>
            </div>
            <div className="flex flex-col gap-1 w-1/2 mb-10 border-2 border-slate-100 rounded shadow-lg shadow-lg p-4">
                <span className="flex justify-between p-5">
                    <p>No Smoking</p>
                    <p>No Minimum</p>
                </span>
                <span className="flex flex-col p-5">
                    <p className="font-bold text-xl">Amenities</p>
                    <ul className="ml-6">
                        <li>Air Conditioning</li>
                        <li>Sun Roof</li>
                        <li>Mini Bar</li>
                        <li>Music</li>
                    </ul>
                </span>
            </div>
        </div>
    )
}
