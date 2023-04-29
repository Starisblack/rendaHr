import React from 'react'
import { Cynergy, Kpmg, Lendsqr, Esya } from '../assets/brands'
import { styles } from '../styles'
import { brandTitle } from '../constants/homepage'

const Brands = () => {
  return (
    <div className={`${styles.padding} w-full flex flex-col items-center justify-center gap-10`}>
        <h2 className='text-center font-mulish text-blackish font-bold xl:text-2xl md:text-xl text-sm'>{brandTitle}</h2>
        <div className={`flex flex-wrap justify-around items-center md:gap-5 gap-7 md:w-full w-[90%]`} >
            <img src={Lendsqr} alt="lendsqr" className='w-full h-auto xl:max-w-[275px] md:max-w-[193px] max-w-[108px]' />
            <img src={Esya} alt="esya" className='w-full h-auto xl:max-w-[101px] md:max-w-[71px] max-w-[40px]' />
            <img src={Cynergy} alt="cynergy" className='w-full h-auto xl:max-w-[268px] md:max-w-[187px] max-w-[112px]' />
            <img src={Kpmg} alt="kpmg" className='w-full h-auto xl:max-w-[168px] md:max-w-[117px] max-w-[67px]'/>
        </div>
    </div>
  )
}

export default Brands