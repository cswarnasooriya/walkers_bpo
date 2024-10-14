import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
        <h1 className=" my-8 border-l-8 border-primary/80 py-4 pl-8 text-4xl md:text-5xl font-semibold font-mono">
            Location
          </h1>

          <div className="rounded-2xl container ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9241.847991485969!2d79.84560589389196!3d6.915454622336403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2594226a0ffbb%3A0xa413c5b33bf575f6!2sKollupitiya%2C%20Colombo!5e1!3m2!1sen!2slk!4v1728632947194!5m2!1sen!2slk" 
              width="100%"
              height="650"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}>

              </iframe>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
