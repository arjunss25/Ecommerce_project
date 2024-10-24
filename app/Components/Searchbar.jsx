// 'use client'
// import Link from 'next/link';
// import { GoSearch } from 'react-icons/go';
// import { IoCloseOutline } from "react-icons/io5";
// import { useState } from'react';


// const Searchbar = () => {

// const [visible, setvisible] = useState(false)

// const searchToggle = ()=>{
    
//     console.log('efahegf')
// }


//   return (
//     <div className={`absolute w-full h-[50vh] bg-white top-0 left-0 z-[50] ${visible == true ? "visible" : "hidden"}`}>
//         <div className="top-sec w-full flex items-center justify-center gap-3 lg:gap-10 h-[15vh]">
//             <GoSearch onClick={searchToggle} className='text-[1.5rem] cursor-pointer'/>
//             <input type="text" className='w-[70vw] sm:w-[80vw] h-[6vh] rounded-[2rem] bg-zinc-200 px-5 ' />
//             <IoCloseOutline  className='text-[2rem] cursor-pointer'/>
            
//         </div>


//         <div className="btm-sec w-full h-auto px-10 lg:px-20 py-10 lg:py-10 ">
//             <h1 className='text-[1.8rem] text-zinc-500'>Quick Links</h1>
//             <div className="links flex flex-col text-[1.5rem]">
//                 <Link href="">Perfumes</Link>
//                 <Link href="">Scent</Link>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Searchbar












'use client'
import Link from 'next/link';
import { GoSearch } from 'react-icons/go';
import { IoCloseOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { toggleSearch, setSearchQuery } from '../store/Slice'; 

const Searchbar = () => {
  const dispatch = useDispatch();
  const isSearchOpen = useSelector((state) => state.search.isSearchOpen);
  const searchQuery = useSelector((state) => state.search.searchQuery);

  const searchToggle = () => {
    dispatch(toggleSearch());
  }

  const handleInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  }

  return (
    <div className={`absolute w-full h-[50vh] bg-white top-0 left-0 z-[99999] ${isSearchOpen ? "visible" : "hidden"}`}>
      <div className="top-sec w-full flex items-center justify-center gap-3 lg:gap-10 h-[15vh]">
        <GoSearch onClick={searchToggle} className='text-[1.5rem] cursor-pointer'/>
        <input 
          type="text" 
          className='w-[70vw] sm:w-[80vw] h-[6vh] rounded-[2rem] bg-zinc-200 px-5'
          value={searchQuery}
          onChange={handleInputChange}
        />
        <IoCloseOutline onClick={searchToggle} className='text-[2rem] cursor-pointer'/>
      </div>

      <div className="btm-sec w-full h-auto px-10 lg:px-20 py-10 lg:py-10 ">
        <h1 className='text-[1.8rem] text-zinc-500'>Quick Links</h1>
        <div className="links flex flex-col text-[1.5rem]">
          <Link href="">Perfumes</Link>
          <Link href="">Scent</Link>
        </div>
      </div>
    </div>
  )
}

export default Searchbar