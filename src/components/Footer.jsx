import React from 'react'
import FooterL from '../images/footer-logo.svg'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp  } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className='w-full'>
        <div className='w-[90%] mx-auto flex flex-col md:flex-row justify-between items-start text-black font-normal text-[0.93rem] md:text-xl'>
          <div className="logo-area md:w-2/6 w-full space-y-5">
            <img src={FooterL} alt="" className="object-contain w-fit h-[33.49px] md:h-fit" />
            <p>Sureplug is a trusted payment platform that allows users to easily and securely pay for bills and subscriptions, including electricity, internet, airtime, data bundles, cable TV, education fees, and more.</p>

          </div>

          <div className='space-y-3 my-7 md:my-0'>
            <h5 >(+234) 703 953 3752</h5>
            <h5>hello@Sureplug.ng</h5>
          </div>

          <div className='space-y-3 pb-3 md:pb-0'>
            <h5 className='flex items-center gap-x-2'><FaXTwitter />Twitter</h5>
            <h5 className='flex items-center gap-x-2'><FaFacebookF />Facebook</h5>
          </div>

          <div className='space-y-3'>
            <h5 className='flex items-center gap-x-2'><FaInstagram/>Instagram</h5>
            <h5 className='flex items-center gap-x-2'><FaLinkedinIn />LinkedIn</h5>
            <h5 className='flex items-center gap-x-2'><FaWhatsapp/>WhatsApp</h5>
          </div>
        </div>

        <div className='w-full md:w-[90%] bg-[#6840ED] mx-auto text-base text-center py-5 mt-20'>
          (c) 2024 Sureplug. All rights reserved.
        </div>

    </footer>
  )
}

export default Footer