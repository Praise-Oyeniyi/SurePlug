import React from 'react'

const Everything = ({IconL, IconR, DescL, DescR, HeadingL, HeadingR, keyValue}) => {
  return (
    <div className='w-full flex items-stretch justify-between gap-x-3' keyValue>
        <div className={`flex items-center gap-x-3 bg-white rounded-lg p-4 py-5 ${(keyValue+1) %2 == 0? 'w-2/6':'w-4/6'}`}>
        <img src={IconL} alt="" className='w-[40px] h-[40px] rounded-full p-3 bg-[#6840ED33] '/>

        <div>
            <h4 className='text-2xl font-bold'>{HeadingL}</h4>
            <p className='text-xl font-normal'>{DescL}</p>
        </div>
        </div>

        <div className={`flex items-center gap-x-3 bg-white rounded-lg p-4 py-5 ${(keyValue+1) %2 !== 0? 'w-2/6':'w-4/6'}`}>
            <img src={IconR} alt="" className='w-[40px] h-[40px] rounded-full p-3 bg-[#6840ED33] '/>
            
            <div>
            <h4 className='text-2xl font-bold'>{HeadingR}</h4>
            <p className='text-xl font-normal'>{DescR}</p>
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