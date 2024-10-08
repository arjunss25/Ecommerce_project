
import Productcard from './Productcard'
import Mainbtn from './Mainbtn'

const Bestdeal = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center mt-20'>
        <h1 className='text-[#3C486B] text-[1.8rem] lg:text-[2.5rem] font-bold text-center'>Best <span className='text-[#FF8686]'>Deal</span></h1>
        <div className="product-sec w-full flex gap-8 px-10 flex-wrap shrink-0 justify-center mt-10">
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        </div>
        <div className="bt-section mt-10">
        <Mainbtn/>
        </div>
        
    </div>
  )
}

export default Bestdeal