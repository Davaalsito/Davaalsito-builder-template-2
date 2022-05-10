import Image from "next/image";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="bg-gray-200 h-[40rem] w-full">
          <div className="ml-[8rem] mt-">
            <Image
              src="/photos/box test image.png"
              alt=""
              width={128}
              height={128}
            />
          </div>
        </div>
        <div className="bg-black h-16 w-full">
          <h1 className=" text-gray-300 font-serif flex justify-center ">
            Studio arch 2021.All rights Reserved.
          </h1>
        </div>
      </footer>
    </div>
  );
};
