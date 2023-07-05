export default function Navigation() {
    return (
      <div className="flex justify-between items-center fixed top-0 px-40 w-full h-20 bg-gray-900 bg-opacity-95 text-gray-200">
        <div className="flex justify-between items-center gap-5">
          <p>hamburger</p>
          <h1 className="text-3xl">Shofeur</h1>
        </div>
        <div className="flex justify-between items-center h-full w-1/3">
          <a className="transition-colors duration-700 hover:bg-slate-400 w-1/3 h-full flex items-center justify-center">Add a Listing</a>
          <a className="transition-colors duration-700 hover:bg-slate-400 w-1/3 h-full flex items-center justify-center">Sign Up</a>
          <a className="transition-colors duration-700 hover:bg-slate-400 w-1/3 h-full flex items-center justify-center">Log In</a>
        </div>
      </div>
    );
  }
