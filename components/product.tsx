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
        <div className="flex  font-serif lg:justify-around ">
          <div className="flex flex-wrap lg:flex-col ">
            <div className=" bg-orange-600 h-24 w-24 lg:h-32 lg:w-32 rounded-full ml-16 lg:ml-20  mt-20 lg:mt-56">
              <div className="text-white text-4xl mt-7 ml-7 lg:mt-11 lg:ml-11">
                <FontAwesomeIcon icon={faHouseFlag} />
              </div>
            </div>
            <h1 className=" text-white text-xl lg:text-4xl  ml-0 lg:ml-0 text-center mt-10 lg:mt-10">
              Home Locations
            </h1>
            <p className="text-white w-[30ch] hidden lg:block mt-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col    ">
            <div className=" bg-orange-600 h-24 w-24 lg:h-32 lg:w-32 rounded-full ml-20 mt-20 lg:mt-56">
              <div className="text-white text-4xl mt-8 ml-8 lg:mt-11 lg:ml-11">
                <FontAwesomeIcon icon={faLayerGroup} />
              </div>
            </div>

            <h1 className="text-white text-xl lg:text-4xl   ml-20 lg:ml-0 text-center mt-10 ">
              Structure
            </h1>
            <p className="text-white w-[30ch] hidden lg:block mt-4 text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col">
            <div className=" bg-orange-600 h-24 w-24 lg:h-32 lg:w-32 rounded-full  mt-80  lg:ml-20  lg:mt-56">
              <div className="text-white text-4xl mt-8 ml-8 lg:mt-11 lg:ml-11">
                <FontAwesomeIcon icon={faDoorClosed} />
              </div>
            </div>
            <h1 className="text-white text-xl lg:text-4xl text-center mt-10">
              Move In Now
            </h1>
            <p className="text-white w-[30ch] hidden lg:block  mt-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col">
            <div className=" bg-orange-600 h-24 w-24 lg:h-32 lg:w-32 rounded-full ml-20 mt-56">
              <div className="text-white text-4xl mt-8 ml-8 lg:mt-11 lg:ml-11">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
            </div>
            <h1 className="text-white text-xl lg:text-4xl text-center mt-10">
              Home Security
            </h1>
            <p className="text-white w-[30ch] hidden  lg:block mt-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
