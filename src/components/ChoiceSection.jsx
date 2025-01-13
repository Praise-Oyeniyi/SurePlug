import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const ChoiceSection = ({title, desc, bgColor, textColor, image, identifier}) => {
  return (
    <div className={`w-[49%] group bg-white ${bgColor}  rounded-3xl overflow-hidden h-[33rem] relative transition-all ease-linear duration-300`} key={identifier}>
        <div className='w-full py-7 px-5 h-full flex flex-col justify-between items-start group-hover:scale-[1.009] transition-all ease-linear duration-300'>
        <div className='space-y-5 '>
            <h3 className={`capitalize font-bold text-4xl ${textColor} group-hover:text-white`}>{title}</h3>
            <p className='text-2xl font-normal group-hover:text-white'>{desc}</p>
        </div>

        <div className='flex w-full justify-between items-end relative'>
            <FaArrowRightLong size={30} className="group-hover:text-white"/>
            <img src={image} alt="" className='absolute -bottom-7 right-full delay-300 group-hover:right-0  hidden group-hover:block'/>
        </div>


        </div>
    </div>
  )
}

export default ChoiceSection