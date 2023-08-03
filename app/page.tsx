import { CarCard, CustomFilter, Hero, SearchBar } from '@/components'
import { Car } from '@/components/CarCard';
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {
  const allCars = await fetchCars();
  const noData = !Array.isArray(allCars) || allCars.length === 0 || !allCars;
  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
          <div className='home__filters'>
            <SearchBar />
            <div className='home__filter-container'>
              <CustomFilter title='fuel' />
              <CustomFilter title='year' />
            </div>
          </div>
          {noData ? <>Nothing here...</> : <>
            <div className='home__cars-wrapper'>
              {allCars.map((car: Car, i) => <CarCard key={i} car={car} />)}
            </div>
          </>}
        </div>
      </div>
    </main>
  )
}
