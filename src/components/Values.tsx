import React from "react";
import innovation from "../assets/about/innovation.svg";
import excellence from "../assets/about/excellence.svg";
import responsibility from "../assets/about/responsibility.svg";
import team from "../assets/about/team.svg";

const Values = () => {
  const valuesData = [
    {
      icon: innovation,
      title: "Innovation",
      desc: "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout",
    },
    {
      icon: team,
      title: "Team work",
      desc: "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout",
    },

    {
      icon: excellence,
      title: "Excellence",
      desc: "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout",
    },

    {
      icon: responsibility,
      title: "Responsibility",
      desc: "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout",
    },
  ];

  return (
    <>
      <div className="text-center max-[769px]:my-[3rem]">
        <p className="font-nunito font-bold text-center text-[18px] text-primary bg-[#F5EFEC] px-[40px] md:px-[55px]  py-[10px] md:py-[25px] rounded-[40px] inline">
          Our Values
        </p>

        <h2 className="font-nunito font-extrabold text-center text-[30px] md:text-[50px] mt-[45px] mx-auto leading-[55px] w-[80%] md:w-[60%]">
          The story and values behind our company
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
        {valuesData.map((value) => {
          return (
            <div key={value.title} className="flex gap-8 px-[27px] py-[39px] bg-[#F9F9F9] rounded-[30px]">
              <div className="bg-primary py-[44px] px-[39px] max-[631px]:py-[20px] max-[631px]:px-[19px] rounded-[23px]">
                <img
                  className="h-[72px] w-[50px] "
                  src={value.icon}
                  alt="innovation"
                />
              </div>
              <div>
                <p className="font-nunito font-bold max-[631px]:text-[20px] text-[30px] leading-normal">
                  {value.title}
                </p>
                <p className="font-nunito text-muted max-[631px]:text-[14px] text-[20px] leading-normal">
                 {value.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Values;
