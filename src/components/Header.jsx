import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import HeadL from '../images/header-logo.svg'
import HeadIcon from '../images/heroIcon.svg'
import Phone from '../images/hero-phone.png'
import Play from '../images/play.svg'
import Ios from '../images/ios.svg'
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
    const [active, setActive]= useState(false);

  return (
    <div className="w-full bg-[url('./images/hero.png')] bg-center bg-[#6840ED] text-white py-7 md:py-10">
        <header className=' flex items-center justify-between w-[90%] mx-auto pb-7 z-30'>
          <div className='logo h-[33.49px] md:h-fit'>
            <img src={HeadL} alt="" className='object-contain w-fit'/>
          </div>
        
            
            <ul className='items-center gap-x-7 w-fit text-lg font-normal hidden md:flex'>
                <li>About</li>
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Become An Agent</li>
            </ul>
          

          <div className='hidden md:flex items-center gap-x-2 text-base font-normal '>
            <button className='sign in px-4 py-2 border border-white rounded-full transition-all ease-linear duration-300 hover:bg-zinc-200 hover:text-[#6840ED] hover:scale-[1.01]'>Sign In</button>
            <button className='rounded-full bg-white px-4 border border-transparent py-2 transition-all ease-linear duration-300 text-[#6840ED] hover:bg-zinc-200 hover:scale-[1.01] hover:border-white'>Create An Account</button>
          </div>

          <HiOutlineMenuAlt3 size={35} className={`text-white md:hidden cursor-pointer p-1 transition-all ease-linearduration-300 ${active?'fixed':''} bg-[#6840ed83] right-5 top-8 z-[999] rounded-sm`} onClick={()=>setActive(!active)}/>
        </header>



        <div className='hero w-[90%] mx-auto flex flex-col md:flex-row justify-between pb-7 gap-y-20 md:gap-y-0'>
          <div className='hero-left w-full md:w-3/6 pt-7 md:pt-16 space-y-4'>
            <h4 className='w-fit flex items-center justify-start gap-x-2 md:gap-x-3 bg-white md:px-6 px-4 py-1 rounded-full text-black text-[0.9rem]' >
              <span><img src={HeadIcon} alt="" className='object-fit w-7 md:w-[2.8rem]'/></span>
                Sureplug is now available on Appstore
              <FaArrowRightLong/>
            </h4>

            <h3 className='text-5xl md:text-7xl font-bold leading-tight'>
              Simplify your Bill Payments with <span className='underline underline-offset-8'>Sureplug</span>
            </h3>

            <h4 className='font-normal text-[0.93rem] md:text-xl'>Fast, Secure, and Convenient for All Your Needs.</h4>
            
            <div className='flex w-5/6 md:w-4/6 items-center gap-x-2 mt-2'>
              <button>
                <img src={Ios} alt="Sureplug home UI" className='w-fit ' />
              </button>
              <button>
                <img src={Play} alt="Sureplug home UI" className='w-fit ' />
              </button>
            </div>
          </div>

          <div className='md:w-3/6 w-full'>
            <img src={Phone} alt="Sureplug home UI" className='w-fit object-contain' />

          </div>

          
        </div>

        <div className={`w-screen h-screen fixed top-0  bg-white md:hidden z-50 transition-all ease-linearduration-300 ${active?'left-0': '-left-full'}`}>
          <ul className='text-black h-4/6 flex w-full flex-col justify-evenly items-center z-10 mt-7'>
              <li>About</li>
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Become An Agent</li>
              <hr className='border border-[#6840ed34] w-4/6 mx-auto'/>
              <li>Sign In</li>
              <li>Create An Account</li>
          </ul>
      </div>
    </div>
  )
}

export default Header