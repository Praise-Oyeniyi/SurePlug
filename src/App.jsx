import './App.css';
import RotateLogo from './images/logo-circle.svg'
import Step from './images/steps3.png'
import StepR from './images/stepR.png'
import FPhone from './images/footer-phone.png'
import { FaArrowRightLong, FaApple, FaGooglePlay} from "react-icons/fa6";
import Everything from './components/EverythingSection';
import { EverythingData } from './Data/Everything';
import ChoiceSection from './components/ChoiceSection';
import { Choice } from './Data/ChoiceData';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full font-Aeonik">
      <Header/>

      <div className="everything py-10 relative bg-[#D9CEFF]">
        <div className='absolute right-5 -top-12 md:right-10 md:-top-20 w-[5.6rem] h-[5.6rem] md:w-fit md:h-fit'>
          <img src={RotateLogo} alt="animated Logo" className='w-fit object-contain animate-spin-slow' />
        </div>

        <div className="w-[90%] mx-auto text-black">
          <div className='text-center py-2 pb-10 space-y-4'>
            <h3 className='text-3xl md:text-5xl  font-bold'>
              Everything You Need, All in One App
            </h3>
            <p className='md:w-3/6 mx-auto font-normal text-[0.93rem] md:text-2xl'>From airtime and data to streaming subscriptions and flight bookings, SurePlug simplifies all your payments in one place.</p>
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
        <h3 className='text-3xl md:text-5xl font-bold pb-10 text-center md:w-3/6 mx-auto '>Over 30+ Service Providers and Brands Connected to <span className='underline text-[#6840ED]'>SurePlug</span></h3>

        <div className='w-full '>
          <div className="brand-top overflow-x-auto">

          </div>
        </div>

      </div>

      <div className='w-full bg-[#EFEFEF] py-10 pb-14'>
        <div className='text-center py-2 pb-10 space-y-4'>
          <h3 className='text-3xl md:text-5xl  font-bold'>
            Your Best Choice for Seamless Bill Payments
          </h3>
          <p className='md:w-3/6 mx-auto font-normal text-[0.93rem] md:text-2xl'>Discover the features that make SurePlug the ultimate solution for all your bill payment needs.</p>
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
                textColor={e.textColor}
                bgColor={e.bgColor}
              />
            ))}
          </div>
        </div>

      </div>

      <div className='w-full pt-14 bg-[#d9ceff1c]'>
        <div className='w-5/6 mx-auto flex flex-wrap md:flex-nowrap gap-y-16 md:gap-y-0 justify-between items-center'>
          <div className="left md:w-3/6 w-full">
            <h3 className='text-3xl md:text-5xl font-bold pb-7'>3 Easy Steps to Get Started with<span className='underline text-[#6840ED]'>SurePlug.</span></h3>

            <ol className='space-y-5 md:space-y-3 list-[value] pl-5 step-list'>
              <li className='text-black'>
                <h4 className='text-base md:text-2xl font-bold pb-2'>Download and Install the App</h4>
                <p className='text-[0.93rem] md:text-2xl font-normal'>Head to your app store, search for "SurePlug," and download it onto your mobile device.</p>
              </li>
              <li className='text-black'>
                <h4 className='text-base md:text-2xl font-bold pb-2'>Sign Up for Free</h4>
                <p className='text-[0.93rem] md:text-2xl font-normal'>Launch the app and complete a quick, hassle-free registration with just your basic personal details.</p>
              </li>
              <li className='text-black'>
                <h4 className='text-base md:text-2xl font-bold pb-2'>Add Funds and Pay Bills</h4>
                <p className='text-[0.93rem] md:text-2xl font-normal'>Top up your account and instantly begin paying your bills with ease. It’s that straightforward!</p>
              </li>
            </ol>
            <button className='bg-[#6840ED] text-white rounded-full text-xl font-normal mt-7 flex items-center gap-x-5 px-5 py-3'>Get the app <span><FaArrowRightLong size={20}/></span></button>
          </div>
          

          <div className='right md:w-3/6 w-full p-10'>
            <img src={StepR} alt="" className='w-fit object-contain'/>
          </div>
        </div>

        <div className='w-5/6 mx-auto mt-14 md:mt-10'>
          <div className="w-full flex flex-wrap md:flex-nowrap justify-between gap-x-16 gap-y-16 md:gap-y-0">
            <div className='md:w-[38rem] w-full'>
              <img src={Step} alt="" className='w-full object-contain' />
            </div>
            <h3 className='text-3xl md:text-5xl text-center md:text-left font-bold self-center w-full md:w-3/6 pb-14 md:pb-0'>Join Over 5+ Million Users Simplifying Their Payments with <span className='text-[#6840ED]'>SurePlug.</span> </h3>
          </div>
        </div>
        

      </div>

      <div className='py-14 w-full'>
        <div className="w-[90%] flex flex-col md:flex-row gap-y-16 md:gap-y-0 justify-between mx-auto bg-[url('./images/footer-bg.png')] bg-center rounded-3xl pt-12 px-12 md:px-20 overflow-hidden">
          <div className="left md:w-3/6 w-full md:self-center space-y-5">
            <h3 className='text-3xl md:text-5xl font-bold text-white text-center md:text-left'>Try <span className='underline'>SurePlug</span> for free on iOS and Android</h3>

            <div className='flex justify-center md:justify-between w-fit mx-auto items-center gap-x-3 text-xs md:text-xl font-normal text-black'>
              <button className='bg-white flex items-center gap-x-2 rounded-full px-6 py-2 md:px-8 md:py-3'>
                <FaApple size={20}/>
                App Store
              </button>
              <button className='bg-white flex items-center gap-x-2 rounded-full px-6 py-2 md:px-8 md:py-3'>
                <FaGooglePlay size={20}/>
                Google Play
              </button>
            </div>
            
          </div>

          <div className='self-end w-full md:w-[26.5rem]'>
            <img src={FPhone} alt="" className='object-contain w-fit '/>
          </div>
        </div>
      </div>

      <div className="footer-nav w-[90%] mx-auto rounded-xl md:rounded-full bg-[#EEEEEE] mb-14 mt-4 py-5 text-black">
        <ul className='text-[0.93rem] md:text-2xl font-normal w-full px-7 md:px-0 gap-x-7 md:gap-x-0  flex items-center justify-evenly flex-wrap md:flex-nowrap gap-y-7 md:gap-y-0'>
          <li>About Us</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Help</li>
        </ul>
      </div>

      <Footer/>

    </div>
  );
}

export default App;
