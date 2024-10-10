// 'use client'

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

    
    
  return (
    <div>ProductId{params.productid}</div>
  )
}

export default ProductId