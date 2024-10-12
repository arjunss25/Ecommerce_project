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









const ProductId = ({params}) => {

console.log(params);

    const id = params.productid

    let product = products[id]
    
  return (
    // <div>ProductId{params.productid}</div>
    <div>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
    </div>
    
  )
}

export default ProductId