import Image from "next/image";
export const Description = () => {
  return (
    <div className="flex ">
      <div className="mt-20 lg:mt-[26rem] lg:ml-[1rem]">
        <h1 className="text-orange-600 text-xl ml-28  lg:ml-[6rem] lg:text-2xl  ">
          {" "}
          NEW ADVENTURE
        </h1>
        <h1 className="text-2xl ml-24 font-serif font-bold mt-4 lg:ml-[6rem] lg:text-6xl  ">
          The{" "}
          <b className="underline decoration-orange-600 underline-offset-4 decoration-4">
            Creative
          </b>{" "}
          Eye
        </h1>
        <p className=" text-left ml-11 lg:ml-[6rem]  w-[40ch]  mt-8 lg:mx-1 lg:w-[70ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolor
          minima soluta deleniti odio quis eius voluptas dolore! Odio placeat ab
          totam et quaerat blanditiis laudantium aperiam accusantium, saepe
          culpa!
        </p>
        <button className="border-2 border-gray-300 font-serif w-28 h-14 mt-8 ml-11 lg:ml-[6rem]">
          <h1 className="justify-center">Explore</h1>
        </button>
      </div>

      <div className="lg:mt-72 lg:ml-80">
        <Image width={600} height={600} src="/photos/house box.jpg" />
      </div>
    </div>
  );
};
