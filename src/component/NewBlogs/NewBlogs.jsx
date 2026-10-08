import { BounceLoader } from "react-spinners";
import cards from "../../posts.json";
import Blog from "../Blog/Blog";

export default function NewBlogs() {
  const postsArray = cards?.posts || [];

  const newestPosts = [...postsArray]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-orange-500/5 to-transparent"></div>
      <div className="text-xs sm:text-sm text-white my-4 flex items-center justify-center px-3 sm:px-4 py-2 gap-2 rounded-full myWidth">
        <BounceLoader color="#ea580c" size={12} />
        <BounceLoader color="#ea580c" size={12} speedMultiplier={1.5} />
        الأحدث 
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
        أحدث المقالات
      </h1>
      <div className="my-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-base sm:text-lg md:text-xl mb-4 text-white/50 font-medium my-2 sm:my-4 leading-relaxed">
          محتوى جديد طازج من المطبعة
        </p>
        <button className="cursor-pointer text-orange-500 font-bold flex justify-center items-center gap-2 hover:gap-3 transition-all duration-300">
          عرض جميع المقالات <i className="bi bi-arrow-left ml-2 "></i>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {newestPosts.map((post) => (
          <Blog key={post.id} card={post} />
        ))}
      </div>
      
    </div>
  );
}
