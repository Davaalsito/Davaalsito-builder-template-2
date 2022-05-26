import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Menu = () => {
  return (
    <div className="absolute z-30 right-0 ">
      <div className="flex mt-24 leading-9">
        <ul className="flex-col bg-white  text-right flex  rounded-bl-[70px] drop-shadow-2xl w-44 h-64 ">
          <div className="font-semibold p-4 ">
            <button className="text-3xl text-right text-orangee">
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <li className="text-orangee">
              <button>HOME</button>
            </li>

            <li>
              <button>PAGES</button>
            </li>
            <li>
              <button>PORTFOLIO</button>
            </li>
            <li>
              <button>BLOG</button>
            </li>
            <li>
              <button>CONTACT US</button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
//  id= nombre sin almoadilla
