import React from "react";
import "flowbite";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 md:flex md:justify-between">
          <div className="w-fit mx-0 mb-6 md:mb-0">
            <Link
              to={'/'}
              className="flex items-center gap-3 group mb-2"
            >
              <div className="px-3 py-1 linearBG text-white text-2xl font-semibold rounded shadow-md shadow-orange-500/50 group-hover:scale-105 transition-all duration-300">
                ع
              </div>
              <span className=" self-center text-2xl font-semibold whitespace-nowrap">
                عدسة
              </span>
            </Link>
            <p className="text-white/40 text-sm font-medium sm:max-w-64 my-3">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="flex  items-center gap-3">
              <div className="px-2 py-1 border border-gray-500/50 rounded text-white/40 bg-white/10 hover:bg-linear-to-r from-orange-500 to-yellow-500 hover:text-white hover:scale-110 transition-transform duration-500 ease-in-out">
                <i className="fa-brands fa-x-twitter"></i>
              </div>
              <div className="px-2 py-1 border border-gray-500/50 rounded text-white/40 bg-white/10 hover:bg-linear-to-r from-orange-500 to-yellow-500 hover:text-white hover:scale-110 transition-transform duration-500 ease-in-out">
                <i className="fa-brands fa-github"></i>
              </div>
              <div className="px-2 py-1 border border-gray-500/50 rounded text-white/40 bg-white/10 hover:bg-linear-to-r from-orange-500 to-yellow-500 hover:text-white hover:scale-110 transition-transform duration-500 ease-in-out">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="px-2 py-1 border border-gray-500/50 rounded text-white/40 bg-white/10 hover:bg-linear-to-r from-orange-500 to-yellow-500 hover:text-white hover:scale-110 transition-transform duration-500 ease-in-out">
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full" />
              استكشف
            </h3>

            <ul className="text-white/40 font-medium">
              <li className="mb-4">
                <Link
                  to={"/"}
                  className="text-sm hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500">
                    <i className="fa-solid fa-angle-left" />
                  </span>
                  الرئيسية
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to={"/blogs"}
                  className="text-sm hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500">
                    <i className="fa-solid fa-angle-left" />
                  </span>
                  المدونة
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to={"/about"}
                  className="text-sm hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500">
                    <i className="fa-solid fa-angle-left" />
                  </span>
                  من نحن
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full" />
              التصنيفات
            </h3>

            <ul className="text-white/40 font-medium">
              <li className="mb-4">
                <Link
                  to={"/blogs?category=إضاءة"}
                  className="text-sm hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500">
                    <i className="fa-solid fa-angle-left" />
                  </span>
                  إضاءة
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to={"/blogs?category=بورتريه"}
                  className="text-sm hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500">
                    <i className="fa-solid fa-angle-left" />
                  </span>
                  بورتريه
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to={"/blogs?category=مناظر طبيعية"}
                  className="text-sm hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500">
                    <i className="fa-solid fa-angle-left" />
                  </span>
                  مناظر طبيعية
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to={"/blogs?category=تقنيات"}
                  className="text-sm hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500">
                    <i className="fa-solid fa-angle-left" />
                  </span>
                  تقنيات
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
              ابقى على اطلاع
            </h3>
            <p className="text-white/40 text-sm font-medium sm:max-w-64 my-3">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              id="input-group-1"
              className="block w-full px-4 py-3 bg-gray-600/20 border border-gray-500/60 text-sm rounded-base focus:ring-orange-500 focus:border-orange-500 shadow-xs placeholder:text-gray-500/60"
              placeholder="ادخل بريدك الإلكتروني"
            />
            
            <button
              type="button"
              className="cursor-pointer text-white linearBG w-full box-border border border-transparent shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-3 focus:outline-none hover:-translate-y-1 transition-transform duration-500 ease-in-out"
            >
              اشترك
            </button>
            </div>
          </div>
        </div>
        <div>
          <hr className="my-12 border-default/20 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between text-center">
            <span className="text-sm text-white/40 sm:text-center">
              © 2026
              <Link to={'/'} className="mx-1">
              عدسة
              </Link>
              صنع بكل <i className="fa-solid fa-heart text-orange-500"/> جميع الحقوق محفوظة.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 w-fit mx-auto items-center gap-1 text-sm">
              <Link className="text-white/40 hover:text-orange-500">سياسة الخصوصية</Link>
              <i className="fa-solid fa-circle text-[5px] text-white/40"/>
              <Link className="text-white/40 hover:text-orange-500">سياسة الخصوصية</Link>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
