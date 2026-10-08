import { BounceLoader } from "react-spinners";
import Blog from "../../component/Blog/Blog";
import cards from "../../posts.json";
import { Link, Navigate } from "react-router";
import { useState } from "react";
import NewBlogs from "../../component/NewBlogs/NewBlogs";
import Subscribe from "../../component/Subscribe/Subscribe";
import "./Home.css";

export default function Home() {
  const postsArray = cards?.posts || [];

  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const categories = [...new Set(postsArray.map((post) => post.category))];

  const handleCategory = (category) => {
    setSelectedCategory(category);
    Navigate(`/blogs?category=${category}`);
  };

  // const postsArray = cards?.posts || [];
  // console.log(postsArray);

  // const {category} = postsArray;
  return (
    <div className="">
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 md:py-16 text-center flex flex-col items-center homeContainer">
        <div className="text-xs sm:text-sm text-white! my-4 mx-auto flex items-center justify-center px-3 sm:px-4 py-2 gap-2 rounded-full myWidth max-w-full">
          <BounceLoader color="#ea580c" size={12} />
          <BounceLoader color="#ea580c" size={12} speedMultiplier={1.5} />
          مرحباً بك في عدسة
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-normal sm:leading-tight max-w-full">
          اكتشف <p className="px-3 gradient-text inline-block">فن </p> <br />
          التصوير الفوتوغرافي
        </h1>

        <div className="w-full max-w-2xl mx-auto my-3 px-2">
          <p className="text-base sm:text-lg md:text-xl text-white/50 font-medium my-4 leading-relaxed">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full sm:w-auto">
          <button
            type="button"
            className="cursor-pointer btn rounded-full text-base sm:text-lg px-6 py-3 gap-3 linearBG text-white font-medium group w-full sm:w-auto"
          >
            استكشف المقالات
            <i className="bi bi-arrow-left mr-2 group-hover:-translate-x-1 inline-block transition-transform duration-500 ease-in-out"></i>
          </button>
          <button
            type="button"
            className="cursor-pointer btn border border-gray-500/50 text-white rounded-full text-base sm:text-lg px-6 py-3 btn-linear w-full sm:w-auto"
          >
            <i className="bi bi-info-circle ml-2"></i> اعرف المزيد
          </button>
        </div>

        {/* الكروت الإحصائية */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-0 sm:px-2 md:px-4 my-4 w-full max-w-5xl">
          <div className="flex flex-col border border-gray-500/50 items-center justify-center py-4 sm:py-5 rounded-2xl bg-gray-500/20 w-full min-w-0">
            <i className="fa-solid fa-newspaper orangeIcon" />
            <p className="orangeIcon font-semibold my-2 text-lg sm:text-xl">
              +50
            </p>
            <p className="text-sm sm:text-base md:text-xl text-white m-0">
              مقالة
            </p>
          </div>
          <div className="flex flex-col border border-gray-500/50 items-center justify-center py-4 sm:py-5 rounded-2xl bg-gray-500/20 w-full min-w-0">
            <i className="fa-solid fa-users orangeIcon" />
            <p className="orangeIcon font-semibold my-2 text-lg sm:text-xl">
              +10ألف
            </p>
            <p className="text-sm sm:text-base md:text-xl text-white m-0">
              قارئ
            </p>
          </div>
          <div className="flex flex-col border border-gray-500/50 items-center justify-center py-4 sm:py-5 rounded-2xl bg-gray-500/20 w-full min-w-0">
            <i className="fa-solid fa-folder-open orangeIcon" />
            <p className="orangeIcon font-semibold my-2 text-lg sm:text-xl">
              4
            </p>
            <p className="text-sm sm:text-base md:text-xl text-white m-0">
              تصنيفات
            </p>
          </div>
          <div className="flex flex-col border border-gray-500/50 items-center justify-center py-4 sm:py-5 rounded-2xl bg-gray-500/20 w-full min-w-0">
            <i className="fa-solid fa-pen-nib orangeIcon" />
            <p className="orangeIcon font-semibold my-2 text-lg sm:text-xl">
              6
            </p>
            <p className="text-sm sm:text-base md:text-xl text-white m-0">
              كاتب
            </p>
          </div>
        </div>
      </div>

      {/* الجزء السفلي (المقالات المميزة) */}
      <div className="gradientBG w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10">
          <div className="mb-4 rounded-xl text-white">
            <div className="w-full px-0 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5">
              <div>
                <div className="text-sm my-4 flex items-center px-4 py-2 gap-2 rounded-full myWidth">
                  <BounceLoader color="#ea580c" size={12} />
                  <BounceLoader
                    color="#ea580c"
                    size={12}
                    speedMultiplier={1.5}
                  />
                  مميز
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3">
                  مقالات مختارة
                </h1>
                <p className="text-base sm:text-lg md:text-xl my-3 text-white/50">
                  محتوى منتقى لبدء رحلة تعلمك
                </p>
              </div>
              <div>
                <div className="group text-sm sm:text-base md:text-lg mb-0 text-white w-fit px-4 sm:px-5 py-2 rounded-2xl flex justify-center items-center bg-orange-500 gap-2 transition-all duration-300">
                  <a
                    href={"/blogs"}
                    className="font-bold no-underline text-white flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                  >
                    عرض الكل <i className="fa-solid fa-angle-left"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6 mb-4">
            {cards.posts.slice(0, 3).map((card) => (
              <Blog key={card.id} card={card} view="list" />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white/10 py-8 sm:py-10 px-4 sm:px-6 md:px-8 text-center border-y border-white/30">
        <div className="text-sm text-white my-4 mx-auto flex items-center px-4 py-2 gap-2 rounded-full myWidth">
          <BounceLoader color="#ea580c" size={12} />
          <BounceLoader color="#ea580c" size={12} speedMultiplier={1.5} />
          التصنيفات
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          استكشف حسب الموضوع
        </h1>
        <div className="w-full max-w-2xl mx-auto my-3 px-2">
          <p className="text-base sm:text-lg md:text-xl mb-4 text-white/50 font-medium my-4 leading-relaxed">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 scroll-smooth max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const icons = [
              "fa-solid fa-sun",
              "fa-solid fa-user",
              "fa-solid fa-mountain-sun",
              "fa-solid fa-sliders",
            ];
            const categoryPostsCount = postsArray.filter(
              (post) => post.category === category,
            ).length;
            return (
              <Link
                key={category}
                to={`/blogs?category=${category}`}
                onClick={() => {
                  setTimeout(() =>
                    window.scrollTo({ top: 0, behavior: "smooth" }),
                  );
                }}
                className=" cursor-pointer bg-white/10 p-4 sm:p-5 w-full min-w-0 rounded-lg border border-white/30 flex flex-col gap-2 items-start shadow-xs focus:outline-none hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:-translate-y-1 transition-all duration-500 ease-in-out group "
              >
                <span className=" flex items-center justify-center p-3 rounded-2xl border border-orange-500/30 bg-orange-500/20 text-orange-500 w-fit text-lg sm:text-xl group-hover:bg-white/20 group-hover:text-white transition-all duration-300 ">
                  <i className={icons[index % icons.length]} />
                </span>
                <h2 className="font-bold text-base sm:text-lg"> {category} </h2>
                <p className="text-white/40 text-sm">
                  {categoryPostsCount} مقالة
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      <NewBlogs />
      <div className="block">
        <Subscribe cards={cards} />
      </div>
    </div>
  );
}
