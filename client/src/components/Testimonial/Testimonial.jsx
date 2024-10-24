import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Mr. Kamal Prasanna",
    text: "Walkers Sons & Company Engineers (Pvt) Ltd is a subsidiary of Walkers Group, a major provider of technology, engineering, construction and manufacturing services conglomerate with global operations.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Mrs. Layani Silva",
    text: "Walkers Sons & Company Engineers (Pvt) Ltd is a subsidiary of Walkers Group, a major provider of technology, engineering, construction and manufacturing services conglomerate with global operations.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 4,
    name: "Mr. Janaka Rathnayake",
    text: "Walkers Sons & Company Engineers (Pvt) Ltd is a subsidiary of Walkers Group, a major provider of technology, engineering, construction and manufacturing services conglomerate with global operations.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-2">
        <div className="container">
          {/* Header section */}
          <div className=" mb-4 max-w-[1400px] mx-auto">
            <p className="my-4 container border-l-8 border-primary/80 py-4 pl-8 text-4xl md:text-5xl font-semibold font-mono">
              <b>Our Values</b>
            </p>
            
            <p className="text-lg text-justify font-serif pt-2 text-gray-700">
              {" "}
              Walkers Sons & Company Engineers (Pvt) Ltd is a subsidiary of Walkers Group, a major provider of technology, engineering, construction and manufacturing services conglomerate with global operations.Walkers Sons & Company Engineers (Pvt) Ltd is a subsidiary of Walkers Group, a major provider of technology, engineering, construction and manufacturing services conglomerate with global operations.
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos=""
            data-aos-duration="500"
            className="grid grid-cols-1 max-w-[1400px] mx-auto gap-8 p-2 mb-14"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-4">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-2xl p-8 mx-4 rounded-2xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <h1 className="text-2xl font-semibold pb-8">{name}</h1>
                      <p className="text-gray-600 text-md text-justify">{text}</p>
                      <p className="text-black/40 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
