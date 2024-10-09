import Image from "next/image"

const Bestseller = ({data}) => {
  return (
    <div className='w-full h-auto'>
        
        <h1 className='text-[#3C486B] text-[1.8rem] lg:text-[2.5rem] font-bold text-center mt-10'>Explore <span className='text-[#FF8686]'>Best Sellers</span></h1>

        <div className='w-full  mt-10 flex items-center justify-center gap-8 flex-wrap'>
            {data.map((item,index)=>(
                <div key={index} className='flex flex-col items-center '>
                    <Image src={item.img} width={250} height={150} alt="image"></Image>
                    <h1 className='text-[1.2rem] font-bold mt-2'>{item.title}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Bestseller