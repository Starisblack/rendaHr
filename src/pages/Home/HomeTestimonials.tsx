import React, { useState } from "react";
import { styles } from "../../styles";
import { testimonials } from "../../constants/homepage";
import { Sponsors, Arrow } from "../../assets/testimonials";

const HomeTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const next = () => {
    activeIndex === testimonials.testimonial.length - 1
      ? setActiveIndex(0)
      : setActiveIndex(activeIndex + 1);
  };

  const prev = () => {
    activeIndex === 0
      ? setActiveIndex(testimonials.testimonial.length - 1)
      : setActiveIndex(activeIndex - 1);
  };

  return (
    <div
      className={`${styles.padding} flex lg:items-stretch items-center justify-center`}
    >
      <div
        className={`font-mulish w-full bg-white flex lg:flex-row flex-col justify-center items-start gap-0 border-[0.09px] rounded-[20px] md:shadow-customMobile shadow-testimonialMobile`}
      >
        <div className="flex flex-col xl:gap-6 lg:gap-4 gap-2 bg-primary xl:max-w-[530px] lg:max-w-[400px] w-full text-white h-full xl:rounded-tl-[20px] xl:rounded-tr-none xl:rounded-bl-[20px] lg:rounded-tl-xl lg:rounded-tr-none lg:rounded-bl-xl  md:rounded-tl-xl md:rounded-tr-xl  rounded-tl-[5px] rounded-tr-[5px] xl:pl-16 xl:pr-8 md:pl-12 md:pr-6 px-[14px] pb-5 xl:pt-40 lg:pt-24 md:pt-16 pt-3">
          <p className="xl:font-bold text-white font-medium xl:text-[54px] xl:leading-[57px] xs:text-base text-sm">
            {testimonials.title}
          </p>
        </div>
        <div className="w-full flex flex-col md:items-start md:justify-start items-center justify-center xl:rounded-r-[20px]  md:rounded-r-xl rounded-l-[5px] xl:gap-24 md:gap-9 gap-5 xl:pl-16 xl:pt-[145px] xl:pb-56 md:pl-12 lg:pt-20 md:pb-24 md:pt-16 pb-3 relative">
          {[testimonials.testimonial[activeIndex]].map(
            ({
              text,
              img,
              name,
              role,
            }: {
              text: string;
              img: string;
              name: string;
              role: string;
            }) => (
              <div
                key={name}
                className="flex flex-col gap-5 items-start justify-start text-blackish md:p-0 px-7"
              >
                <div className="flex md:flex-row flex-col-reverse w-full items-start justify-between relative">
                  <p
                    onClick={prev}
                    className="hidden lg:flex items-center justify-center absolute z-50 -left-[9%] self-center bg-white xl:w-[80px] xl:h-[80px]  md:w-[60px] md:h-[60px] w-9 h-9 cursor-pointer rounded-full border-[0.09px] md:shadow-customMobile shadow-testimonialMobileArrows md:-ml-0 -ml-3"
                  >
                    <img
                      src={Arrow}
                      alt="arrow"
                      className="cursor-pointer w-full h-auto xl:m-14 md:m-10 m-6 xl:max-w-[50px] md:max-w-[37px] max-w-[22px] rotate-180"
                    />
                  </p>
                  <p className="font-medium  md:text-xl xs:text-sm text-xs xl:leading-[45px] md:leading-[32px] text-blackish md:mt-0 mt-[26px] lg:pl-8" >{`"${text}"`}</p>
                  <div className="flex z-50 md:flex-row flex-row-reverse items-center justify-between self-center md:w-fit w-full md:relative absolute md:top-0 -top-5">
                    <p
                      onClick={next}
                      className="flex items-center justify-center z-50 self-center bg-white xl:w-[80px] xl:h-[80px]  md:w-[60px] md:h-[60px] w-9 h-9 cursor-pointer rounded-full border-[0.09px] md:shadow-customMobile shadow-testimonialMobileArrows md:-mr-0 -mr-9"
                    >
                      <img
                        src={Arrow}
                        alt="arrow"
                        className="w-full h-auto xl:m-14 md:m-10 m-6 xl:max-w-[50px] md:max-w-[37px] max-w-[22px]"
                      />
                    </p>
                    <p
                      onClick={prev}
                      className="md:hidden flex items-center justify-center self-center bg-white xl:w-[80px] xl:h-[80px] w-9 h-9 cursor-pointer rounded-full border-[0.09px] xl:shadow-customMobile shadow-testimonialMobileArrows xl:-ml-0 -ml-9 z-50"
                    >
                      <img
                        src={Arrow}
                        alt="arrow"
                        className="w-full h-auto xl:m-14 m-6 xl:max-w-[50px] max-w-[22px] rotate-180"
                      />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center xl:gap-7 md:gap-5 gap-4">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-auto xl:max-w-[83px] md:max-w-[62px] max-w-[45px]"
                  />
                  <p className="flex flex-col items-start justify-center md:gap-2 text-blackish">
                    <span className="font-semibold xl:text-[26px] md:text-xl xs:text-base text-sm text-center">
                      {name}
                    </span>
                    <span className="font-semibold xl:text-lg md:text-base text-[10px] text-center">
                      {role}
                    </span>
                  </p>
                </div>
              </div>
            )
          )}
          <img
            src={Sponsors}
            alt="sponsors"
            className="w-full h-auto xl:max-w-[790px] md:max-w-[580px] max-w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
