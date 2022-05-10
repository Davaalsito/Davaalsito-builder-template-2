import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Product = () => {
  return (
    <div className="mt-32 ">
      <div className="bg-black h-[45rem] w-full ">
        <div className="flex place-content-center font-serif justify-around">
          <div className="flex flex-colex flex-col ">
            <FontAwesomeIcon
              className="text-orange-600  text-9xl mt-56  "
              icon={faCircle}
            />
            <h1 className=" text-white text-4xl text-center  mt-10">
              Home Locations
            </h1>
            <p className="text-white w-[30ch] mt-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col">
            <FontAwesomeIcon
              className="text-orange-600   text-9xl mt-56  "
              icon={faCircle}
            />

            <h1 className="text-white text-4xl text-center mt-10 ">
              Structure
            </h1>
            <p className="text-white w-[30ch] mt-4 text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col">
            <FontAwesomeIcon
              className="text-orange-600   text-9xl mt-56 "
              icon={faCircle}
            />
            <h1 className="text-white text-4xl text-center mt-10">
              Move In Now
            </h1>
            <p className="text-white w-[30ch] mt-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col">
            <FontAwesomeIcon
              className="text-orange-600   text-9xl mt-56 "
              icon={faCircle}
            />
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
