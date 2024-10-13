// 'use client'

import { products } from "@/app/utils/Produtsarray";

// import { useParams } from "next/navigation"


// const ProductId = () => {

//     const params = useParams()
    
    
//   return (
//     <div>ProductId{params.productid}</div>
//   )
// }

// export default ProductId









const test = ({params}) => {

console.log(params);

    const id = params.productid

    let product = products[id]
    
  return (
    // <div>ProductId{params.productid}</div>
    <div>
      <h1>{products.name}</h1>
      <h2>{products.price}</h2>
    </div>
    
  )
}

export default test