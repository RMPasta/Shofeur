export default function Navigation() {
    return (
        <div className="flex justify-between items-center fixed t-0 px-40 w-full h-20 bg-slate-800 bg-opacity-95 text-slate-200">
            <div className="flex justify-between items-center gap-5">
                <p>hamburger</p>
                <h1 className="text-3xl">Shofeur</h1>
            </div>
            <div className="flex gap-10 justify-between items-center">
                <a>Add a Listing</a>
                <a>Sign Up</a>
                <a>Log In</a>
            </div>
        </div>
    )
}
