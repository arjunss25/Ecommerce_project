'use client'
import React, { useEffect, useRef } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';
import Dropdown from './Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { closeAllDropdowns, toggleCategory, toggleProducts } from '../store/Dropdownslice';


const Secondarynavbar = () => {
  const dispatch = useDispatch();
  const { categoryOpen, productsOpen } = useSelector((state) => state.dropdown);
  const navbarRef = useRef(null);

  // Handle outside clicks to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        dispatch(closeAllDropdowns());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div className='w-full h-[10vh] bg-[#AAF1FF] px-10 hidden lg:flex items-center justify-between' ref={navbarRef}>
      <div className="category-div relative">
        <Link href="" className='flex gap-2 items-center' onClick={(e) => { e.preventDefault(); dispatch(toggleCategory()); }}>
          Category <IoMdArrowDropdown />
        </Link>
        <Dropdown isOpen={categoryOpen}>
          <ul>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
          </ul>
        </Dropdown>
      </div>

      <div className="nav-links-main flex gap-10">
        <Link href="">Home</Link>
        <div className="products-div relative">
          <Link href="" className='flex gap-2 items-center' onClick={(e) => { e.preventDefault(); dispatch(toggleProducts()); }}>
            Products <IoMdArrowDropdown />
          </Link>
          <Dropdown isOpen={productsOpen}>
            <ul>
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
            </ul>
          </Dropdown>
        </div>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
      </div>

      <div className="profile-main flex gap-5 items-center">
        <Link href="" className='px-4 py-1 rounded-full border-[1px] border-black'>Login</Link>
        <Link href="" className='px-4 py-1 rounded-full border-[1px] border-black'>Signup</Link>
        <Link href="" className='text-[1.7rem]'><CgProfile /></Link>
      </div>
    </div>
  );
};

export default Secondarynavbar;
