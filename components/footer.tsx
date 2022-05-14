import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <div className="flex">
        <div className="bg-gray-100 h-[50rem] w-full">
          <div className="mt-28 lg:mt-52">
            <div className="lg:flex lg:justify-evenly  text-center lg:text-left  ">
              <div className="leading-10 ">
                <p className="text-4xl font-serif underline decoration-orange-600  underline-offset-8 decoration-4">
                  Contact
                </p>
                <ul className="mt-16  ">
                  <li>87 City Walls Rd, Clophill, Mk45 1eu</li>
                  <li>
                    <b className="uppercase">Email: </b>email@studioblue.com
                  </li>
                  <li>
                    <b className="uppercase">Fax: </b> +88(0) 202 0000 001
                  </li>
                </ul>
              </div>
              <div className="mt-16 ml-[0.6rem]  w-[23.1rem] h-[23.1rem lg:w-[37.5rem] lg:h-[28.1rem] lg:ml-20 ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11973.085562819117!2d2.1624647435913054!3d41.389912236208836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f996716c83%3A0x16f6112475e15883!2sCatedral%20de%20Barcelona!5e0!3m2!1ses!2ses!4v1652201718255!5m2!1ses!2ses"
                  width=" 370 lg:600"
                  height=" 370 lg:450"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-96 w-full ">
        <h1 className=" text-gray-300 font-serif flex justify-center ">
          Studio arch 2021.All rights Reserved.
        </h1>
      </div>
    </footer>
  );
};
