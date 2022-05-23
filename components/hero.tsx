import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pipeline } from "stream";
import Image from "next/image";
export const Hero = () => {
  return (
    <div className="relative w-full ">
      <Image
        width={1920}
        height={875}
        src="/photos/bathroom.jpg"
        className="z-0 absolute top-0  left-0"
      />
      <div className="bg-black opacity-50 absolute top-0 left-0 z-10 w-full lg:h-[99%] sm:h-[98%] h-[97%]"></div>
      <div className="flex  items-center justify-between  absolute top-0 left-0 w-full z-20 ">
        <div className="text-white font-serif z-20 mt-16 ml-6  lg:mt-[12rem] lg:ml-[8rem] lg:w-[110ch]">
          <h1 className=" text-4xl w-[13ch] sm:text-8xl  lg:text-9xl">
            The Simple Way Of Architecture
          </h1>
        </div>
        <div className="hidden lg:flex  lg:font-serif lg: absolute lg:z-20 lg:rotate-90 lg:right-0 lg:top-72 lg:w-[60ch] ">
          <h1 className="text-white text-xl   ">
            Interior Desing From the
            <p className="text-orangee font-serif"> India.</p>
          </h1>
          <div className=" border-white border-t-4 m"></div>
        </div>
      </div>
    </div>
  );
};
