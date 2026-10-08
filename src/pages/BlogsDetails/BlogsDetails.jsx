import posts from "../../posts.json";
import { Link, useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import RelatedBlogs from "../../component/RelatedBlog/RelatedBlogs";

export default function BlogsDetails() {
  const { slug } = useParams();

  const postsArray = posts?.posts || [];

  const post = postsArray.find((post) => post.slug === slug);

  const {
    title,
    excerpt,
    content,
    category,
    author,
    image,
    date,
    readTime,
    tags,
  } = post;

  const { name, avatar, role } = author;


  const formatDate = (date) => {
    return new Intl.DateTimeFormat("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  };

  function Article({ content }) {
    return (
      <div className="prose prose-invert max-w-none text-white/80 leading-relaxed">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    );
  }
  function splitMarkdown(content) {
    if (!content) return [];

    return content
      .split(/(?=^## )/m)
      .map((section) => section.trim())
      .filter(Boolean);
  }
  const sections = splitMarkdown(content);

  const articleSections = sections.slice(1).map((section, index) => ({
    id: `section-${index}`,
    title: section.match(/^##\s+(.+)$/m)?.[1],
    content: section,
  }));

  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80 pointer-events-none" />
        <div className="text-xs sm:text-base text-white/50 bg-black/30 m-4 sm:m-6 md:m-10 w-fit px-3 sm:px-5 py-2 rounded-full flex items-center gap-2">
          <Link className="hover:text-white/90" to={"/"}>
            <i className="fa-solid fa-house" />
          </Link>
          <i className="fa-solid fa-angle-left" />
          <Link className="hover:text-white/90" to={`/blogs`}>
            المدونة
          </Link>
          <i className="fa-solid fa-angle-left" />
          <p className="text-orange">{category}</p>
        </div>
        <div className="relative z-10 mx-4 sm:mx-8 md:mx-28 my-3 sm:my-6 md:my-12">
          <div className="flex flex-wrap gap-2 sm:gap-4 items-center mb-2">
            <div className="linearBG font-semibold p-2 rounded-2xl ">
              {category}
            </div>
            <div className="flex items-center gap-2 text-white/50">
              <i className="fa-regular fa-calendar" />
              {formatDate(date)}
            </div>
            <div className="flex items-center gap-2 text-white/50">
              <i className="fa-regular fa-clock" />
              {readTime}
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl">
            {title}
          </h1>
          <div className="flex gap-2 p-4 border border-gray-500/50 bg-white/5 w-fit rounded-2xl">
            <img
              src={avatar}
              className="rounded-full h-14 w-14 border-3 border-orange/50"
              alt={name}
            />
            <div>
              <p className="font-bold">{name}</p>
              <p className=" text-white/50 text-sm">{role}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-12 mx-auto border-y border-white/10">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
          <div className="lg:order-1">
            <div className="p-6 bg-linear-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
              <p className="text-lg text-neutral-200 leading-relaxed italic">
                "{excerpt}"
              </p>
            </div>
            <div>
              <div className="text-lg mb-6 text-neutral-300 leading-relaxed">
                <Article content={sections[0]} />
              </div>
              {articleSections.map((section) => (
                <div key={section.id} className="mb-12">
                  <ReactMarkdown
                    components={{
                      h2: ({ children }) => (
                        <h2
                          id={section.id}
                          className="flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 scroll-mt-22"
                        >
                          <span className="flex items-center justify-center p-1 rounded-2xl border border-orange-500/30 bg-orange-500/10 text-orange-500">
                            <i className="fa-solid fa-camera" />
                          </span>

                          {children}
                        </h2>
                      ),
                      p: ({ children }) => (
                        <p
                          id={section.id}
                          className="text-base sm:text-lg text-neutral-300 leading-relaxed"
                        >
                          {children}
                        </p>
                      ),
                    }}
                  >
                    {section.content}
                  </ReactMarkdown>
                </div>
              ))}
            </div>
            <div className="bg-white/5 border border-gray-500/50 rounded-2xl p-4 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center p-2 text-3xl rounded-2xl border border-orange-500/30 bg-orange-500/10 text-orange-500">
                  <i className="fa-solid fa-tags" />
                </div>
                <p className="font-bold text-xl">الوسوم</p>
              </div>
              <div className="flex gap-2 sm:gap-3 flex-wrap *:border *:border-gray-500/50 *:text-white/50 ">
                <div className="cursor-pointer bg-gray-500/20 w-fit py-1 px-2 hover:border-orange/80 hover:text-orange transition-all duration-300 rounded-2xl">
                  #{tags[0]}
                </div>
                <div className="cursor-pointer bg-gray-500/20 w-fit py-1 px-2 hover:border-orange/80 hover:text-orange transition-all duration-300 rounded-2xl">
                  #{tags[1]}
                </div>
                <div className="cursor-pointer bg-gray-500/20 w-fit py-1 px-2 hover:border-orange/80 hover:text-orange transition-all duration-300 rounded-2xl">
                  #{tags[2]}
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-gray-500/50 rounded-2xl p-4 mb-6 flex justify-between items-center flex-col sm:flex-row gap-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center p-2 text-3xl rounded-2xl border border-orange-500/30 bg-orange-500/10 text-orange-500">
                  <i className="fa-solid fa-share-nodes" />
                </div>
                <p className="font-bold text-xl">شارك المقال</p>
              </div>
              <div className="flex gap-3 *:border *:border-gray-500/50 *:text-white/50 *:h-fit text-lg">
                <div className="cursor-pointer bg-gray-500/20 w-fit py-1 px-2 hover:bg-blue-400 hover:text-white transition-all duration-300 rounded-xl">
                  <i className="fa-brands fa-x-twitter" />
                </div>
                <div className="cursor-pointer bg-gray-500/20 w-fit py-1 px-2 hover:bg-blue-600 hover:text-white transition-all duration-300 rounded-xl">
                  <i className="fa-brands fa-linkedin-in" />
                </div>
                <div className="cursor-pointer bg-gray-500/20 w-fit py-1 px-2 hover:bg-green-400 hover:text-white transition-all duration-300 rounded-xl">
                  <i className="fa-brands fa-whatsapp" />
                </div>
                <div className="cursor-pointer bg-gray-500/20 w-fit py-1 px-2 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-xl">
                  <i className="fa-solid fa-link" />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-500/50 bg-white/5 rounded-2xl">
              <img
                src={avatar}
                className="rounded-xl h-24 w-24 border-3 border-orange-600/50"
                alt={name}
              />
              <div className="flex flex-col gap-1">
                <p className="text-orange-600">كاتب المقال</p>
                <p className="font-bold text-xl">{name}</p>
                <p className=" text-white/40 text-sm">{role}</p>
                <p className="text-white/70 mt-2">
                  مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                  الفوتوغرافي.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6 flex-col self-start lg:sticky lg:top-28 lg:order-2 order-first">
            <div className="flex flex-col gap-5 p-6 border border-gray-500/50 bg-white/5 rounded-2xl">
              <div className="flex gap-3 items-center">
                <span className="bg-orange/5 text-orange border border-orange/30 rounded flex items-center justify-center text-xl p-1.5">
                  <i className="fa-solid fa-list" />
                </span>
                <h2 className="font-semibold">محتويات المقال</h2>
              </div>
              {articleSections.map((section, index) => (
                <div className="w-full group">
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-neutral-400 flex items-center gap-2 text-sm group-hover:text-orange-500 group-hover:bg-orange/5 p-3 rounded-2xl transition-colors"
                  >
                    <span className="text-sm font-bold group-hover:text-orange-500 group-hover:bg-orange/5 bg-white/5 flex items-center justify-center px-2.5 py-1 rounded">
                      {String(index + 1)}
                    </span>
                    <span>{section.title}</span>
                  </a>
                </div>
              ))}
            </div>
            <div className="flex gap-4 p-6 border border-gray-500/50 bg-white/5 rounded-2xl">
              <div className="bg-black flex flex-col w-1/2 rounded-2xl items-center justify-center text-center py-3 gap-1">
                <i className="fa-regular fa-clock text-xl text-orange mb-1" />
                <h2 className="font-bold text-lg">{readTime}</h2>
                <p className=" text-white/40 text-sm">وقت القراءة</p>
              </div>
              <div className="bg-black flex flex-col w-1/2 rounded-2xl items-center justify-center text-center py-3 gap-1">
                <i className="fa-regular fa-calendar text-xl text-orange mb-1" />
                <h2 className="font-bold text-lg">{formatDate(date)}</h2>
                <p className=" text-white/40 text-sm">تاريخ النشر</p>
              </div>
              <div></div>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl border border-orange-500/30 bg-orange-500/10 items-center p-6">
              <div className="flex items-center justify-center p-2 text-3xl rounded-2xl border border-orange-500/30 bg-orange-500/10 text-orange-500 w-fit">
                <i className="fa-solid fa-envelope" />
              </div>
              <h2 className="font-bold text-lg">لا تفوّت جديدنا</h2>
              <p className="text-white/70">اشترك للحصول على أحدث المقالات</p>
              <Link
                to={"/blogs"}
                className="linearBG w-full text-center p-2 rounded-xl font-bold mt-3"
              >
                تصفح المزيد
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <RelatedBlogs card={post} category={category} currentSlug={slug} />
       </div>
    </>
  );
}
