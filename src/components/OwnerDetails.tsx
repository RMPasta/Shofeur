export default function OwnerDetails() {
    return (
        <div className="flex justify-between items-center gap-5 px-40 mt-24 w-full">
            <div className="flex flex-col gap-1 w-1/2  border-2 border-slate-100 rounded shadow-lg shadow-lg w-300 h-200">
                <p>Chauffeur Always Included</p>
                <p>Every reservation includes a chauffeur to drive the vehicle.</p>
            </div>
            <div className="flex flex-col gap-1 w-1/2 mb-10 border-2 border-slate-100 rounded shadow-lg shadow-lg p-20">
                <p>No Smoking</p>
                <p>No Minimum</p>
                <span>
                    <p>Amenities</p>
                    <ul>
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
