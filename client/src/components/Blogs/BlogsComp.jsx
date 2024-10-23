
import { Link } from "react-router-dom";
import Img1 from "../../assets/places/w112.jpg";



const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10 md:pt-[420px] pt-[150px]">
        <section data-aos="" className="container ">



          <h1 className=" my-8 border-l-8 border-primary/80 py-2 pl-2 text-3xl md:text-4xl font-bold font-serif">
            Our Best Services
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">

{/* 
Enter date one section finance */}


          <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white rounded-2xl">
              <div className="overflow-hidden">
                <img
                  src={Img1}
                  alt="No image"
                  className="mx-auto h-[400px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-lg"
                />
              </div>
              <div className="space-y-2 py-3">
                <h1 className="line-clamp-1 font-bold text-xl">Finance & Accounting</h1>
              </div>

              <div>
                <Link to={"/finance"}>
                  <button>Read More!</button>
                </Link>
              </div>
        </div>

        <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white rounded-2xl">
              <div className="overflow-hidden">
                <img
                  src={Img1}
                  alt="No image"
                  className="mx-auto h-[400px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-lg"
                />
              </div>
              <div className="space-y-2 py-3">
                <h1 className="line-clamp-1 font-bold text-xl">IT Support & Data Entry </h1>              
              </div>

              <div>
                <Link to={"/support"}>
                  <button>Read More!</button>
                </Link>
              </div>
        </div>

        <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white rounded-2xl">
              <div className="overflow-hidden">
                <img
                  src={Img1}
                  alt="No image"
                  className="mx-auto h-[400px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-lg"
                />
              </div>
              <div className="space-y-2 py-3">
                <h1 className="line-clamp-1 font-bold text-xl">Digital Solutions</h1>             
              </div>

              <div>
                <Link to={"/digital"}>
                  <button>Read More!</button>
                </Link>
              </div>
        </div>

        <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white rounded-2xl">
              <div className="overflow-hidden">
                <img
                  src={Img1}
                  alt="No image"
                  className="mx-auto h-[400px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-lg"
                />
              </div>
              <div className="space-y-2 py-3">
                <h1 className="line-clamp-1 font-bold text-xl">Project Management</h1>
              </div>
              <div>
                <Link to={"/project"}>
                  <button>Read More!</button>
                </Link>
              </div>
        </div>


        <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white rounded-2xl">
              <div className="overflow-hidden">
                <img
                  src={Img1}
                  alt="No image"
                  className="mx-auto h-[400px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-lg"
                />
              </div>
              <div className="space-y-2 py-3">
                <h1 className="line-clamp-1 font-bold text-xl">Engineering Design, Drafting, and Estimating in Australia</h1>
              </div>
              <div>
                <Link to={"/engineering"}>
                  <button>Read More!</button>
                </Link>
              </div>
        </div>


              </div>
                        </section>
                      </div>
                    </>
                  );
};

export default BlogsComp;
