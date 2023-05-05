import React from 'react'
import mockup from "./assets/about/mockUp.png"

const AboutCTA = () => {
  return (
    <div>
            <div className="flex flex-col md:flex-row gap-20 md:gap-0 py-10 md:py-60">
        <div className="basis-full md:basis-[40%]">
          <h2 className="font-nunito font-extrabold  text-[40px] max-[630px]:text-[28px] leading-[55px] mt-[50px]">
            Recruit. Onboard. Manage
          </h2>
          <p className="text-muted max-[631px]:text-[14px]">
            RendaHR is a human resource management system that helps companies
            win the hearts and minds of their employees. A workforce that is
            more agile, mobile and social.
          </p>
        </div>

        <div className="basis-full min-[600px]:pt-[15rem] md:pt-0 md:basis-[60%] h-[480px] flex items-end relative">
          <img
            className="absolute max-[600px]:h-[140%] bottom-0 h-full object-contain  min-[600px]:object-cover z-40"
            src={mockup}
            alt="renda"
          />
          <div className="max-[600px]:h-[150px] max-[769px]:h-[200px] md:h-[70%] w-full bg-[#C4C4C4] rounded-[20px] relative z-2"></div>
        </div>
      </div>
    </div>
  )
}

export default AboutCTA