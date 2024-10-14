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
          <div className="text-center mb-20 max-w-[1200px] mx-auto">
            <p className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Values
            </p>
            <h1 className="text-3xl md:text-5xl font-serif font-bold pt-4">Testimonial</h1>
            <p className="text-lg text-center font-serif pt-8 text-gray-600">
              {" "}
              Walkers Sons & Company Engineers (Pvt) Ltd is a subsidiary of Walkers Group, a major provider of technology, engineering, construction and manufacturing services conglomerate with global operations.
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration=""
            className="grid grid-cols-1 max-w-[1200px] mx-auto gap-4 p-8"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-8">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <h1 className="text-2xl font-bold pb-4">{name}</h1>
                      <p className="text-gray-600 text-md text-justify">{text}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
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
