import React from 'react'
import Checkbox from './Checkbox'
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const Billinginfobox = () => {
  return (
    <div className='w-full max-w-md h-auto min-h-[200px] border-2 border-black rounded-3xl p-4 sm:p-5 flex flex-col justify-between'>
      <div className="top-sec w-full flex justify-between items-center">
        <h1 className='font-medium text-lg sm:text-xl'>Name</h1>
        <Checkbox/>
      </div>

      <h2 className='my-4 text-sm sm:text-base'>1234 Maple Street Springfield, IL 62701 United States</h2>

      <div className="btn-sec flex flex-col sm:flex-row gap-3 sm:gap-5">
        <button className="flex items-center justify-center gap-2 w-full sm:w-28 h-10 bg-zinc-200 rounded-full text-sm">
          <FiEdit />
          Edit
        </button>
        <button className="flex items-center justify-center gap-2 w-full sm:w-28 h-10 bg-zinc-200 rounded-full text-sm">
          <MdDelete className="text-red-500" />
          Remove
        </button>
      </div>
    </div>
  )
}

export default Billinginfobox