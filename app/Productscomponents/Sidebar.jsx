import React from 'react'
import Checkbox from '../Components/Checkbox'
import PriceRangeSlider from '../Components/Rangeslider'
import Sidebarrating from '../Components/Sidebarrating'

const Sidebar = () => {
  return (
    <div className='w-full p-10'>
      <div className="filters flex flex-col gap-5">
        {/* perfumes */}
        <div className='flex items-center justify-stert gap-3'>
          <Checkbox/>
          <h1 className='text-[1.2rem] font-medium'>Perfumes</h1>
        </div>

        {/* scent */}
        <div className='flex items-center justify-stert gap-3'>
          <Checkbox/>
          <h1 className='text-[1.2rem] font-medium'>Scent</h1>
        </div>

        <PriceRangeSlider/>
        <Sidebarrating/>
      </div>
    </div>
  )
}

export default Sidebar