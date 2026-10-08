import { useState } from "react";
import { BounceLoader } from "react-spinners";
import posts from "../../posts.json";
import Blog from "../../component/Blog/Blog";
import "./Blogs.css";
import { useSearchParams } from "react-router";

export default function Blogs() {

  const postsArray = posts?.posts || [];


  // Pagination

  const [view, setView] = useState("grid");

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  // const categoryFromURL = searchParams.get("category");

const selectedCategory = searchParams.get("category") || "الكل";

  const categories = [...new Set(postsArray.map((post) => post.category))];

  const filteredPosts = postsArray.filter((post) => {
    const searchValue = search.trim();
    const matchesSearch =
      post.title?.includes(searchValue) ||
      post.description?.includes(searchValue) ||
      post.category?.includes(searchValue);
    const matchesCategory =
      selectedCategory === "الكل" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const cardsPerPage = 6;

  const totalPages = Math.ceil(filteredPosts.length / cardsPerPage);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;

  const currentCards = filteredPosts.slice(firstCardIndex, lastCardIndex);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleCategory = (category) => {
    // setSelectedCategory(category);
    setCurrentPage(1);

  if (category === "الكل") {
    setSearchParams({});
  } else {
    setSearchParams({ category });
  }
};
  

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  //=======================

  if (postsArray.length === 0) {
    return (
      <div className="min-h-screen bg-[#161616] flex flex-col justify-center items-center gap-4 text-white">
        <BounceLoader color="#ea580c" size={60} speedMultiplier={1.2} />
        <p className="text-xl animate-pulse">جاري تحميل المقالات...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col scroll-smooth">
      <div className="h-auto py-10 sm:py-12 px-4 sm:px-6 gap-2 sm:gap-4 text-center flex flex-col items-center homeContainer">
        <div className="text-xs sm:text-sm text-orange-500 bg-orange-500/20 my-4 mx-auto flex items-center px-3 sm:px-4 py-2 gap-2 sm:gap-3 rounded-full myWidth">
          <BounceLoader
            color="#ea580c"
            size={12}
            speedMultiplier={1.5}
            className=" my-1"
          />
          <i className="fa-solid fa-newspaper text-orange-500 py-1" />
          مدونتنا
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold md:text-6xl lg:text-7xl text-white leading-tight">
          استكشف
          <p className="px-3 gradientText">مقالاتنا </p>
        </h2>

        <div className="w-full max-w-2xl mx-auto my-3 px-2">
          <p className="text-base sm:text-lg mb-4 text-white/50 md:text-xl leading-relaxed">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-6 border-b border-b-white/50 py-4 px-5 md:px-8">
          <div className="relative w-full lg:w-80 shrink-0">
            <input
              placeholder="ابحث في المقالات..."
              className="input-dark bg-[#161616] rounded-xl border border-white/50 w-full px-5 py-3 pr-12 focus:border-orange-500 focus:outline-none"
              type="text"
              value={search}
              onChange={handleSearch}
            />
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50"></i>
          </div>

          <div className="w-full lg:w-auto min-w-0 overflow-hidden">
            <div className="flex gap-2 md:gap-5 overflow-x-auto whitespace-nowrap pb-2 scrollbar-none *:shrink-0">
              <button
                type="button"
                onClick={() => handleCategory("الكل")}
                className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl border ${selectedCategory === "الكل" ? "linearBG text-orange-500 border-orange-500" : "bg-[#161616] text-neutral-400 border-white/50 hover:border-orange-500/30"}`}
              >
                جميع المقالات
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 hover:border-orange-500/30
                rounded-xl  border border-white/50 active:linearBG ${selectedCategory === category ? "linearBG text-orange-500 border-orange-500" : "bg-[#161616] text-neutral-400 border-white/50 hover:border-orange-500/30"}`}
                  onClick={() => handleCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid p-5 sm:p-8 gap-4 md:gap-8">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-1 text-white/50">
              عرض <p className=" font-bold text-white">{postsArray.length}</p>
              مقالات
            </div>
            <div className="flex items-center bg-[#161616] border border-gray-500/50 rounded-xl px-1 py-1.5 sm:py-2">
              <button
                className="cursor-pointer"
                onClick={() => setView("grid")}
              >
                <i
                  className={`bi bi-grid text-base sm:text-xl px-1.5 sm:px-2 py-1 rounded transition
                  ${view === "grid" ? "linearBG text-orange-500" : "text-white/60"}`}
                ></i>
              </button>
              <button
                className="cursor-pointer"
                onClick={() => setView("list")}
              >
                <i
                  className={`bi bi-list text-base sm:text-xl px-1.5 sm:px-2 py-1 rounded transition 
                    ${view === "list" ? "linearBG text-orange-500" : "text-white/60"}`}
                ></i>
              </button>
            </div>
          </div>
          <div
            className={`gap-4 sm:gap-6 md:gap-8 ${
              view === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full"
                : "flex flex-col"
            }`}
          >
            {currentCards.map((e) => (
              <Blog key={e.id} card={e} view={view} />
            ))}
          </div>
          {filteredPosts.length > 0 && totalPages > 1 && (
            <div className="flex justify-center items-center flex-wrap gap-2 mt-2 sm:mt-10">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`cursor-pointer px-2 sm:px-4 py-1 sm:py-2 rounded sm:rounded-lg transition
      ${
        currentPage === 1
          ? "bg-orange-500 text-white"
          : "bg-[#161616] text-white hover:bg-orange-500"
      }`}
              >
                السابق
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`cursor-pointer w-7 sm:w-10 h-8 sm:h-10 rounded sm:rounded-lg transition
        ${
          currentPage === index + 1
            ? "bg-orange-500 text-white"
            : "bg-[#161616] text-white hover:bg-orange-500"
        }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`cursor-pointer px-2 sm:px-4 py-1 sm:py-2 rounded sm:rounded-lg transition
      ${
        currentPage === totalPages
          ? "bg-gray-700 text-gray-500 cursor-not-allowed"
          : "bg-[#161616] text-white hover:bg-orange-500"
      }`}
              >
                التالي
              </button>
            </div>
          )}
        </div>
      </div>
      {/* <BlogsDetails /> */}
    </div>
  );
}
