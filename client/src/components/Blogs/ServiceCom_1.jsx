
import Img1 from "../../assets/places/w112.jpg";
import Img2 from "../../assets/places/w21.jpg";
import Img3 from "../../assets/places/w22.jpg";
import Img4 from "../../assets/places/w33.jpg";
import ServiceCard_1 from "./ServiceCard_1";


const FinanceData = [
  {
    id: 1,
    image: Img1,
    title: "My Service -1",
    description:
      "In today’s fast-paced business environment, managing finances efficiently is crucial for success. Our Finance and Accounting BPO services provide businesses with the expertise and technology to streamline operations, enhance accuracy, and ensure compliance. Whether you're a small start-up or a large corporation, we tailor our solutions to meet your specific needs.",
    author: "Walkers",
    date: "April 22, 2024",
  },
  {
    id: 2,
    image: Img2,
    title: "IT Support & Data Entry ",
    description:
      "In the current world where everything is moving so fast especially with the introduction of technology it is important for a business to have good IT support and proper handling of data. The Business Process Outsourcing services such as IT Support and Data Entry are designed to make your business more efficient and effective and enable you to accomplish your organizational objectives.",
      author: "Zmedia Digital Solutions",

    date: "June 22, 2024",
  },
  {
    id: 3,
    image: Img3,
    title: "Zmedia Digital Solutions",
    description:
      "We are committed to decreasing our carbon footprint and limiting the environmental impact of our building activities. We employ ecologically friendly building materials, recycle construction debris, and use less water and energy wherever possible. We also urge our stats to follow such eco-friendly methods whenever possible.",
    author: "Walkers",
    date: "May 22, 2024",
  },
  {
    id: 4,
    image: Img4,
    title: "Project ",
    description:
      "We are committed to decreasing our carbon footprint and limiting the environmental impact of our building activities. We employ ecologically friendly building materials, recycle construction debris, and use less water and energy wherever possible. We also urge our stats to follow such eco-friendly methods whenever possible.",
    author: "Walkers",
    date: "May 22, 2024",
  },
];

const AahaaData = [
  {
    id: 1,
    image: Img1,
    title: "Aahaa-1",
    description:
      "In today’s fast-paced business environment, managing finances efficiently is crucial for success. Our Finance and Accounting BPO services provide businesses with the expertise and technology to streamline operations, enhance accuracy, and ensure compliance. Whether you're a small start-up or a large corporation, we tailor our solutions to meet your specific needs.",
    author: "Walkers",
    date: "April 22, 2024",
  },
  {
    id: 2,
    image: Img2,
    title: "IT Support & Data Entry ",
    description:
      "In the current world where everything is moving so fast especially with the introduction of technology it is important for a business to have good IT support and proper handling of data. The Business Process Outsourcing services such as IT Support and Data Entry are designed to make your business more efficient and effective and enable you to accomplish your organizational objectives.",
      author: "Zmedia Digital Solutions",

    date: "June 22, 2024",
  },
  {
    id: 3,
    image: Img3,
    title: "Zmedia Digital Solutions",
    description:
      "We are committed to decreasing our carbon footprint and limiting the environmental impact of our building activities. We employ ecologically friendly building materials, recycle construction debris, and use less water and energy wherever possible. We also urge our stats to follow such eco-friendly methods whenever possible.",
    author: "Walkers",
    date: "May 22, 2024",
  },
  {
    id: 4,
    image: Img4,
    title: "Project ",
    description:
      "We are committed to decreasing our carbon footprint and limiting the environmental impact of our building activities. We employ ecologically friendly building materials, recycle construction debris, and use less water and energy wherever possible. We also urge our stats to follow such eco-friendly methods whenever possible.",
    author: "Walkers",
    date: "May 22, 2024",
  },
];


const ServiceComp_1 = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10 md:pt-[420px] pt-[150px]">
        <section data-aos="" className="container ">


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {FinanceData.map((item) => (
              <ServiceCard_1 key={item.id} {...item} />
            ))}

{AahaaData.map((item) => (
              <ServiceCard_1 key={item.id} {...item} />
            ))}

            
          
          </div>


          
        </section>
      </div>
    </>
  );
};

export default ServiceComp_1;
