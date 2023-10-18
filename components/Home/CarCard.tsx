import Image from 'next/image'
import { PiSteeringWheelFill } from 'react-icons/pi'
import { MdAirlineSeatReclineNormal } from 'react-icons/md'
import { FaGasPump } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'

const CarCard = (props: any) => {
  const car = props.car

  return (
    <div className='group bg-gray-50 p-2 sm:p-6 rounded-3xl m-1 sm:m-6 hover:bg-white hover:border-[1px] cursor-pointer duration-50 border-blue-500'>
      <h2 className='text-xl font-medium mb-2'>
        { car.name }
      </h2>
      <h2 className='text-[28px] font-bold mb-2'>
        <span className='text-xs font-light'>$</span>
        { car.price }
        <span className='text-xs font-light'> /day</span>
      </h2>
      <Image
        src={car.image?.url}
        alt={car.name}
        width={220}
        height={200}
        className='w-[250px] h-[150px] mb-3 object-contain'
      />

      <div className='flex justify-around group-hover:hidden'>
        <div className='text-center text-gray-500'>
          <PiSteeringWheelFill className='w-full text-[22px] mb-2'/>
          <h2 className='line-clamp-5 text-[14px] font-light'>{ car?.carType }</h2>
        </div>
        <div className='text-center text-gray-500'>
          <MdAirlineSeatReclineNormal  className='w-full text-[22px] mb-2'/>
          <h2 className='line-clamp-5 text-[14px] font-light'>{ car.seat } Seat</h2>
        </div>
        <div className=' text-center text-gray-500'>
          <FaGasPump className='w-full text-[22px] mb-2'/>
          <h2 className='line-clamp-5 text-[14px] font-light'>{ car.carAvg } MPG</h2>
        </div>
      </div>

      <button className='hidden group-hover:flex bg-gradient-to-r from-blue-400 to-blue-700 p-2 rounded-lg text-white w-full px-6 justify-between'>
        Rent Now
        <span className='bg-blue-400 p-1 rounded-md'>
          <BsArrowRight className='w-4 h-4 text-white'/>
        </span>
      </button>
    </div>
  )
}

export default CarCard
