import { HiLocationMarker } from 'react-icons/hi'

const SearchInput = () => {
  return (
    <div className='my-4'>
      <h2 className='text-center text-[20px] text-gray-400 mb-4'>
        Lets Search what you need
      </h2>
      <div className='flex justify-center'>
        <div className='flex bg-gray-100 px-4 py-2 gap-2 rounded-full divide-x'>
          <div className='flex items-center'>
            <HiLocationMarker
              className='h-5 w-5 text-black' 
            />
            <input
              type='text' placeholder='Location'
              className='px-4 py-2 outline-none bg-transparent'
            />
          </div>
          <div>
            <input
              type='date'
              className='px-4 py-2 outline-none bg-transparent text-gray-400'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchInput
