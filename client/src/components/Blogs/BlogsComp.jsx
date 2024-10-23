
import { Link } from "react-router-dom";
import Img1 from "../../assets/places/w112.jpg";



const BlogsComp = () => {
  return (
    <>
      <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white py-10 sm:pt-2 md:pt-4 lg:pt-4 xl:pt-4 2xl:pt-4">

        <section data-aos="" className="container ">



          <h1 className=" my-8 border-l-8 border-primary/80 py-2 pl-2 text-3xl md:text-5xl  font-bold font-mono">
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

                <p className="pt- line-clamp-2 text-gray-600 font-mono text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda alias facere maxime optio! Hic fugiat maiores aliquam natus molestias eaque iure? Pariatur, sapiente dicta vel autem consequuntur consectetur eum!
                </p>
              </div>

              <div>
                <Link to={"/finance"}>
                <button className="bg-blue-300 mt-4 px-5 py-3 rounded-md text-black font-semibold hover:bg-blue-700 hover:text-white sm:ml-10 md:ml-32 lg:ml-40 xl:ml-52 2xl:ml-64 ml-40 items-center">
  Read More!
</button>

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

                <p className="pt- line-clamp-2 text-gray-600 font-mono text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda alias facere maxime optio! Hic fugiat maiores aliquam natus molestias eaque iure? Pariatur, sapiente dicta vel autem consequuntur consectetur eum!
                </p>        
              </div>

              <div>
                <Link to={"/support"}>
                <button className="bg-blue-300 mt-4 px-5 py-3 rounded-md text-black font-semibold hover:bg-blue-700 hover:text-white sm:ml-10 md:ml-32 lg:ml-40 ml-40 xl:ml-52 2xl:ml-64 items-center">
  Read More!
</button>

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
                <p className="pt- line-clamp-2 text-gray-600 font-mono text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda alias facere maxime optio! Hic fugiat maiores aliquam natus molestias eaque iure? Pariatur, sapiente dicta vel autem consequuntur consectetur eum!
                </p> 
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
                <h1 className="line-clamp-1 font-bold text-xl">Project Management</h1>
                <p className="pt- line-clamp-2 text-gray-600 font-mono text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda alias facere maxime optio! Hic fugiat maiores aliquam natus molestias eaque iure? Pariatur, sapiente dicta vel autem consequuntur consectetur eum!
                </p>
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
                <h1 className="line-clamp-1 font-bold text-xl">Engineering Design, Drafting, and Estimating in Australia</h1>

                <p className="pt- line-clamp-2 text-gray-600 font-mono text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda alias facere maxime optio! Hic fugiat maiores aliquam natus molestias eaque iure? Pariatur, sapiente dicta vel autem consequuntur consectetur eum!
                </p>
              </div>
              <div>
                <Link to={"/support"}>
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
