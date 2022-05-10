import Image from "next/image";
export const Description = () => {
  return (
    <div className="flex ">
      <div className="bottom-0 ml-[8rem]">
        <div className=" mt-[26rem]">
          <h1 className="text-orange-600 text-2xl  "> NEW ADVENTURE</h1>
          <h1 className="text-6xl font-serif font-bold mt-4 ">
            The{" "}
            <b className="underline decoration-orange-600 underline-offset-4 decoration-4">
              Creative
            </b>{" "}
            Eye
          </h1>
          <p className=" w-[70ch] mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolor
            minima soluta deleniti odio quis eius voluptas dolore! Odio placeat
            ab totam et quaerat blanditiis laudantium aperiam accusantium, saepe
            culpa!
          </p>
          <button className="border-2 border-gray-300 font-serif w-28 h-14 mt-8">
            <h1 className="justify-center">Explore</h1>
          </button>
        </div>
      </div>
      <div className="mt-72 ml-80">
        <Image width={600} height={600} src="/photos/house box.jpg" />
      </div>
    </div>
  );
};
