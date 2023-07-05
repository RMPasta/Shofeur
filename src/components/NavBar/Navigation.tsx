import SlideOutMenu from "./SlideOutMenu";

export default function Navigation(): JSX.Element {
    return (
      <div className="flex justify-between gap-10 items-center fixed top-0 px-4 lg:px-40 w-full h-20 bg-gray-950 bg-opacity-90 text-gray-200">
        <div className="flex justify-between items-center gap-10">
          <SlideOutMenu />
          <h1 className="text-3xl">Shofeur</h1>
        </div>
        <div className="hidden md:flex h-full w-2/5">
          <a className="transition-colors duration-700 hover:bg-slate-700 w-2/3 h-full flex items-center justify-center hover:cursor-pointer">Add a Listing</a>
          <a className="transition-colors duration-700 hover:bg-slate-700 w-2/3 h-full flex items-center justify-center hover:cursor-pointer">Sign Up</a>
          <a className="transition-colors duration-700 hover:bg-slate-700 w-2/3 h-full flex items-center justify-center hover:cursor-pointer">Log In</a>
        </div>
      </div>
    );
  }
