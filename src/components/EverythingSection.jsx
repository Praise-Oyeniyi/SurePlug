import React from 'react'

const Everything = ({IconL, IconR, DescL, DescR, HeadingL, HeadingR, keyValue}) => {
  return (
    <div className='w-full flex items-stretch justify-between gap-x-3' keyValue>
        <div className={`flex md:flex-row flex-col justify-stretch md:justify-start !items-center w-3/6 gap-x-4 bg-white rounded-lg p-5 py-5 ${(keyValue+1) %2 == 0? 'md:w-2/6':'md:w-4/6'} ${IconR?'':' py-7 !w-full'}`}>
          <img src={IconL} alt="" className='w-[40px] h-[40px] rounded-full p-3 bg-[#6840ED33] '/>

          <div className='text-center md:text-left '>
              <h4 className='text-sm md:text-xl font-bold py-2 md:py-0'>{HeadingL}</h4>
              <p className='text-xs md:text-lg font-normal'>{DescL}</p>
          </div>
        </div>

        <div className={`flex md:flex-row flex-col justify-stretch md:justify-start !items-center w-3/6 gap-x-4 bg-white rounded-lg p-5 py-5 ${(keyValue+1) %2 !== 0? 'md:w-2/6':'md:w-4/6'} ${IconR?'':'hidden'}`}>
            <img src={IconR} alt="" className='w-[40px] h-[40px] rounded-full mx-auto md:m-auto p-3 bg-[#6840ED33] '/>
            
            <div className='text-center md:text-left'>
              <h4 className='text-sm md:text-xl font-bold py-2 md:py-0'>{HeadingR}</h4>
              <p className='text-xs md:text-lg font-normal'>{DescR}</p>
            </div>
        </div>
    </div>
  )
}

export default Everything


