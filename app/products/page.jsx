'use client'
import Heroslider from '../Components/Heroslider'
import MainNavbar from '../Components/MainNavbar'
import Secondarynavbar from '../Components/Secondarynavbar'
import { CiFilter } from "react-icons/ci";
import { products } from '../utils/Produtsarray';
import Link from 'next/link';

const page = () => {

    const images = [
        { image: "/hero1.jpg", alt: "Hero image 1 description" },
        { image: "/hero1.jpg", alt: "Hero image 2 description" },
        { image: "/hero1.jpg", alt: "Hero image 3 description" },
      ];
      




  return (
    <div>
        <MainNavbar/>
        <Secondarynavbar/>
        <div className='content-sec flex relative'>

            <div className='sidebar-sec w-[300px]  h-screen bg-red-500 absolute md:relative z-[50] hidden lg:block '>

            </div>

            <div className='main-sec w-full lg:w-[calc(100%-300px)] min-h-screen  px-10 py-2 lg:py-10'>
                <div className='filter-nav w-full h-[10vh] visible lg:hidden'>
                    <CiFilter className='text-[2rem]' />
                </div>
                <Heroslider images={images}/>


                {products.map((product) =>(
                    <Link href={`/products/${product.id}`}>
                        <div key={product.id}>
                        <h1>{product.name}</h1>
                        <h2>{product.price}</h2>
                        </div>  
                    </Link>
                ))}








            </div>

        </div>

    </div>
  )
}

export default page