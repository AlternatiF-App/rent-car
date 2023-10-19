'use client'

import CarsFiltersOption from '@/components/Home/CarsFiltersOption'
import CarsList from '@/components/Home/CarsList'
import Hero from '@/components/Home/Hero'
import SearchInput from '@/components/Home/SearchInput'
import ToastMsg from '@/components/ToastMsg'
import { BookCreatedFlagContext } from '@/context/BookCreatedFlagContext'
import { getCarsList } from '@/services'
import { useEffect, useState } from 'react'

const Home = () => {

  const [carsList, setCarsList] = useState([])
  const [carsOrgList, setCarsOrgList] = useState([])
  const [showToastMsg, setShowToastMsg] = useState<boolean>(false)

  const getCarsList_ = async () => {
    const result:any = await getCarsList()
    setCarsList(result?.carLists)
    setCarsOrgList(result?.carLists)
  }

  useEffect(() => {
    getCarsList_()
  }, [])

  const filterCarList = (brand: string) => {
    const filterList = carsOrgList.filter((item: any) => item.carBrand === brand)
    setCarsList(filterList)
  }

  const orderCarList = (order: any) => {
    const sortedData = [...carsOrgList].sort((a: any, b: any) => 
      order==-1 ? a.price - b.price : b.price - a.price
    )
    setCarsList(sortedData)
  }

  useEffect(()=>{
    if (showToastMsg) {
      setTimeout(function(){
        setShowToastMsg(false)
      },4000)
    }
  },[showToastMsg])

  return (
    <div className='px-6 py-4 sm:px-10 md:px-20'>
      <BookCreatedFlagContext.Provider value={{showToastMsg,setShowToastMsg}}>
        <Hero/>
        <SearchInput/>
        <CarsFiltersOption
          carsList={carsOrgList}
          orderCarList={(value: string) => orderCarList(value)}
          setBrand={(value: string) => filterCarList(value)}
        />
        <CarsList carsList={carsList} />
        {
          showToastMsg ? <ToastMsg msg={'Booking Created Successfully!'} /> : null
        }
      </BookCreatedFlagContext.Provider>
    </div>
  )
}

export default Home
