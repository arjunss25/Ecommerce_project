

import { CiFilter } from "react-icons/ci";
import Link from 'next/link';
import MainNavbar from "@/app/Components/MainNavbar";
import Secondarynavbar from "@/app/Components/Secondarynavbar";
import Heroslider from "@/app/Components/Heroslider";
import { products } from "@/app/utils/Produtsarray";
import Productcard from "@/app/Components/Productcard";
import Sidebar from "@/app/Productscomponents/Sidebar";


const page = ({params}) => {

    const images = [
        { image: "/hero1.jpg", alt: "Hero image 1 description" },
        { image: "/hero1.jpg", alt: "Hero image 2 description" },
        { image: "/hero1.jpg", alt: "Hero image 3 description" },
      ];
      
// console.log(params.productid);




  return (
    <div>
        <MainNavbar/>
        <Secondarynavbar/>
        <div className='content-sec flex relative'>

            <div className='sidebar-sec w-[300px] h-screen absolute md:relative z-[50] hidden lg:block '>
              <Sidebar/>
            </div>

            <div className='main-sec w-full lg:w-[calc(100%-300px)] min-h-screen  px-10 py-2 lg:py-10'>
                <div className='filter-nav w-full h-[10vh] visible lg:hidden'>
                    <CiFilter className='text-[2rem]' />
                </div>
                <Heroslider images={images}/>



              {products.map((items,index)=>{

                if(items.category == params.productid){
                  return(
                    <Link key={index} href={`${params.productid}/${items.id}`}>
                    <Productcard name={items.name}/>
                    </Link>
                  )
                }else{}

              }
               
              )}








            </div>

        </div>

    </div>
  )
}

export default page










































