import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import HeadL from '../images/header-logo.svg'
import HeadIcon from '../images/heroIcon.svg'
import Phone from '../images/hero-phone.png'
import Play from '../images/play.svg'
import Ios from '../images/ios.svg'

const Header = () => {
  return (
    <div className="bg-[url('./images/hero.png')] bg-center bg-[#6840ED] text-white py-10">
        <header className=' flex items-center justify-between w-[90%] mx-auto pb-7'>
          <div className='logo '>
            <img src={HeadL} alt="" className='object-contain w-fit'/>
          </div>

          <ul className='items-center gap-x-7 w-fit text-xl font-normal hidden md:flex'>
            <li>About</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Become An Agent</li>
          </ul>

          <div className='hidden md:flex items-center gap-x-2 text-lg font-normal '>
            <button className='sign in px-4 py-2 border border-white rounded-full transition-all ease-linear duration-300 hover:bg-white hover:text-[#6840ED] hover:scale-[1.01]'>Sign In</button>
            <button className='rounded-full bg-white px-4 border border-transparent py-2 transition-all ease-linear duration-300 text-[#6840ED] hover:bg-[#6840ED] hover:text-white hover:scale-[1.01] hover:border-white'>Create An Account</button>
          </div>
        </header>



        <div className='hero w-[90%] mx-auto flex flex-col md:flex-row justify-between pb-7 gap-y-20 md:gap-y-0'>
          <div className='hero-left w-full md:w-3/6 pt-16 space-y-4'>
            <h4 className='w-fit flex items-center gap-x-2 md:gap-x-3 bg-white md:px-6 px-4 py-1 rounded-full text-black text-[0.93rem]' >
              <span><img src={HeadIcon} alt="" className='object-fit w-[2.87rem]'/></span>
                Sureplug is now available on Appstore
              <FaArrowRightLong/>
            </h4>

            <h3 className='text-5xl md:text-7xl font-bold leading-tight'>
              Simplify your Bill Payments with <span className='underline'>SurePlug.</span>
            </h3>

            <h4 className='font-normal text-[0.93rem] md:text-2xl'>Fast, Secure, and Convenient for All Your Needs.</h4>
            
            <div className='flex w-fit items-center gap-x-2 mt-2'>
              <button>
                <img src={Ios} alt="sureplug home UI" className='w-fit ' />
              </button>
              <button>
                <img src={Play} alt="sureplug home UI" className='w-fit ' />
              </button>
            </div>
          </div>

          <div className='md:w-3/6 w-full'>
            <img src={Phone} alt="sureplug home UI" className='w-fit object-contain' />

          </div>

          
        </div>
    </div>
  )
}

export default Header