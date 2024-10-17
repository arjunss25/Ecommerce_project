import React from 'react'
import MainNavbar from '../Components/MainNavbar'
import Secondarynavbar from '../Components/Secondarynavbar'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-full'>
      <MainNavbar/>
      <Secondarynavbar/>

      <div className="top-component w-full flex flex-col items-center p-10">
        <Image src={'/paymentsuccessful.png'} width={120} height={120}></Image>
        <h1 className='mt-10 text-[3rem] font-medium text-center'>Thank You ! <span className='bg-[#D7F400] p-2'>Order Successful</span></h1>
      </div>



      {/* sec-btn-bar */}
      <div className="sec-btn-nav w-full h-[12vh] bg-red-500 flex items-center justify-between border-t-[2px] border-b-[2px] border-black px-10">
        <div className="left-btns flex gap-5">
          <Link href="" className='px-4 py-1 rounded-full border-[1px] border-black'>Login</Link>
          <Link href="" className='px-4 py-1 rounded-full border-[1px] border-black'>Signup</Link>
        </div>
      </div>

    </div>
  )
}

export default page