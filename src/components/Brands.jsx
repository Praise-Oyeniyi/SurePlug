import React from 'react'
import { motion } from "framer-motion";
import { BrandIcons } from '../Data/BrandIcons';

const Brands = () => {
  return (
    <div className='w-full bg-white py-20'>
        <h3 className='text-3xl md:text-5xl font-bold pb-14 text-center md:w-3/6 mx-auto '>Over 30+ Service Providers and Brands Connected to <span className='underline text-[#6840ED]'>SurePlug</span></h3>

        <div className='w-full space-y-3 md:space-y-5'>
            <motion.div 
                className="brand-top flex gap-x-3 md:gap-x-5"
                animate={{
                    x: ["0%", "-50%"]
                }}
                transition={{
                    x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                    },
                }}
                >
                {[...BrandIcons.topIcons, ...BrandIcons.topIcons].map((e, index) => (
                    <div key={index} className="min-w-[4rem] max-w-[5rem] md:min-w-[10rem] md:max-w-[10.81rem] flex-shrink-0">
                        <img src={e} alt="" className='w-full object-contain'/>
                    </div>
                ))}
            </motion.div>

            <motion.div 
                className="brand-bottom flex gap-x-3 md:gap-x-5"
                animate={{
                    x: ["-50%", "0%"]
                }}
                transition={{
                    x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                    },
                }}
            >
                {[...BrandIcons.bottomIcons, ...BrandIcons.bottomIcons].map((e, index) => (
                    <div key={index} className="min-w-[4rem] max-w-[5rem] md:min-w-[10rem] md:max-w-[10.81rem] flex-shrink-0">
                        <img src={e} alt="" className='w-full object-contain'/>
                    </div>
                ))}
            </motion.div>
        </div>

    </div>
  )
}

export default Brands