'use client'
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const Productcard = ({product}) => {


const dispatch = useDispatch()

const handleAddToCart = () =>{
    dispatch(addToCart(product))
};

if(!product){
    return<div>
    Loading...
</div>
    
}



const {name,price,rating,initialPrice,percentOff} = product

  return (
    <div className='w-[18rem] h-[55vh] bg-[#F7F6FB] rounded-[1.5rem] pb-3'>
        <div className="product-img h-[45%] overflow-hidden relative">

            <div className="fav absolute top-5 left-5 bg-white w-10 h-10 rounded-full flex items-center justify-center text-[1.5rem]">
                <IoMdHeartEmpty />
            </div>

            <div className="offer absolute top-6 right-5 bg-white w-24 h-8 rounded-full flex items-center justify-center text-[1.5rem]">
                <h1 className='text-[1rem] font-semibold'>{percentOff}% Off</h1>
            </div>


            <Image src='/productimg.png' width={500} height={150}></Image>
        </div>

        <div className="elements h-[40%]  w-full flex pl-5 ">


            {/* left-sec */}
            <div className="left-section w-[60%] h-full flex flex-col justify-center leading-none gap-1 items-start">
                <h2 className='text-[0.9rem]'>Perfume</h2>
                <div className='w-44'>
                <h2 className='text-[1.5rem] font-semibold truncate'>{name}</h2>
                </div>

                <h1 className='text-[1.5rem] font-semibold'>₹{price}</h1>
                <h1 className='line-through text-red-400'>₹{initialPrice}</h1>
            </div>

            {/* right-sec */}
            <div className="right-section w-[40%] h-full flex flex-col items-end  relative">


                <div className="review-btn  flex w-[5rem] h-[2rem] rounded-full bg-gradient-to-t from-green-500 to-green-800 flex items-center justify-center gap-2 text-white mt-5 mr-5">
                    <IoMdStar className='text-[1rem]'/>
                    <h1 className='text-[1rem]'>{rating}</h1>
                </div>


                <div className="add-cart-btn cursor-pointer w-[9rem] py-2 rounded-tl-full rounded-bl-full bg-black text-white flex mt-2 justify-center items-center gap-2 absolute bottom-8 right-0" onClick={handleAddToCart}>
                <IoMdCart className='text-[1.2rem]' />
                <h1 className='text-[0.9rem]'>Add to Cart</h1>
                </div>
            </div>
        </div>

        <div className="btn-sec h-[15%]  w-full flex items-center justify-center">
            <button className='px-14 py-2 border-2 border-orange-500 rounded-full text-orange-500 bg-white'>Buy Now</button>
        </div>


    </div>
  )
}

export default Productcard




