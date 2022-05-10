import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <div className="flex">
        <div className="bg-gray-100 h-[40rem] w-full">
          <div className="ml-[0rem] mt-52">
            <div className="flex justify-evenly  ">
              <Image
                src="/photos/box test image.png"
                alt=""
                width={158}
                height={128}
              />
              <div className="font-serif ml-18"></div>
              <div className="leading-10">
                <p className="text-4xl underline decoration-orange-600 underline-offset-8 decoration-4 ">
                  Contact
                </p>
                <ul className="mt-10 ">
                  <li>87 City Walls Rd, Clophill, Mk45 1eu</li>
                  <li>
                    <b className="uppercase">Email: </b>email@studioblue.com
                  </li>
                  <li>
                    <b className="uppercase">Fax: </b> +88(0) 202 0000 001
                  </li>
                </ul>
              </div>
              <div className="leading-10">
                <p className="text-4xl underline decoration-orange-600 underline-offset-8 decoration-4 ml-10">
                  Special Links
                </p>

                <ul className="mt-10 ml-10">
                  <li>
                    <button>
                      <FontAwesomeIcon icon={faChevronRight} /> Contact Us
                    </button>
                  </li>
                  <li>
                    <button>
                      <FontAwesomeIcon icon={faChevronRight} /> FAQ
                    </button>
                  </li>
                  <li>
                    <button>
                      <FontAwesomeIcon icon={faChevronRight} /> Abaut Us
                    </button>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-4xl underline decoration-orange-600 underline-offset-8 decoration-4 ml-10">
                  Newsletter
                </p>
                <ul className="mt-12 ml-10">
                  <li className=" w-[27ch]">
                    Subscribe to our newsletter & get all the latest news.
                  </li>

                  <li className=" mt-5 leading-10 underline decoration-black underline-offset-[9px] decoration-2">
                    Subscribeㅤㅤㅤㅤㅤㅤㅤㅤㅤ
                    <b>
                      <FontAwesomeIcon
                        className="text-orange-600"
                        icon={faChevronRight}
                      />
                    </b>
                  </li>
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
