
import Productcard from './Productcard'
import Mainbtn from './Mainbtn'
import Link from 'next/link'
import { products } from '../utils/Produtsarray'

const Newlaunches = () => {

    const newLaunchProducts = products.filter(product => product.category === 'newlaunch')

  return (
    <div className='w-full h-auto flex flex-col items-center '>
        <h1 className='text-[#3C486B] text-[1.8rem] lg:text-[2.5rem] font-bold text-center'>New <span className='text-[#FF8686]'>Launches</span></h1>

        <h2 className='mb-10'>Recently Launched</h2>
        <div className="product-sec w-full flex gap-8 px-10 flex-wrap shrink-0 justify-center">
        
            {newLaunchProducts.map((product) =>(
                <Productcard key={product.id} product={product} />
            ))}



        </div>
        <div className="bt-section mt-10">
        <Link href={'/products/newlaunch'} >
          <Mainbtn/>
        </Link>
        </div>
    </div>
  )
}

export default Newlaunches