import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';
import Dropdown from './Dropdown';

const Secondarynavbar = () => {
  return (
    <div className='w-full h-[10vh] bg-[#AAF1FF] px-10  hidden lg:flex items-center justify-between'>

        <div className="category-div relative">
            <Link href="" className='flex gap-2 items-center'>Category <IoMdArrowDropdown /></Link>
            <Dropdown/>
        </div>

        <div className="nav-links-main flex gap-10">
            <Link href="">Home</Link>
            <Link href="" className='flex gap-2 items-center' >Products <IoMdArrowDropdown /></Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
        </div>

        <div className="profile-main flex gap-5 items-center">
            <Link href="" className='px-4 py-1 rounded-full border-[1px] border-black'>Login</Link>
            <Link href="" className='px-4 py-1 rounded-full border-[1px] border-black'>Signup</Link>
            <Link href="" className='text-[1.7rem]'><CgProfile /></Link>
        </div>
    </div>
  )
}

export default Secondarynavbar