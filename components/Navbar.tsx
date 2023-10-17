import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='shadow-sm border-b-[1px]'>
      <div className='container mx-auto flex items-center justify-between px-6 py-4'>
        <Image
          src='/logo.png'
          alt='logo'
          width={100}
          height={100}
        />

        <ul className='hidden md:flex items-center gap-x-6'>
          <li className='hover:bg-blue-500 hover:text-white px-4 py-2 cursor-pointer rounded-full'>Home</li>
          <li className='hover:bg-blue-500 hover:text-white px-4 py-2 cursor-pointer rounded-full'>History</li>
          <li className='hover:bg-blue-500 hover:text-white px-4 py-2 cursor-pointer rounded-full'>Contact Us</li>
        </ul>
        
        <UserButton/>
      </div>
    </nav>
  )
}

export default Navbar
