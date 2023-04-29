import React from "react";
import { AvatarOne, AvatarThree, AvatarTwo } from "../assets/join";
import Button from "./Button";
import { join } from "../constants/homepage";
import { styles } from "../styles";

const Join = () => {
  return (
    <div
      className={`${styles.padding} flex flex-col items-center justify-center xl:gap-3 gap-8`}
    >
      <div
        className={`flex flex-col items-center w-full justify-center join-bg xl:rounded-[10px] rounded-lg`}
      >
        <div className="flex flex-col items-center justify-center xl:gap-[14px] gap-9 xl:px-60 lg:px-60 md:px-20 px-7 xl:py-8 py-14">
          <div className="flex mx-auto">
            <img
              src={AvatarOne}
              alt="avatar-one"
              className="w-full h-auto xl:max-w-[100px] max-w-[75px] relative z-10 left-8"
            />
            <img
              src={AvatarTwo}
              alt="avatarTwo"
              className="w-full h-auto xl:max-w-[100px] max-w-[75px] relative z-20 -left-0"
            />
            <img
              src={AvatarThree}
              alt="avatar-three"
              className="w-full h-auto xl:max-w-[100px] max-w-[75px] relative z-30 -left-8"
            />
          </div>
          <h3 className="font-mulish xl:font-bold font-semibold  md:text-3xl text-xl text-white text-center">
            {join.title}
          </h3>
          <p className="font-mulish xl:font-semibold font-medium xl:text-2xl md:text-lg text-sm text-white text-center">
            {join.subtitle}
          </p>
          <Button
            link="/get-started"
            className="group bg-white hover:bg-primary lg:px-[30px] md:py-4 md:mt-2 md:px-4 px-5 py-3 gap-2 rounded-lg w-full md:max-w-[210px] max-w-[160px]"
            children={
              <span className="font-poppins lg:text-xl text-sm group-hover:text-white text-[#0c75bd] font-medium">
                Get Started
              </span>
            }
          />
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col items-center md:items-stretch justify-start xl:gap-20 md:gap-10 gap-8">
        <div className="font-mulish bg-primary w-full text-white flex-1 flex flex-col justify-start rounded-[10px] items-start xl:gap-2 gap-3 xl:px-8 px-6 py-8 xl:py-9">
          <h4 className="xl:font-bold font-semibold xl:text-4xl lg:text-3xl md:text-2xl text-xl">
            {join.tabOne.header}
          </h4>
          <p className="xl:font-semibold font-medium xl:text-2xl md:text-lg text-sm text-white">
            {join.tabOne.subHeader}
          </p>
          <p className="flex items-center justify-between xl:gap-6 gap-3 xl:mt-5 mt-2">
            {join.tabOne.icons.map((icon: string) => (
              <span
                key={icon}
                className="flex items-center justify-center bg-white hover:bg-primary-light xl:w-[64px] xl:h-[64px] w-[34px] h-[34px] rounded-full cursor-pointer"
              >
                <img
                  src={icon}
                  alt={icon}
                  className="w-full h-auto xl:m-0 xl:max-w-[36px] max-w-[20px]"
                />
              </span>
            ))}
          </p>
        </div>
        <div className="font-mulish bg-primary w-full text-white flex-1 flex flex-col justify-start rounded-[10px] items-start xl:gap-2 gap-3 xl:px-8 xl:py-9  px-6 py-8">
          <h4 className="xl:font-bold font-semibold xl:text-4xl lg:text-3xl md:text-2xl text-xl">
            {join.tabTwo.header}
          </h4>
          <p className="xl:font-semibold font-medium xl:text-2xl  md:text-lg text-sm text-white">
            {join.tabTwo.subHeader}
          </p>
          <Button
            className="group bg-white hover:bg-blackish lg:px-[30px] md:py-4 md:mt-2 mt-1 md:px-4 px-5 py-3 gap-2 rounded-lg w-full md:max-w-[230px] max-w-[180px]"
            children={
              <span className="font-poppins lg:text-xl text-sm group-hover:text-white text-[#0c75bd] font-medium">
                Request a Demo
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Join;
