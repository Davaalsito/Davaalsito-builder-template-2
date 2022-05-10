import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faHouseFlag } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Product = () => {
  return (
    <div className="mt-32 ">
      <div className="bg-black h-[45rem] w-full ">
        <div className="flex place-content-center font-serif justify-around ">
          <div className="flex flex-col ">
            <div className=" bg-orange-600 h-32 w-32 rounded-full ml-20 mt-56">
              <div className="text-white mt-11 ml-11 text-4xl">
                <FontAwesomeIcon icon={faHouseFlag} />
              </div>
            </div>

            <h1 className=" text-white text-4xl text-center   mt-10">
              Home Locations
            </h1>
            <p className="text-white w-[30ch] mt-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col    ">
            <div className=" bg-orange-600 h-32 w-32 rounded-full ml-20 mt-56">
              <div className="text-white mt-11 ml-11 text-4xl">
                <FontAwesomeIcon icon={faLayerGroup} />
              </div>
            </div>

            <h1 className="text-white text-4xl text-center mt-10 ">
              Structure
            </h1>
            <p className="text-white w-[30ch] mt-4 text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col">
            <div className=" bg-orange-600 h-32 w-32 rounded-full ml-20 mt-56">
              <div className="text-white mt-11 ml-11 text-4xl">
                <FontAwesomeIcon icon={faDoorClosed} />
              </div>
            </div>
            <h1 className="text-white text-4xl text-center mt-10">
              Move In Now
            </h1>
            <p className="text-white w-[30ch] mt-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col">
            <div className=" bg-orange-600 h-32 w-32 rounded-full ml-20 mt-56">
              <div className="text-white mt-11 ml-11 text-4xl">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
            </div>
            <h1 className="text-white text-4xl text-center mt-10">
              Home Security
            </h1>
            <p className="text-white w-[30ch] mt-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
