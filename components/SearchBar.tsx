'use client';
import { useState } from 'react';
import { SearchManufacturer } from ".";

export function SearchBar() {
  const [manufacturer, setManufacturer] = useState('');

  function handleSearch() {
    console.log('here')
  }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer 
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}
