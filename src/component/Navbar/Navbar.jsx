import React, { useState } from "react";
import logo from "../../assets/logo-GdqARQRt.png";
import "./Navbar.css"; // احتفظ بملف الـ CSS إذا كان يحتوي على خطوط مخصصة مثل tajawal-bold
import { Link } from "react-router";
import { useLocation } from "react-router";
export default function Navbar() {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="selection:bg-orange-500 selection:text-white">
      <nav className="fixed top-0 z-20 w-full bg-black border-b border-gray-800 px-4 py-3">
        <div className="w-full flex gap-4 items-center justify-between">
          {/* اللوجو واسم الموقع */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 text-white no-underline group shrink-0"
          >
            <img
              src={logo}
              className="image group-hover:scale-110 transition-transform duration-500 ease-in-out"
              alt=""
            />
            <div className="flex flex-col">
              <p className="text-xl m-0 tajawal-bold">عدسة</p>
              <p className="text-xs sm:text-sm m-0 orangeTXT whitespace-nowrap">
                عالم التصوير الفوتوغرافي
              </p>
            </div>
          </Link>

          {/* القائمة الروابط - مخفية في الشاشات الصغيرة وتظهر في الكبيرة */}
          <div
            className="hidden lg:flex items-center"
            id="navbarSupportedContent"
          >
            <ul className="flex flex-row items-center gap-2 mb-0 border border-gray-700 px-3 py-3 rounded-full bg-neutral-900 list-none w-64 justify-between">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`text-white hover:text-gray-300 no-underline  ${location.pathname === "/" && "beActive py-2 px-2.5 "}`}
                  aria-current="page"
                >
                  الرئيسية
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blogs"
                  className={`text-white hover:text-gray-300 no-underline ${
                    (location.pathname === "/blogs" ||
                      location.pathname.startsWith("/blogsdetails/")) &&
                    "beActive py-2 px-2.5"
                  }`}
                >
                  المدونة
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`text-white hover:text-gray-300 no-underline  ${location.pathname === "/about" && "beActive py-2 px-2.5"}`}
                >
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          <div className=" flex items-center justify-center gap-2 sm:gap-3 shrink-0">
            <span className="w-10 h-10 rounded flex items-center justify-center cursor-pointer hover:text-orange-500 hover:bg-white/10 transition-all duration-300">
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="
    lg:hidden
    w-10 h-10
    flex items-center justify-center
    rounded-full
    text-white/80
    hover:text-orange-500
    hover:bg-orange-500/10
    transition-all duration-300
    cursor-pointer
  "
              aria-label="فتح القائمة"
            >
              <i className="fa-solid fa-bars text-xl" />
            </button>
            <Link
              to="/blogs"
              className="hidden lg:inline-block cursor-pointer rounded-full py-2.5 px-3 sm:py-3 sm:px-4 text-sm sm:text-base lg:text-lg tajawal-bold linearBG text-white no-underline hover:-translate-y-1 transition-transform duration-500 ease-in-out whitespace-nowrap"
            >
              ابدأ القراءة
            </Link>
          </div>
        </div>
        {/* Mobile Sidebar */}
        <div
          className={`
    fixed inset-0 z-40 lg:hidden
    transition-all duration-300
    ${
      isMenuOpen
        ? "visible bg-black/60"
        : "invisible bg-transparent pointer-events-none"
    }
  `}
          onClick={closeMenu}
        >
          {/* Sidebar */}
          <aside
            onClick={(e) => e.stopPropagation()}
            className={`
      absolute top-0 right-0
      h-full w-72 max-w-[85%]
      bg-neutral-950
      border-l border-gray-800
      shadow-2xl
      transition-transform duration-300 ease-in-out
      ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
    `}
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-800">
              <Link
                to="/"
                onClick={closeMenu}
                className="flex items-center gap-3 text-white no-underline"
              >
                <img src={logo} className="image w-10 h-10" alt="" />

                <div className="flex flex-col">
                  <p className="text-xl m-0 tajawal-bold">عدسة</p>

                  <p className="text-xs m-0 orangeTXT">
                    عالم التصوير الفوتوغرافي
                  </p>
                </div>
              </Link>

              {/* Close */}
              <button
                type="button"
                onClick={closeMenu}
                className="
          w-9 h-9
          flex items-center justify-center
          rounded-full
          text-white/70
          hover:text-orange-500
          hover:bg-orange-500/10
          transition-all duration-300
          cursor-pointer
        "
                aria-label="إغلاق القائمة"
              >
                <i className="fa-solid fa-xmark text-xl" />
              </button>
            </div>

            {/* Sidebar Links */}
            <div className="p-5">
              <ul className="list-none p-0 m-0 flex flex-col gap-2">
                {/* الرئيسية */}
                <li>
                  <Link
                    to="/"
                    onClick={closeMenu}
                    className={`
              flex items-center gap-3
              w-full
              px-4 py-3
              rounded-xl
              no-underline
              transition-all duration-300
              ${
                location.pathname === "/"
                  ? "bg-orange-500/10 text-orange-500"
                  : "text-white/80 hover:bg-white/5 hover:text-orange-500"
              }
            `}
                  >
                    <i className="fa-solid fa-house w-5 text-center" />
                    <span>الرئيسية</span>
                  </Link>
                </li>

                {/* المدونة */}
                <li>
                  <Link
                    to="/blogs"
                    onClick={closeMenu}
                    className={`
              flex items-center gap-3
              w-full
              px-4 py-3
              rounded-xl
              no-underline
              transition-all duration-300
              ${
                location.pathname === "/blogs" ||
                location.pathname.startsWith("/blogsdetails/")
                  ? "bg-orange-500/10 text-orange-500"
                  : "text-white/80 hover:bg-white/5 hover:text-orange-500"
              }
            `}
                  >
                    <i className="fa-solid fa-newspaper w-5 text-center" />
                    <span>المدونة</span>
                  </Link>
                </li>

                {/* من نحن */}
                <li>
                  <Link
                    to="/about"
                    onClick={closeMenu}
                    className={`
              flex items-center gap-3
              w-full
              px-4 py-3
              rounded-xl
              no-underline
              transition-all duration-300
              ${
                location.pathname === "/about"
                  ? "bg-orange-500/10 text-orange-500"
                  : "text-white/80 hover:bg-white/5 hover:text-orange-500"
              }
            `}
                  >
                    <i className="fa-solid fa-users w-5 text-center" />
                    <span>من نحن</span>
                  </Link>
                </li>
              </ul>

              {/* CTA */}
              <div className="mt-6 pt-5 border-t border-gray-800">
                <Link
                  to="/blogs"
                  onClick={closeMenu}
                  className="
            flex items-center justify-center gap-2
            w-full
            py-3 px-4
            rounded-xl
            linearBG
            text-white
            no-underline
            tajawal-bold
            hover:-translate-y-1
            transition-transform duration-300
          "
                >
                  <i className="fa-solid fa-book-open" />
                  ابدأ القراءة
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </nav>
    </div>
  );
}
