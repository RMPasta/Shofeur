import SlideOutMenu from "./SlideOutMenu";

export default function Navigation() {
    return (
      <div className="flex justify-between items-center fixed top-0 px-40 w-full h-20 bg-gray-950 bg-opacity-90 text-gray-200">
        <div className="flex justify-between items-center gap-10">
          <SlideOutMenu />
          <h1 className="text-3xl">Shofeur</h1>
        </div>
        <div className="flex justify-between items-center h-full w-1/3">
          <a className="transition-colors duration-700 hover:bg-slate-700 w-1/3 h-full flex items-center justify-center hover:cursor-pointer">Add a Listing</a>
          <a className="transition-colors duration-700 hover:bg-slate-700 w-1/3 h-full flex items-center justify-center hover:cursor-pointer">Sign Up</a>
          <a className="transition-colors duration-700 hover:bg-slate-700 w-1/3 h-full flex items-center justify-center hover:cursor-pointer">Log In</a>
        </div>
      </div>
    );
  }
