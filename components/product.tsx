import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faHouseFlag } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const products = [
  {
    icon: faHouseFlag,
    title: "Home Locations",
    description: "There are many variation of passages of Lorem Ipsum.",
  },
  {
    icon: faLayerGroup,
    title: "Structure",
    description: "There are many variation of passages of Lorem Ipsum.",
  },
  {
    icon: faDoorClosed,
    title: "Move in Now",
    description: "There are many variation of passages of Lorem Ipsum.",
  },
  {
    icon: faShieldHalved,
    title: "Home Security",
    description: "There are many variation of passages of Lorem Ipsum.",
  },
];

export const Product = () => {
  return (
    <div className="flex items-center justify-around bg-black w-full py-40 ">
      {products.map((product, index) => {
        return (
          <div key={index} className="flex flex-col items-center  ">
            <div className="flex items-center justify-center  bg-orangee rounded-full w-20 h-20 lg:h-28 lg:w-28">
              <FontAwesomeIcon
                className="text-4xl text-white"
                icon={product.icon}
              />
            </div>
            <div className="h-20 flex items-center justify-center text-center  text-xl lg:text-3xl font-serif">
              <h1 className=" text-white ">{product.title}</h1>
            </div>
            <div className="h-0 flex items-start  text-center justify-center w-[32ch] hidden lg:block">
              <span className="text-gray-300 ">{product.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
