'use client'

import { useEffect, useState } from 'react'

const CarsFiltersOption = ({ carsList, setBrand, orderCarList }: any) => {

  const [brandList, setBrandList] = useState<any>()
  const BrandSet = new Set()

  useEffect(() => {
    if (carsList) {
      filterCarList()
    }
  }, [carsList])

  const filterCarList = () => {
    carsList.forEach((element: any) => {
      BrandSet.add(element.carBrand)
    })
    setBrandList(Array.from(BrandSet))
  }

  return (
    <div className='mt-10 flex items-center justify-between'>
      <div>
        <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
        <h2>Explore our cars you might likes</h2>
      </div>
      <div className='flex items-center gap-x-6'>
        <select className='select select-bordered w-full max-w-xs focus:outline-none'
          onChange={(e) => orderCarList(e.target.value)}
        >
          <option disabled selected>Price</option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select className='select select-bordered w-full max-w-xs hidden md:block focus:outline-none'
          onChange={(e) => setBrand(e.target.value)}
        >
          <option disabled selected>Manufactural</option>
          {
            brandList && brandList.map((brand: string, index: number) => (
              <option key={index}>{ brand }</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default CarsFiltersOption
