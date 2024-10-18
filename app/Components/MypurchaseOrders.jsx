import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Ordersuccessfulcard from './Ordersuccessfulcard';


const MypurchaseOrders = () => {
  return (
    <div className='w-full'>
        <div className="top flex mt-10 justify-between items-start lg:flex-row flex-col-reverse">
            <div className="title-section lg:mt-0 mt-10 ">
                <h1 className='text-[2rem] font-medium'>Purchase History</h1>
                <p className=''>Manage and create a great shopping experience for you</p>
            </div>

            <div className="search w-[20rem] h-[2.5rem] border-black border-[2px] rounded-full overflow-hidden flex">
                <input type="text" className="w-[90%] h-full outline-none text-[0.9rem] px-3" placeholder='Search your product name, order id '/>
                <div className="icon-sec w-[10%]  flex items-center justify-center bg-white">
                    <IoIosSearch className='text-[1.2rem]'/>
                </div>
            </div>

        </div>


        <div className="content-sec mt-10">
            <Ordersuccessfulcard/>
        </div>
    </div>
  )
}

export default MypurchaseOrders