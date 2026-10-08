export default function Subscribe({ cards }) {
  const authors = cards.posts.map((post) => post.author);
  //   const { name, avatar } = card;
  //   const array = [...Array(5).keys()];
  return (
    <div className="relative py-10 sm:py-12 md:py-18 px-4 sm:px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-96 md:w-150 h-48 sm:h-60 md:h-75 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="w-full max-w-4xl mx-auto border border-gray-500/50 bg-gray-500/20 rounded-2xl py-8 sm:py-10 md:py-14 px-4 sm:px-6 flex flex-col justify-center items-center gap-3">
        <div className="flex items-center justify-center p-3 sm:p-4 text-xl sm:text-2xl rounded-2xl border border-orange-500/30 linearBG text-orange-500 w-fit">
          <i className="fa-regular fa-envelope" />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center leading-relaxed">
          اشترك في
          <p className="px-3 gradient-text inline-block">نشرتنا الإخبارية</p>
        </h1>

        <p className="text-base sm:text-lg mb-4 text-white/50 font-medium leading-relaxed text-center">
          احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
        </p>

        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl justify-center">
          <input
            type="email"
            name=""
            id=""
            className="bg-black rounded-xl w-full sm:flex-1 min-w-0 focus:outline-none focus:ring-0 focus:border-orange-500 p-3 text-white"
            placeholder="أدخل بريدك الإلكتروني"
          />
          <button className="linearBG p-3 w-full sm:w-auto rounded-xl font-semibold cursor-pointer shadow-xs focus:outline-none hover:-translate-y-1 transition-transform duration-500 ease-in-out">
            اشترك الآن
          </button>
        </form>
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-3 text-center sm:text-start">
          <div className="flex -space-x-4 rtl:space-x-reverse">
            {authors.slice(0, 5).map((author, index) => (
              <img
                key={index}
                className="w-8 h-8 border border-white rounded-full"
                src={author.avatar}
                alt={author.name}
              />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 text-sm text-white/40 items-center">
            <p>انضم لـ<span className="text-white"> +10,000</span> مصور</p>.<p>بدون إزعاج</p>.
            <p>إلغاء الاشتراك في أي وقت</p>
          </div>
        </div>
      </div>
    </div>
  );
}
