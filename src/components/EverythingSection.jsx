import React from 'react'

const Everything = ({IconL, IconR, DescL, DescR, HeadingL, HeadingR, keyValue}) => {
  return (
    <div className='w-full flex items-stretch justify-between gap-x-3' keyValue>
        <div className={`flex md:flex-row flex-col justify-stretch md:justify-start items-center w-3/6 gap-x-3 bg-white rounded-lg p-4 py-5 ${(keyValue+1) %2 == 0? 'md:w-2/6':'md:w-4/6'}`}>
          <img src={IconL} alt="" className='w-[40px] h-[40px] rounded-full p-3 bg-[#6840ED33] '/>

          <div className='text-center md:text-left '>
              <h4 className='text-sm md:text-2xl font-bold py-2 md:py-0'>{HeadingL}</h4>
              <p className='text-xs md:text-xl font-normal'>{DescL}</p>
          </div>
        </div>

        <div className={`flex md:flex-row flex-col justify-stretch md:justify-start w-3/6 gap-x-3 bg-white rounded-lg p-4 py-5 ${(keyValue+1) %2 !== 0? 'md:w-2/6':'md:w-4/6'}`}>
            <img src={IconR} alt="" className='w-[40px] h-[40px] rounded-full mx-auto md:m-auto p-3 bg-[#6840ED33] '/>
            
            <div className='text-center md:text-left'>
              <h4 className='text-sm md:text-2xl font-bold py-2 md:py-0'>{HeadingR}</h4>
              <p className='text-xs md:text-xl font-normal'>{DescR}</p>
            </div>
        </div>
    </div>
  )
}

export default Everything


{/* <div className='w-full flex items-stretch justify-between gap-x-3'>

<div className="w-4/6 flex items-center gap-x-3 bg-white rounded-lg p-4 ">
  <img src={Airtime} alt="" className='w-[40px] h-[40px] rounded-full p-3 bg-[#6840ED33] '/>

  <div>
    <h4 className='text-2xl font-bold'>Airtime</h4>
    <p className='text-xl font-normal'>Instantly top up airtime for any mobile network with ease and secure payments, anytime, anywhere.</p>
  </div>
</div>

<div className='w-2/6 bg-white rounded-lg flex items-center p-4 gap-x-3'>
    <img src={Data} alt="" className='w-[40px] h-[40px] rounded-full p-3 bg-[#6840ED33] '/>
    
    <div>
      <h4 className='text-2xl font-bold'>Data</h4>
      <p className='text-xl font-normal'>Instantly top up airtime for any mobile network with ease and secure payments, anytime, anywhere.</p>
    </div>
</div>
</div> */}