import { useLocation } from "react-router-dom";
import ServiceComp_1 from "../components/Blogs/ServiceCom_1";


const BlogsDetails_1 = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const { image, date, title, description, author } = location.state;

  return (
    <div className=" pt-40">
      <div className="h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container ">
        <p className="text-slate-600 text-lg py-3">
          {" "}
          Developed by {author} on {date}
        </p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>

      <ServiceComp_1 />
 










      {/* All Blogs Section */}
      {/* <BlogsComp /> */}
    </div>
  );
};

export default BlogsDetails_1;
