'use client'

import { products } from '@/app/utils/Produtsarray';
import React from 'react'

const page = ({params}) => {
    console.log(params);
    
  return (
    <div>
        {products.map((items,index)=>{
            if(params.singleproduct == items.id){
                return(
                    <>
                    <h1>{items.name}</h1>
                    </>
                )
                
            }
        })}
    </div>
  )
}

export default page