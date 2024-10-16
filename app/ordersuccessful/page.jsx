import React from 'react'
import MainNavbar from '../Components/MainNavbar'
import Secondarynavbar from '../Components/Secondarynavbar'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full'>
      <MainNavbar/>
      <Secondarynavbar/>

      <div className="top-component w-full flex flex-col items-center p-10">
        <Image src={'/paymentsuccessful.png'} width={120} height={120}></Image>
        <h1 className='mt-10 text-[3rem] font-medium text-center'>Thank You ! <span className='bg-[#D7F400] p-2'>Order Successful</span></h1>
      </div>
    </div>
  )
}

export default page