import BlogsComp from "../components/Blogs/BlogsComp";
import NatureVid1 from "../assets/video/bpo.mp4";
import NatureVid2 from "../assets/video/bpo.mp4";
import NatureVid3 from "../assets/video/bpo.mp4";

const About = () => {
  return (
    <>
      <div className=" pt-[100px] md:pt-44">

  

        <div className=" ">
          <h1 className=" my-4 container border-l-8 border-primary/80 py-4 pl-8 text-4xl md:text-5xl font-semibold font-mono">
            About Us
          </h1>
          <p className=" font-regular container text-justify pt-4 text-lg">
          Walkers Engineers is a division of Walkers Group a major provider of technology, engineering, construction and manufacturing services conglomerate with global operations. Walkers Engineers addresses critical needs in key sectors- innovating, manufacturing, repairing and maintaining of mechanical machinery and plants for all kinds of production processes especially in tea, coffee, rubber, shipping, etc. – for customers around the globe.


          </p>
          <br />
          <p className="container font-regular text-justify pb-[30px] text-lg">
          With over 17 decades of a strong, customer focused approach and a continuous quest for world-class quality, we have unmatched expertise across Technology, Engineering, and Manufacturing.
          </p>

          
        </div>
        <div className="pt-2">
        <div className="h-[60vh] relative ">
          <video
            autoPlay
            loop
            muted
            
            className="absolute right-0 top-0 h-[600px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid3} type="video/mp4" />
          </video>
          
        </div>
        
        </div>

        <div className="pt-20 ">
          <h1 className=" my-4 container border-l-8 border-primary/80 py-8 pl-8 text-4xl md:text-5xl font-semibold font-mono">
            Vision
          </h1>

          
          <p className="container font-regular text-justify pb-[30px] text-lg ">
          To be a leading, committed and entrepreneurial team in manufacturing of process plant internals and heavy steel fabrication works attaining customer satisfaction and trust and thereby to enhance shareholder value.
          </p>
          


          <br />
          
        </div>
        <div className="pt-2">
        <div className="h-[60vh] relative ">
          <video
            autoPlay
            loop
            muted
            
            className="absolute right-0 top-0 h-[600px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid1} type="video/mp4" />
          </video>
          
        </div>
        
        </div>
        <div className="pt-20 ">
          <h1 className=" my-4 container border-l-8 border-primary/80 py-8 pl-8 text-4xl md:text-5xl font-semibold font-mono">
            Mission
          </h1>

          
          <p className="container font-regular text-justify pb-[30px] text-lg ">
          To be a leading, committed and entrepreneurial team in manufacturing of process plant internals and heavy steel fabrication works attaining customer satisfaction and trust and thereby to enhance shareholder value.
          </p>
          


          <br />
          
        </div>
        <div className="pt-2">
        <div className="h-[60vh] relative ">
          <video
            autoPlay
            loop
            muted
            
            className="absolute right-0 top-0 h-[600px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid2} type="video/mp4" />
          </video>
          
        </div>
        
        </div>
        <div className="py-10">
          <h1 className=" my-8 container border-l-8 border-primary/80 py-8 pl-8 text-4xl md:text-5xl font-semibold font-mono">
            Easy Contact With Us
          </h1>
          <p className="container font-regular text-justify pb-[50px] text-lg ">
          We seek to take on challenging assignments and ownership, encouraging diverse, creative and dynamic perspectives to integrate with advanced technologies, unmatched expertise gained through the generations and test of time product quality and trust; assure our culture of nurturing customer focused approach and serving best to our valued customers in an environmentally and socially responsible manner.


          </p>

          <br />
          
          
          <div className="rounded-2xl ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9241.847991485969!2d79.84560589389196!3d6.915454622336403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2594226a0ffbb%3A0xa413c5b33bf575f6!2sKollupitiya%2C%20Colombo!5e1!3m2!1sen!2slk!4v1728632947194!5m2!1sen!2slk" 
              width="100%"
              height="750"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "50px" }}>

              </iframe>
              
            
          </div>
          <div>
              <BlogsComp />
          </div>
          
          
        </div>
        
      </div>
      
      
    </>
  );
};

export default About;
