import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const Ordersuccessfulcard = () => {
  return (
    <div className="w-full sm:w-[98vw]  lg:w-[50vw]  bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 border-b-[1px] border-zinc-700 py-4">
          <span className="text-green-500 font-semibold text-center sm:text-left">COMPLETED</span>
          <div className="flex items-center mt-2 sm:mt-0">
            <span className="mr-2 text-sm text-gray-600 text-center sm:text-left">
              Your order has been successfully completed
            </span>
            <CheckCircle2 className="text-green-500" size={16} />
          </div>
        </div>

        <div className="flex flex-row items-start mb-4">
          <Image src='/productimg.png' width={120} height={120} alt='Product' />
          <div className="ml-8 ">
            <h3 className="font-bold text-lg text-left">SAUVAGE</h3>
            <p className="text-gray-600  text-left">50 ML</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 text-center sm:text-left">
          <span className="text-gray-600">Quantity: 1</span>
          <span className="font-semibold">₹ 769.00</span>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Order Total:</span>
            <span className="font-bold text-lg">₹ 769.00</span>
          </div>
        </div>

        <div className="btm-sec w-full flex flex-col sm:flex-row justify-between items-center mt-8">
          <p className="text-sm text-gray-500 mt-4 sm:mt-0 w-full sm:w-[60%] text-center sm:text-left">
            Thanks for completing your order! We look forward to serving you again.
          </p>
          
          <button className="mt-4 sm:mt-0 bg-black text-[#D2FF1C] py-2 px-5 rounded hover:bg-gray-800 transition duration-300">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ordersuccessfulcard;
