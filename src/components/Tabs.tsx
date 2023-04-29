import React, {  useState } from "react";
import { tabsData } from "../constants/homepage";
import { styles } from "../styles";

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <div
      className={`${styles.padding}  font-mulish w-full flex flex-col items-center justify-center md:gap-6 gap-3 `}
    >
      <div className="flex justify-center items-center rounded-[50px] bg-primary-light p-1">
        {tabsData.map((tab, index) => {
          return (
            <button
              key={index}
              className={`font-semibold xl:text-2xl md:text-xl text-xs text-center xl:py-5 xl:pl-11 xl:pr-16 md:py-4 lg:pl-8 lg:pr-12  py-[11px] px-[9px] outline-none  rounded-[50px] transition-colors duration-500 ease-in-out ${
                index === activeTabIndex
                  ? "bg-primary text-white"
                  : "bg-transparent text-primary"
              }`}
              onClick={() => setActiveTabIndex(index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center items-center xl:py-11 md:py-6">
        <div className="flex lg:flex-row flex-col justify-between  items-center xl:gap-20 lg:gap-12 gap-7">
         
          <div className="flex-1 flex flex-col lg:justify-start justify-center lg:gap-6 gap-2 py-6">
            <h2 className="font-bold text-blackish xl:text-4xl md:text-3xl text-base font-base lg:-ml-10">
              {tabsData[activeTabIndex].content.title}
            </h2>
            <div className="flex flex-col items-end justify-center xl:gap-12 lg:gap-8 gap-6">
              <p className="font-semibold  md:text-xl xs:text-sm text-xs text-[#7b7777]">
                {tabsData[activeTabIndex].content.subtitle}
              </p>
              <div className="flex flex-col md:gap-5 gap-[18px]">
                {tabsData[activeTabIndex].content.lists.map(
                  ({ icon, text }: { icon: string; text: string }) => (
                    <div
                      key={text}
                      className="flex justify-center items-start xl:gap-10 gap-3"
                    >
                      <p className="flex justify-center items-center xl:w-[60px] xl:h-[60px] md:w-[45px] md:h-[45px] w-[26px] h-[26px] bg-[#2268BA] rounded-full">
                        <img
                          src={icon}
                          alt={icon}
                          className="xl:m-8 md:m-6 m-3 h-auto w-full xl:max-w-[28px] md:max-w-[21px] max-w-[12px] object-contain"
                        />
                      </p>
                      <p className="font-semibold  md:text-xl xs:text-sm text-xs text-[#7b7777]">
                        {text}
                      </p>
                      
                    </div>
                  )
                )}
                <div className="md:block mt-6 md:mt-14 hidden">
                <a href={tabsData[activeTabIndex].link}  className="bg-[#C4C4C4] px-8 py-4 rounded-[10px]">Learn More</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex  items-center justify-center">
            <img
              src={tabsData[activeTabIndex].img}
              alt={tabsData[activeTabIndex].label}
              className="w-full h-full"
            />
          </div>

          <div className="md:hidden mt-6 md:mt-14 block">
                <a href={tabsData[activeTabIndex].link}  className="bg-[#C4C4C4] px-8 py-4 rounded-[10px]">Learn More</a>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Tabs;
