import Hero from '@/components/Home/Hero'
import SearchInput from '@/components/Home/SearchInput'

const Home = () => {
  return (
    <div className='px-6 py-4 sm:px-10 md:px-20'>
      <Hero/>
      <SearchInput/>
    </div>
  )
}

export default Home
