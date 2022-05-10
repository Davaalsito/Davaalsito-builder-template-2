import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <div className="flex">
        <div className="bg-gray-100 h-[40rem] w-full">
          <div className="ml-[8rem] mt-48">
            <Image
              src="/photos/box test image.png"
              alt=""
              width={128}
              height={128}
            />
            <div className="flex font-serif justify-center ml-20 ">
              <div className="">
                <p className="text-4xl underline decoration-orange-600 underline-offset-8 decoration-4 ">
                  Contact
                </p>
                <ul className="mt-10 ">
                  <li>Text</li>
                  <li>Text</li>
                  <li>Text</li>
                </ul>
              </div>
              <div className="">
                <p className="text-4xl underline decoration-orange-600 underline-offset-8 decoration-4 ml-10">
                  Special Links
                </p>
                <ul className="mt-10 ml-10">
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} /> Text
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} /> Text
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} /> Text
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-4xl underline decoration-orange-600 underline-offset-8 decoration-4 ml-10">
                  Newsletter
                </p>
                <ul className="mt-10 ml-10">
                  <li>Text</li>
                  <li>Text</li>
                  <li>Text</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-16 w-full">
        <h1 className=" text-gray-300 font-serif flex justify-center ">
          Studio arch 2021.All rights Reserved.
        </h1>
      </div>
    </footer>
  );
};
