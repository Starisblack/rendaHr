import React from "react";

const Intro = () => {
  return (
    <div>
      <div className="flex max-[769px]:flex-wrap gap-8 py-10  md:py-24">
        <div className="basis-full md:basis-3/12">
          <h2 className="font-nunito text-[30px]  md:text-[50px] text-center leading-normal md:leading-[55px]">
            The new age of HR’s Revolution.
          </h2>
        </div>
        <div className="basis-full md:basis-9/12 flex flex-col justify-between">
          <p className="font-nunito text-[14px] md:text-[20px]  text-muted">
            The world is transforming, and so is the workplace. HR trends such
            as hybrid working, remote employees, agile organisations, and
            ever-evolving expectations are challenging the way HR professionals
            work.
          </p>
          <p className="font-nunito text-[14px] mt-5 md:mt-0   md:text-[20px] text-muted">
            Can they keep up? We believe so - but only with a new breed of HR
            Technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
