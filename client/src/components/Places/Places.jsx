import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/w1.jpg";
import Img2 from "../../assets/places/w2.jpg";
import Img3 from "../../assets/places/w3.jpg";
import Img4 from "../../assets/places/w4.jpg";
import Img5 from "../../assets/places/w5.jpg";
import Img6 from "../../assets/places/w6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Heavy Steel Fabrication",
    location: "Sri Lanka",
    description: "We are capable in supplying and installing of all kind of equipment and accessories (Radial Gates, , sluice gates and stop logs, trash racks & screens, pre-fabrication of steel buildings and bridges, Crane girders, Pressure vessels).",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Construction of Process Plants",
    location: "Sri Lanka | India",
    description:
      "We offer complete solutions for Process Plant and Internals. We undertake turnkey construction of process plants for refineries, petrochemicals, fertilizers, chemical plants, gas-gathering stations.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Power Plant",
    location: "Canada",
    description:
      "We can be a solutions provider in the fields of minerals, metals and bulk material handling for large industrial, steel, aluminum, copper and zinc complexes. It offers integrated.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Special Fabrication",
    location: "Sri Lanka",
    description: "Our special fabrication unit serves the critical needs of core sectors such as energy, petrochemicals, fertilizer, gasification, sub sea and land transportation. Our product range includes complex coal gasification internals.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Plantation Industry",
    location: "Sri Lanka | USA",
    description:
      "We addresses critical needs in key sectors- innovating, manufacturing, repairing and maintaining of mechanical machinery and plants for all kinds of production processes especially in Tea.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Heavy Engineering and Oil Refineries",
    location: "Sri Lanka",
    description:
      "Storage tanks and Silos are manufactured at our dedicated manufacturing facility handling Large variety of critical internals for advanced refining processes are manufactured using exotic materials.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10"id="Bproject">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/80 py-2 pl-2 text-3xl font-bold font-serif md:text-4xl">
            Our Best Projects
          </h1>
          <p className=" my-8  md:text-[20px] text-xl">
          We always provide top industrial products & services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-md">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
