import { BounceLoader } from "react-spinners";
import posts from "../../posts.json";
import AuthorCard from "../../component/AuthorCard/AuthorCard";

export default function About() {
  const postsArray = posts?.posts || [];

  const authors = postsArray.map((post) => post.author);

  return (
    <>
      <div className="px-4 sm:px-8 py-12 text-center flex flex-col items-center homeContainer">
        <div className="text-sm text-white my-4 mx-auto flex items-center px-4 py-2 gap-2 rounded-full myWidth">
          <BounceLoader color="#ea580c" size={12} />
          <BounceLoader color="#ea580c" size={12} speedMultiplier={1.5} />
          من نحن
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-6 leading-tight">
          مهمتنا هي
          <p className="px-3 gradient-text inline-block">الإعلام والإلهام</p>
          <br />
        </h1>

        <div className="max-w-2xl mx-auto sm:my-3">
          <p className="text-base sm:text-lg md:text-xl text-white/50 font-medium my-4 leading-relaxed">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>
        </div>

        {/* الكروت الإحصائية */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-0 sm:px-2 md:px-4 my-4 w-full max-w-5xl">
          <div className="flex flex-col border border-gray-500/50 items-center justify-center py-4 rounded-2xl bg-gray-500/20 sm:w-auto">
            <i className="fa-solid fa-users orangeIcon" />
            <p className="orangeIcon font-semibold my-2 text-xl">+2مليون</p>
            <p className="text-sm text-neutral-500">قارئ شهرياً</p>
          </div>
          <div className="flex flex-col border border-gray-500/50 items-center justify-center py-4 rounded-2xl bg-gray-500/20 sm:w-auto">
            <i className="fa-solid fa-newspaper orangeIcon" />
            <p className="orangeIcon font-semibold my-2 text-xl">+500</p>
            <p className="text-sm text-neutral-500">مقالة منشورة</p>
          </div>
          <div className="flex flex-col border border-gray-500/50 items-center justify-center py-4 rounded-2xl bg-gray-500/20 sm:w-auto">
            <i className="fa-solid fa-pen-nib orangeIcon" />
            <p className="orangeIcon font-semibold my-2 text-xl">+50</p>
            <p className="text-sm text-neutral-500">كاتب خبير</p>
          </div>
          <div className="flex flex-col border border-gray-500/50 items-center justify-center py-4 rounded-2xl bg-gray-500/20 sm:w-auto">
            <i className="fa-solid fa-book-open orangeIcon" />
            <p className="orangeIcon font-semibold my-2 text-xl">+15</p>
            <p className="text-sm text-neutral-500">تصنيف</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-12 bg-white/10 border-y border-white/30">
        <h2 className="flex gap-4 items-center text-2xl md:text-3xl lg:text-4xl font-bold">
          <span className="w-1.5 h-8 bg-linear-to-b from-orange-600 to-yellow-500 rounded-full"></span>
          قيمنا
          <span className="w-1.5 h-8 bg-linear-to-b to-orange-600 from-yellow-500 rounded-full"></span>
        </h2>
        <p className="text-lg mb-4 text-white/80 font-light my-4 leading-relaxed">
          المبادئ التي توجه كل ما نقوم بإنشائه
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 sm:px-6 md:px-4 my-4 w-full max-w-5xl">
          <div className="py-5 flex flex-col sm:gap-2 border border-gray-500/50 text-center px-2 items-center justify-center md:py-6 rounded-2xl bg-gray-500/20 sm:w-auto btn-linear">
            <i className="fa-solid fa-newspaper orangeIcon" />
            <p className="text-lg font-semibold text-white m-0">الجودة أولاً</p>
            <p className="text-sm text-white/80 font-light leading-relaxed">
              محتوى مدروس ومكتوب بخبرة
            </p>
          </div>
          <div className="py-5 flex flex-col sm:gap-2 border border-gray-500/50 text-center px-2 items-center justify-center md:py-6 rounded-2xl bg-gray-500/20 sm:w-auto btn-linear">
            <i className="fa-solid fa-users orangeIcon" />
            <p className="text-lg font-semibold text-white m-0">تركيز عملي</p>
            <p className="text-sm text-white/80 font-light leading-relaxed">
              أمثلة واقعية يمكنك تطبيقها اليوم
            </p>
          </div>
          <div className="py-5 flex flex-col sm:gap-2 border border-gray-500/50 text-center px-2 items-center justify-center md:py-6 rounded-2xl bg-gray-500/20 sm:w-auto btn-linear">
            <i className="fa-solid fa-folder-open orangeIcon" />
            <p className="text-lg font-semibold text-white m-0">المجتمع</p>
            <p className="text-sm text-white/80 font-light leading-relaxed">
              تعلم مع آلاف المصورين
            </p>
          </div>
          <div className="py-5 flex flex-col sm:gap-2 border border-gray-500/50 text-center px-2 items-center justify-center md:py-6 rounded-2xl bg-gray-500/20 sm:w-auto btn-linear">
            <i className="fa-solid fa-pen-nib orangeIcon" />
            <p className="text-lg font-semibold text-white m-0">دائماً محدث</p>
            <p className="text-sm text-white/80 font-light leading-relaxed">
              أحدث الاتجاهات وأفضل الممارسات
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center px-4 py-12">
        <div className="text-sm text-white my-4 mx-auto flex items-center px-4 py-2 gap-2 rounded-full myWidth">
          <BounceLoader color="#ea580c" size={12} />
          فريقنا
        </div>
        <h2 className="flex gap-4 items-center text-2xl md:text-3xl lg:text-4xl font-bold">
          تعرف على كتابنا
        </h2>
        <p className="text-base sm:text-lg mb-4 text-white/80 font-light my-4 leading-relaxed">
          فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
          المجتمع.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-10 w-full sm:px-20">
          {authors.map((author, index) => 

             <AuthorCard key={index} author={author} />
          )}
        </div>
      </div>

      <div className="py-10 sm:py-20 px-4 bg-linear-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">
        <div className="absolute pointer-events-none inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]"></div>
        </div>
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-6 ">
            لديك أسئلة؟ دعنا نتحدث!
          </h1>

          <div className="max-w-2xl mx-auto my-3">
            <p className="text-lg mb-4 text-white/80 font-light my-4 leading-relaxed">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
              أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="w-full sm:w-fit bg-black hover:bg-black/80 py-2 sm:py-3 sm:px-5 font-semibold text-base sm:text-lg flex gap-2 items-center justify-center rounded-xl cursor-pointer box-border shadow-xs  leading-5 focus:outline-none hover:-translate-y-1 transition-transform duration-500 ease-in-out">
            <i className="fa-regular fa-envelope" />
            تواصل معنا
          </button>
          <Link to={"/blogs"}>
          <button className="w-full sm:w-fit border py-2 sm:py-3 sm:px-5 font-semibold text-base sm:text-lg rounded-xl hover:bg-white hover:text-black hover:border-white cursor-pointer box-border shadow transition-colors duration-300 ease-in-out">
            تصفح المقالات
          </button></Link>
        </div>
      </div>
    </>
  );
}
