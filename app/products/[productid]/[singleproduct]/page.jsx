

import MainNavbar from '@/app/Components/MainNavbar';
import Secondarynavbar from '@/app/Components/Secondarynavbar';
import { products } from '@/app/utils/Produtsarray';
import React from 'react'

const page = ({params}) => {
    // console.log(params);
    
  return (
    <div>
        {products.map((items,index)=>{
            if(params.singleproduct == items.id){
                return(
                    <>
                    
                    <MainNavbar/>
                    <Secondarynavbar/>


                    <div className="product-view-section w-full h-[80vh] bg-red-200 flex">
                        <div className="left-section w-[70vw] h-full bg-green-100">

                            <div className="left w-[60%] h-full bg-blue-500"></div>
                            <div className="right"></div>
                        </div>
                        <div className="right-section w-[30vw] h-full bg-yellow-100"></div>
                    </div>

                    </>
                )
                
            }
        })}
    </div>
  )
}

export default page