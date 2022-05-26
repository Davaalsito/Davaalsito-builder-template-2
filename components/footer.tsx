const footer = [
  { title: "About" },
  { title: "Blog" },
  { title: "Jobs" },
  { title: "Press" },
  { title: "Accessibility" },
  { title: "Partners" },
];

export const Footer = () => {
  return (
    <div id="footer" className="bg-black w-full h-56 ">
      <div className="text-center flex justify-center my-14">
        {footer.map((footer) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <button className="">
              <h1 className="text-gray-300 lg:text-2xl sm:text-2xl text-l mx-2 lg:mx-10">
                {footer.title}
              </h1>
            </button>
          );
        })}
      </div>
      <div className="text-gray-300 flex justify-center">
        <h1>© 2022 Workflow, Inc. All rights reserved.</h1>
      </div>
    </div>
  );
};
