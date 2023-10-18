'use client'

import CarsFiltersOption from '@/components/Home/CarsFiltersOption'
import CarsList from '@/components/Home/CarsList'
import Hero from '@/components/Home/Hero'
import SearchInput from '@/components/Home/SearchInput'
import { getCarsList } from '@/services'
import { useEffect, useState } from 'react'

const Home = () => {

  const [carsList, setCarsList] = useState([])

  const getCarsList_ = async () => {
    const result:any = await getCarsList()
    setCarsList(result?.carLists)
  }

  useEffect(() => {
    getCarsList_()
  }, [])

  return (
    <div className='px-6 py-4 sm:px-10 md:px-20'>
      <Hero/>
      <SearchInput/>
      <CarsFiltersOption/>
      <CarsList carsList={carsList} />
    </div>
  )
}

export default Home
