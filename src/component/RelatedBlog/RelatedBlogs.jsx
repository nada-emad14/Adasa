import { Link } from "react-router";
import cards from "../../posts.json";

export default function RelatedBlogs({ card, category, currentSlug }) {
  const postsArray = cards?.posts || [];

  const relatedPosts = postsArray.filter(
    (item) => item.category === category && item.slug !== currentSlug,
  );

  return (
    <div className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="mb-3 sm:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex gap-3 ">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center p-2 text-3xl rounded-2xl border border-orange-500/30 bg-orange-500/10 text-orange-500">
              <i className="fa-solid fa-images" />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold leading-tight">
              مقالات قد تعجبك
            </h2>
            <p className="text-base sm:text-lg text-white/50 font-medium leading-relaxed">
              استكشف المزيد من المحتوى المميز
            </p>
          </div>
        </div>
        <button className="cursor-pointer text-orange-500 font-bold flex justify-center items-center gap-2 hover:gap-3 transition-all duration-300">
          عرض الكل<i className="bi bi-arrow-left ml-2 "></i>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {relatedPosts.slice(0, 3).map((e) => (
          <div className="w-full bg-white/5 border border-white/20 rounded-2xl group hover:border-orange-500/40 transition-all duration-300 ease-in-out overflow-hidden">
            <Link to={`/blogsdetails/${e.slug}`} >
            <div className="relative shrink-0 overflow-hidden">
              <img
                src={e.image}
                alt=""
                className="rounded-t-2xl w-full h-full min-h-40 object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent" />
              <span className="absolute top-0 right-0 linearBG rounded-full m-3 py-1 px-2 text-xs">
                {e.category}
              </span>
            </div>
            <div className="w-full py-2 px-4 flex flex-col h-full">
              <h3 className="text-base sm:text-lg font-bold my-2 sm:mt-4 sm:mb-3 leading-relaxed wrap-break-word group-hover:text-orange-500 transition-all duration-300">
                {e.title}
              </h3>
              <div className="flex items-center justify-between text-white/40 font-light text-sm">
                <div className="flex items-center gap-2">
                  <img
                    src={e.author.avatar}
                    alt={e.author.name}
                    className="rounded-full w-8 h-8"
                  />
                  {e.author.name}
                </div>
                <div>{e.readTime}</div>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
