import { Link } from "react-router-dom";

const BlogCard = ({ image, date, title, description, author }) => {
  return (
    <>
      <Link
        to={`/blogs/${title}`}
        onClick={() => {
          window.scrollTo(0, 0);
          // window.scroll({
          //   top: 0,
          //   left: 0,
          //   behavior: "smooth",
          // });
        }}
        state={{ image, date, title, description, author }}
      >
        <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white rounded-2xl">
          <div className="overflow-hidden">
            <img
              src={image}
              alt="No image"
              className="mx-auto h-[400px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-lg"
            />
          </div>
          <div className="flex justify-between pt-2 text-slate-600">
            <p>Since {date}</p>
            <p className="line-clamp-1"> {author}</p>
          </div>
          <div className="space-y-2 py-3">
            <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
            <p className="line-clamp-10 text-justify">{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
