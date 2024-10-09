'use client'
import Heroslider from '../Components/Heroslider'
import MainNavbar from '../Components/MainNavbar'
import Secondarynavbar from '../Components/Secondarynavbar'

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
        <div className='content-sec flex'>

            <div className='sidebar-sec w-[20vw] h-screen bg-red-500'>

            </div>

            <div className='main-sec w-[80vw] h-screen bg-blue-500 px-10 py-10'>
                <Heroslider images={images}/>
            </div>

        </div>
    </div>
  )
}

export default page