import React from 'react';
import { heroText } from "../../../constants/homepage"
import { styles } from '../../../styles';
import { GetStartedBtn } from '../../../components/UI/Button/Button';
import HeroCarousel from './HeroCarousel';


const HomeHero = () => {

  return (
<div className={`${styles.paddingX} w-full flex min-[1120px]:flex-row flex-col lg:justify-between lg:gap-0 gap-36 justify-center items-center  md:pb-28 pb-[5rem]`}>
    <div className='font-mulish w-full flex-1 flex flex-col xl:gap-14 md:gap-8 gap-7 lg:mt-0'>
        <h1 className='font-bold xl:text-6xl md:text-5xl xs:text-3xl text-2xl xl:leading-[1.3] md:leading-[1.2] tracking-wide'>
            {heroText.header.map((text, index) => (
                 <React.Fragment key={`${index}-${text}`}>
                 <span className={`mr-3 ${index % 2 === 1 ? "text-primary" : "text-blackish"}  ${index === 2 && "text-blackish"}  ${index === 7 ? "text-gray" : ""}  ${index === 8 && "text-primary"}`}>
                   {text}
                 </span>
                 {index === 3 || index === 6 ? <br /> : null}
               </React.Fragment>
            ))}
        </h1>
        <p className='font-semibold text-blackish md:text-2xl text-base'>{heroText.subHeaderOne} <br  className='xl:flex md:hidden flex'/> {heroText.subHeaderTwo}</p>
          
         <div>         
          <GetStartedBtn title="Get Started" />
          </div>
 
      
    </div>
    <div className='flex-1 w-full md:flex hidden items-center justify-center relative lg:overflow-hidden xl:h-[40rem] lg:h-[28rem] md:py-12 lg:py-36 xl:py-0'>
        <HeroCarousel />
    </div>
</div>
  )
}

export default HomeHero

