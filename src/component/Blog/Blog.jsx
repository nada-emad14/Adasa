import React from "react";
import { Link } from "react-router";

export default function Blog({ card, view }) {
  const { slug, title, tags, excerpt, readTime, image, date, author } = card;
  const { name, avatar, role } = author;

  if (view === "list") {
    return (
      <div className="group flex w-full overflow-hidden rounded-2xl border border-gray-500/50 bg-gray-500/20 hover:border-orange-500/30 transition-all duration-300 relative">
        <Link to={`/blogsdetails/${slug}`} className="flex w-full min-w-0">
        <div className="w-24 sm:w-42 md:w-72 lg:w-80 shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full min-h-40 object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
          />
        </div>

        <div className="flex flex-col flex-1 min-w-0 p-3 sm:p-5 ">
          <div className=" text-white/50 text-xs sm:text-sm my-1 sm:my-2">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="px-2 sm:px-3 py-1 mx-1 my-1 bg-orange-500/20 backdrop-blur-sm text-orange-500 text-[11px] sm:text-xs font-semibold rounded-full border border-orange-500/50 absolute top-0 right-0">
                {tags[2]}
              </span>
              <span>
                <i className="fa-regular fa-clock ml-2"></i>
                {readTime}
              </span>
              <span><i className="fa-regular fa-calendar-days mx-1"></i>{date}</span>
            </div>
          </div>

          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold my-2 sm:mt-4 sm:mb-3 leading-relaxed wrap-break-word group-hover:text-orange-500 transition-all duration-300">
            {title}
          </h3>

          <p className="text-xs sm:text-sm md:text-base leading-6 text-white/60 sm:leading-8 line-clamp-2">{excerpt}</p>

          {/* الكاتب */}
          <div className="flex  justify-between sm:items-center gap-3 mt-auto pt-3 md:pt-6 ">
            <div className="flex items-center gap-2 md:gap-4 min-w-0">
              <img src={avatar} alt={name} className="w-9 h-9 md:w-12 md:h-12 rounded-full shrink-0" />

              <div>
                <h5 className="text-sm sm:text-md md:text-lg lg:text-xl">{name}</h5>
                <p className="text-2xs sm:text-sm text-white/50">{role}</p>
              </div>
            </div>

            <button className="hidden sm:inline-flex cursor-pointer text-sm md:text-lg text-orange-500 font-bold justify-center items-center gap-2 group-hover:gap-3 transition-all duration-300">
              اقرأ المقال
            <i className="bi bi-arrow-left ml-2 "></i>
            </button>
          </div>
        </div>
        </Link>
      </div>
    );
  }

  return (
    <>
    
      <div className="card sm:mx-auto w-full overflow-hidden rounded-2xl relative border border-gray-500/50 bg-gray-500/20 transition-transform duration-300 ease-in-out hover:-translate-y-1 group shadow-lg ">
        <Link to={`/blogsdetails/${slug}`}>
        <img
          src={image}
          alt=""
          className="w-full h-44 sm:h-48 md:h-52 object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-gray-500/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-gray-500/50">
            {tags[2]}
          </span>
        </div>
        <div className=" flex flex-col p-4 sm:p-5 pb-2 gap-2 ">
          <div className="flex items-center font-light text-xs sm:text-[14px] text-white/50 gap-2 sm:gap-3">
            <div className="flex gap-2 items-center">
              <span>
                <i className="fa-regular fa-clock ml-2" /> {readTime}
              </span>
              <i className="fa-solid fa-circle text-[6px]" />
              <span>{date}</span>
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold leading-relaxed wrap-break-word group-hover:text-orange-500 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm sm:text-base leading-7 wrap-break-word text-white/50">{excerpt}</p>
          <div className="flex justify-between items-center align-self-end mt-3 p-3 border-t border-gray-500/50">
            <div className="flex gap-2 sm:gap-3 min-w-0">
              <img
                src={avatar}
                className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-3 border-gray-500/50"
                alt={name}
              />
              <div className="min-w-0">
                <p className="text-sm sm:text-md">{name}</p>
                <p className=" text-xs text-white/50">{role}</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent ">
              <i className="fa-solid fa-angle-left text-orange-500 group-hover:text-white"></i>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
}
