
const CarsFiltersOption = () => {
  return (
    <div className='mt-10 flex items-center justify-between'>
      <div>
        <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
        <h2>Explore our cars you might likes</h2>
      </div>
      <div className='flex items-center gap-x-6'>
        <select className='select select-bordered w-full max-w-xs focus:outline-none'>
          <option disabled selected>Price</option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select className='select select-bordered w-full max-w-xs hidden md:block focus:outline-none'>
          <option disabled selected>Manufactural</option>
          <option>Honda</option>
          <option>BMW</option>
          <option>Toyota</option>
        </select>
      </div>
    </div>
  )
}

export default CarsFiltersOption
