

import { Link } from "react-router";

export default function AuthorCard({author}) {
  const {name, role, avatar} = author
  console.log(name);
  

  return (
    <>
      <div className="flex flex-col gap-2 sm:gap-4 bg-white/10 py-2 sm:py-6 pb-4 sm:pb-10 justify-center items-center group border border-white/20 rounded-2xl hover:border-orange/50 transition-all duration-300 ease-in-out">
        <div className="relative">
          <img
            className="w-18 h-18 sm:w-24 sm:h-24 rounded-full border-3 border-white/20 group-hover:border-orange/50 transition-all duration-300 ease-in-out"
            src={avatar}
            alt={name}
          />
          <span className="bottom-1 right-1 absolute bg-orange border-none rounded-full flex items-center justify-center w-3 h-3 sm:w-5 sm:h-5 ">
            <i className="fa-solid fa-check text-2xs sm:text-sm font-light text-white" />
          </span>
        </div>
        <div className="flex flex-col items-center ">
          <h3 className="text-base sm:text-lg font-semibold">{name}</h3>
          <p className="text-orange-500 font-medium text-xs sm:text-sm">
              {role}</p>
        </div>
        <div className="flex gap-3">
          <Link to={""} className="bg-white/10 w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center rounded text-white/40 text-xs sm:text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"><i className="fa-brands fa-x-twitter" /></Link>
          <Link to={""} className="bg-white/10 w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center rounded text-white/40 text-xs sm:text-sm hover:bg-white/30 hover:text-white transition-all duration-300 ease-in-out"><i className="fa-brands fa-github" /></Link>
          <Link to={""} className="bg-white/10 w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center rounded text-white/40 text-xs sm:text-sm hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out"><i className="fa-brands fa-linkedin" /></Link>
        </div>
      </div>
    </>
  );
}
