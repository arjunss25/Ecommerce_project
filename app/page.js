'use client'

import dynamic from 'next/dynamic';
import MainNavbar from "./Components/MainNavbar"
import Secondarynavbar from "./Components/Secondarynavbar"
import Landingsmallcategory from './Components/Landingsmallcategory';
import Taglinesection from './Components/Taglinesection';
import Newlaunches from './Components/Newlaunches';
import Marquee from './Components/Marquee';
import Bestseller from './Components/Bestseller';
import Toppicks from './Components/Toppicks';
import Justtrending from './Components/Justtrendign';
import Shopbycategory from './Components/Shopbycategory';
import Bestdeal from './Components/Bestdeal';
import Testimonialmain from './Components/Testimonialmain';
import Footer from './Components/Footer';

const Heroslider = dynamic(() => import('./Components/Heroslider'), { ssr: false });

const Page = () => {
  const images = [
    { image: "/hero1.jpg", alt: "Hero image 1 description" },
    { image: "/hero1.jpg", alt: "Hero image 2 description" },
    { image: "/hero1.jpg", alt: "Hero image 3 description" },
  ];



    // marquee
    let marquee = [
      {
        img:'/JUNE.png'
      },
      {
        img:'/MAX.png'
      },
      {
        img:'/NINO.png'
      },
      {
        img:'/ZINE.png'
      },
      {
        img:'/InTrend.png'
      },
      
    ]




    
  // best-seller
  let bestseller = [
    {
      img:"/besrseller (1).png",
      title:'Mexico'
    },{
      img:"/besrseller (2).png",
      title:'Ensens'
    },
    {
      img:"/besrseller (3).png",
      title:'Chanel'
    },
    {
      img:"/besrseller (4).png",
      title:'Origin'
    },
  ]
  

  return (
    <div>
      <MainNavbar/>
      <Secondarynavbar/>
      <Heroslider images={images}/>
      <Landingsmallcategory/>
      <Taglinesection/>
      <Newlaunches/>
      <Marquee img={marquee}/>
      <Bestseller data={bestseller}/>
      <Toppicks/>
      <Justtrending/>
      <Shopbycategory/>
      <Bestdeal/>
      <Testimonialmain/>
      <Footer/>
    </div>
  )
}

export default Page