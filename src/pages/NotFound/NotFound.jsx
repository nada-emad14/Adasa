import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="mx-auto text-center min-h-screen my-auto py-6 sm:py-12 px-6 homeContainer">
      <h1 className="text-[140px] md:text-[180px] font-black text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-yellow-500 to-orange-500 leading-none select-none">
        404
      </h1>
      <div className="w-fit mx-auto relative my-4 sm:my-12">
        <div className="w-6 h-6 bg-orange rounded rotate-15 animate-bounce absolute -top-3 -right-3" />

        <span className="flex items-center justify-center w-26 h-26 text-5xl rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 ">
          <i className="fa-regular fa-face-frown" />
        </span>
        <div className="absolute -bottom-1 -left-3 animate-pulse bg-[#f1b300] w-4 h-4 rounded-full" />
      </div>
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold my-2 sm:mt-4 sm:mb-3 leading-relaxed wrap-break-word group-hover:text-orange-500 transition-colors duration-300">
        عفواً! الصفحة غير موجودة
      </h3>
      <div className="w-full max-w-xl mx-auto my-3 px-2">
        <p className="text-base sm:text-lg md:text-xl text-white/60 font-light my-4 leading-relaxed">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
          الصحيح.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full sm:w-fit sm:mx-auto pb-4 sm:pb-8 sm:px-8 border-b border-gray-500/50">
        <Link
          to={"/"}
          type="button"
          className="cursor-pointer btn rounded-full text-base sm:text-lg px-6 py-3 gap-3 linearBG text-white font-medium group w-full sm:w-auto"
        >
          <i className="fa-solid fa-house ml-2" />
          الذهاب للرئيسية
        </Link>
        <Link
          to={"/blogs"}
          type="button"
          className="cursor-pointer btn border border-gray-500/50 text-white rounded-full text-base sm:text-lg px-6 py-3 btn-linear w-full sm:w-auto"
        >
          <i className="fa-solid fa-newspaper ml-2" />
          تصفح المقالات
        </Link>
      </div>
      <div className="my-6 w-fit mx-auto flex flex-col gap-2">
        <p className="text-sm text-neutral-500">قد تجد هذه مفيدة:</p>
        <div className="flex gap-2 items-center w-fit flex-wrap">
          <Link className="text-orange-500 hover:underline text-sm sm:text-base">المدونة</Link>
          <i className="fa-solid fa-circle text-[6px] text-orange-500" />
          <Link className="text-orange-500 hover:underline text-sm sm:text-base">من نحن</Link>
          <i className="fa-solid fa-circle text-[6px] text-orange-500" />
          <Link className="text-orange-500 hover:underline text-sm sm:text-base">الخصوصية</Link>
        </div>
      </div>
    </div>
  );
}
