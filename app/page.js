'use client'

import dynamic from 'next/dynamic';
import MainNavbar from "./Components/MainNavbar"
import Secondarynavbar from "./Components/Secondarynavbar"
import Landingsmallcategory from './Components/Landingsmallcategory';
import Taglinesection from './Components/Taglinesection';
import Newlaunches from './Components/Newlaunches';

const Heroslider = dynamic(() => import('./Components/Heroslider'), { ssr: false });

const Page = () => {
  const images = [
    { image: "/hero1.jpg", alt: "Hero image 1 description" },
    { image: "/hero1.jpg", alt: "Hero image 2 description" },
    { image: "/hero1.jpg", alt: "Hero image 3 description" },
  ];

  return (
    <div>
      <MainNavbar/>
      <Secondarynavbar/>
      <Heroslider images={images}/>
      <Landingsmallcategory/>
      <Taglinesection/>
      <Newlaunches/>
    </div>
  )
}

export default Page