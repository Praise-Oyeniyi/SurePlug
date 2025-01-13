import logo from './logo.svg';
import './App.css';
import Phone from './images/hero-phone.png'
import Play from './images/play.svg'
import Ios from './images/ios.svg'
import RotateLogo from './images/logo-circle.svg'

import Step from './images/steps3.png'
import StepR from './images/stepR.png'
import FPhone from './images/footer-phone.png'
import FooterL from './images/footer-logo.svg'
import HeadL from './images/header-logo.svg'
import HeadIcon from './images/heroIcon.svg'
import { FaArrowRightLong, FaApple, FaGooglePlay,FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp  } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Everything from './components/EverythingSection';
import { EverythingData } from './Data/Everything';
import ChoiceSection from './components/ChoiceSection';
import { Choice } from './Data/ChoiceData';

function App() {
  return (
    <div className="w-full font-Aeonik">
      <div className="bg-[url('./images/hero.png')] bg-center bg-[#6840ED] text-white py-10">
        <header className=' flex items-center justify-between w-[90%] mx-auto pb-7'>
          <div className='logo '>
            <img src={HeadL} alt="" className='object-contain w-fit'/>
          </div>

          <ul className='flex items-center gap-x-7 w-fit text-xl font-normal'>
            <li>About</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Become An Agent</li>
          </ul>

          <div className='flex items-center gap-x-2 text-lg font-normal '>
            <button className='sign in px-4 py-2 border border-white rounded-full transition-all ease-linear duration-300 hover:bg-white hover:text-[#6840ED] hover:scale-[1.01]'>Sign In</button>
            <button className='rounded-full bg-white px-4 border border-transparent py-2 transition-all ease-linear duration-300 text-[#6840ED] hover:bg-[#6840ED] hover:text-white hover:scale-[1.01] hover:border-white'>Create An Account</button>
          </div>
        </header>



        <div className='hero w-[90%] mx-auto flex justify-between pb-7'>
          <div className='hero-left w-3/6 pt-24 space-y-3'>
            <h4 className='w-fit flex items-center gap-x-3 bg-white px-6 py-2 rounded-full text-black'>
              <span><img src={HeadIcon} alt="" className='object-fit w-[2.87rem]'/></span>
                Sureplug is now available on Appstore
              <FaArrowRightLong/>
            </h4>

            <h3 className='text-7xl font-bold'>
              Simplify your Bill with <span className='underline'>SurePlug.</span>
            </h3>

            <h4 className='font-normal text-2xl'>Fast, Secure, and Convenient for All Your Needs.</h4>
            
            <div className='flex w-fit items-center gap-x-2'>
              <button>
                <img src={Ios} alt="sureplug home UI" className='w-fit ' />
              </button>
              <button>
                <img src={Play} alt="sureplug home UI" className='w-fit ' />
              </button>
            </div>
          </div>

          <div className='w-3/6'>
            <img src={Phone} alt="sureplug home UI" className='w-fit object-contain' />

          </div>

          
        </div>
      </div>

      <div className="everything py-10 relative bg-[#D9CEFF]">
        <div className='absolute right-10 -top-20'>
          <img src={RotateLogo} alt="animated Logo" className='w-fit object-contain animate-spin-slow' />
        </div>

        <div className="w-[90%] mx-auto text-black">
          <div className='text-center py-2 pb-10 space-y-4'>
            <h3 className='text-5xl  font-bold'>
              Everything You Need, All in One App
            </h3>
            <p className='w-3/6 mx-auto font-normal tex-2xl'>From airtime and data to streaming subscriptions and flight bookings, SurePlug simplifies all your payments in one place.</p>
          </div>
        

          <div className='w-full space-y-3 pb-10 pt-5'>
            {EverythingData.map((e, index)=>(
              <Everything 
                IconL={e.imageLeft} 
                IconR={e.imageRight} 
                DescL={e.paraLeft} 
                HeadingL={e.headLeft}
                DescR={e.paraRight} 
                HeadingR={e.headRight}
                keyValue={index}
              />
            ))
            }

          </div>

        </div>

      </div>
      
      <div className='w-full bg-white py-10'>
        <h3 className='text-5xl font-bold pb-10 text-center w-3/6 mx-auto'>Over 30+ Service Providers and Brands Connected to <span className='underline text-[#6840ED]'>SurePlug</span></h3>

        <div className='w-full '>
          <div className="brand-top overflow-x-auto">

          </div>
        </div>

      </div>

      <div className='w-full bg-[#EFEFEF] py-10 pb-14'>
        <div className='text-center py-2 pb-10 space-y-4'>
          <h3 className='text-5xl  font-bold'>
            Your Best Choice for Seamless Bill Payments
          </h3>
          <p className='w-3/6 mx-auto font-normal tex-2xl'>Discover the features that make SurePlug the ultimate solution for all your bill payment needs.</p>
        </div>

        <div className='w-5/6 mx-auto'>
          <div className='w-full flex flex-wrap justify-between gap-5'>
            {Choice.map((e, index)=>(
              <ChoiceSection 
                title={e.header}
                desc={e.para}
                color={e?.color}
                image={e.image}
                identifier={index}
              />
            ))}
          </div>
        </div>

      </div>

      <div className='w-full pt-14 bg-[#d9ceff1c]'>
        <div className='w-5/6 mx-auto flex justify-between items-center'>
          <div className="left w-3/6">
            <h3 className='text-5xl font-bold pb-7'>3 Easy Steps to Get Started with<span className='underline text-[#6840ED]'>SurePlug.</span></h3>

            <ol className='space-y-3'>
              <li className='text-black'>
                <h4 className='text-2xl font-bold pb-2'>Download and Install the App</h4>
                <p className='text-2xl font-normal'>Head to your app store, search for "SurePlug," and download it onto your mobile device.</p>
              </li>
              <li className='text-black'>
                <h4 className='text-2xl font-bold pb-2'>Sign Up for Free</h4>
                <p className='text-2xl font-normal'>Launch the app and complete a quick, hassle-free registration with just your basic personal details.</p>
              </li>
              <li className='text-black'>
                <h4 className='text-2xl font-bold pb-2'>Add Funds and Pay Bills</h4>
                <p className='text-2xl font-normal'>Top up your account and instantly begin paying your bills with ease. It’s that straightforward!</p>
              </li>
            </ol>
            <button className='bg-[#6840ED] text-white rounded-full text-xl font-normal mt-7 flex items-center gap-x-5 px-5 py-3'>Get the app <span><FaArrowRightLong size={20}/></span></button>
          </div>
          

          <div className='right w-3/6 p-10'>
            <img src={StepR} alt="" className='w-fit object-contain'/>
          </div>
        </div>

        <div className='w-5/6 mx-auto mt-10'>
          <div className="w-full flex justify-between gap-x-16">
            <div className='w-[38rem]'>
              <img src={Step} alt="" className='w-full object-contain' />
            </div>
            <h3 className='text-5xl font-bold self-center w-3/6'>Join Over 5+ Million Users Simplifying Their Payments with <span className='text-[#6840ED]'>SurePlug.</span> </h3>
          </div>
        </div>
        

      </div>

      <div className='py-14 w-full'>
        <div className="w-[90%] flex justify-between mx-auto bg-[url('./images/footer-bg.png')] bg-center rounded-3xl pt-12 px-20 overflow-hidden">
          <div className="left w-3/6 self-center space-y-5">
            <h3 className='text-5xl font-bold text-white'>Try <span className='underline'>SurePlug</span> for free on iOS and Android</h3>

            <div className='flex justify-between w-fit items-center gap-x-3 text-xl font-normal text-black'>
              <button className='bg-white flex items-center gap-x-2 rounded-full px-8 py-3'>
                <FaApple size={20}/>
                App Store
              </button>
              <button className='bg-white flex items-center gap-x-2 rounded-full px-8 py-3'>
                <FaGooglePlay size={20}/>
                Google Play
              </button>
            </div>
            
          </div>

          <div className='self-end w-[26.5rem]'>
            <img src={FPhone} alt="" className='object-contain w-fit '/>
          </div>
        </div>
      </div>

      <div className="footer-nav w-[90%] mx-auto rounded-full bg-[#EEEEEE] mb-14 mt-4 py-5 text-black">
        <ul className='text-2xl font-normal w-full flex items-center justify-evenly'>
          <li>About Us</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Help</li>
        </ul>
      </div>

      <footer className='w-full'>
        <div className='w-[90%] mx-auto flex justify-between items-start text-black font-normal text-2xl'>
          <div className="logo-area w-2/6 space-y-5">
            <img src={FooterL} alt="" className="object-contain w-fit" />
            <p>SurePlug is a trusted payment platform that allows users to easily and securely pay for bills and subscriptions, including electricity, internet, airtime, data bundles, cable TV, education fees, and more.</p>

          </div>

          <div className='space-y-3'>
            <h5 >(+234) 901 123 1234</h5>
            <h5>Hello@sureplug.ng</h5>
          </div>

          <div className='space-y-3'>
            <h5 className='flex items-center gap-x-2'><FaXTwitter />Twitter</h5>
            <h5 className='flex items-center gap-x-2'><FaFacebookF />Facebook</h5>
          </div>

          <div className='space-y-3'>
            <h5 className='flex items-center gap-x-2'><FaInstagram/>Instagram</h5>
            <h5 className='flex items-center gap-x-2'><FaLinkedinIn />LinkedIn</h5>
            <h5 className='flex items-center gap-x-2'><FaWhatsapp/>WhatsApp</h5>
          </div>
        </div>

        <div className='w-[90%] bg-[#6840ED] mx-auto text-base text-center py-5 mt-20'>
          (c) 2024 SurePlug. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default App;
